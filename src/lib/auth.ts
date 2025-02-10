// import { NextAuthOptions } from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { prisma } from '@/lib/db';
// import { JWT } from 'next-auth/jwt';
// import { Session } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"]
  }
}

// interface Credentials {
//   email?: string;
//   password?: string;
// }

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials: Record<"email" | "password", string> | undefined) {
//         if (!credentials?.email || !credentials?.password) {
//           return null;
//         }
//         // Add your authentication logic here
//         return null;
//       }
//     })
//   ],
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: 'jwt'
//   },
//   callbacks: {
//     async session({ session, token }: { session: Session, token: JWT }) {
//       if (token.sub && session.user) {
//         const user = await prisma.user.findUnique({
//           where: { id: token.sub }
//         });
//         if (user) {
//           session.user.id = user.id;
//           session.user.role = user.role;
//         }
//       }
//       return session;
//     }
//   }
// };

export function validateApiKey(apiKey: string | undefined): boolean {
  if (!apiKey) return false;
  return apiKey === process.env.JWT_SECRET;
}