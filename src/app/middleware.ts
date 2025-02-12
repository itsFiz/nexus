// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// Paths that don't require authentication
const publicPaths = ['/', '/login', '/register', '/api/auth/login', '/api/auth/register', '/auth/signin'];

// Add this interface near the top of the file, after the imports
interface JWTPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export async function middleware(request: NextRequest) {
  // Handle CORS for OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    const { pathname } = request.nextUrl;

    // Allow public paths
    if (publicPaths.includes(pathname)) {
      return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('session_token')?.value;

    if (!token) {
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 }
        );
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Verify JWT
    const decoded = verify(token, process.env.JWT_SECRET!) as JWTPayload;
    
    // Add user info to headers for API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', decoded.userId);
      requestHeaders.set('x-user-email', decoded.email);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    
    // Handle authentication errors
    if (error instanceof Error && error.name === 'JsonWebTokenError') {
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'Invalid authentication token' },
          { status: 401 }
        );
      }
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('session_token');
      return response;
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Update matcher configuration to include both patterns
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
    '/api/:path*',
    '/dashboard/:path*'
  ],
};