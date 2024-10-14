import NextAuth, { NextAuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Credentials {
  email: string;
  password: string;
}
export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (credentials: Credentials | undefined) => {
          if (!credentials) {
            return null;
          }
  
          // Logika autentikasi di sini, misalnya memeriksa pengguna di database
          const user = { id: 1, name: 'User', email: 'user@example.com' }; // Contoh user
  
          if (user) {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }: { token: JWT; user?: User }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }: { session: any; token: JWT }) {
        if (token.id) {
          session.user.id = token.id;
        }
        return session;
      },
    },
    pages: {
      signIn: '/login',
    },
    session: {
      strategy: 'jwt',
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
  
  export default NextAuth(authOptions);
  