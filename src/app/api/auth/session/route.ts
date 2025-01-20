// app/api/auth/session/route.ts
import { NextResponse } from 'next/server';
import { prisma, dbOperation } from '@/lib/db';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const token = (await cookies()).get('session_token')?.value;

    if (!token) {
      return NextResponse.json({ user: null });
    }

    verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      email: string;
    };

    const session = await dbOperation(
      () =>
        prisma.session.findFirst({
          where: {
            token,
            expires: { gt: new Date() },
          },
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        }),
      'Failed to fetch session'
    );

    if (!session) {
      (await cookies()).delete('session_token');
      return NextResponse.json({ user: null });
    }

    // Update last activity
    await prisma.session.update({
      where: { id: session.id },
      data: { lastActivity: new Date() },
    });

    const { user } = session;
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error('Session check error:', error);
    (await cookies()).delete('session_token');
    return NextResponse.json({ user: null });
  }
}

// app/api/auth/logout/route.ts
export async function POST() {
  try {
    const token = (await cookies()).get('session_token')?.value;

    if (token) {
      await dbOperation(
        () =>
          prisma.session.deleteMany({
            where: { token },
          }),
        'Failed to delete session'
      );
    }

    (await cookies()).delete('session_token');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}