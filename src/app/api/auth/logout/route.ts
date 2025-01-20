// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/db';

export async function POST() {
  try {
    const token = (await cookies()).get('session_token')?.value;

    if (token) {
      // Invalidate the session in the database
      await prisma.session.updateMany({
        where: { token, isValid: true },
        data: { isValid: false }
      });

      // Clear the cookie
      (await cookies()).delete('session_token');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}