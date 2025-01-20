// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    // Log the beginning of the request
    console.log('Starting login process...');

    // Handle CORS preflight request
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200 });
    }

    // Parse the request body
    const body = await request.json();
    console.log('Received login request for email:', body.email);

    // Validate input
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      console.log('Validation failed:', validation.error.errors);
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;
    
    const user = await prisma.user.findUnique({
      where: { email },
      include: { 
        profile: true,
      },
    });

    if (!user || !user.isActive) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValidPassword = await compare(password, user.password);
    
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT (modified to include fallback secret)
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'fallback-secret-key',  // Added fallback secret
      { expiresIn: '24h' }
    );

    // Create session
    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        userAgent: request.headers.get('user-agent') || undefined,
        ipAddress: request.headers.get('x-forwarded-for') || undefined,
      },
    });

    // Update lastLoginAt in User model instead of Profile
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Simplified cookie setting
    (await
          // Simplified cookie setting
          cookies()).set('session_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    // Modified response structure
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        lastLoginAt: user.lastLoginAt,  // Added lastLoginAt
        profile: user.profile
      }
    });

  } catch (error) {
    // Simplified error handling
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}