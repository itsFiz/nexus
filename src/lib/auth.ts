// import { NextAuthOptions } from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { prisma } from '@/lib/db';
// import { JWT } from 'next-auth/jwt';
// import { Session } from 'next-auth';
import { DefaultSession, DefaultUser } from "next-auth";
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"]
  }
  
  interface User extends DefaultUser {
    role: string;
    id: string;
  }
}

// interface Credentials {
//   email?: string;
//   password?: string;
// }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Add your authentication logic here
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export function validateApiKey(apiKey: string | undefined): boolean {
  if (!apiKey) return false;
  return apiKey === process.env.JWT_SECRET;
}