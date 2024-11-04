import NextAuth, { NextAuthOptions, SessionStrategy } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/db'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'


export const authOptions = {

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john@doe.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          console.log("No credentials")
          throw new Error('No credentials')
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          // check if user have MoviePassSubscription that is active

          const userSubscription = await prisma.moviePassSubscription.findFirst({
            where: {
              userId: user.id,
              isActive: true
            },
          })

          if (userSubscription) {
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              isSubscriped: true
            }
          } else {
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              isSubscriped: false
            }
          }
        } else {
          throw new Error('Invalid email or password')
        }
      },
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  callbacks: {
    jwt: async ({ token, user }: { token: any, user?: any }) => {
      if (user) {
        token.id = user.id
        token.isSubscripted = user.isSubscriped
      }
      return token
    },
    session: async ({ session, token }: { session: any, token: any }) => {
      if (session.user) {
        session.user.id = token.id
        session.user.isSubscripted = token.isSubscripted
      }
      return session
    }
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
