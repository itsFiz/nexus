// middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware() {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/evolution/:path*",
    "/api/:path*",
    "/((?!auth|api|_next/static|_next/image|favicon.ico).*)",
  ],
}