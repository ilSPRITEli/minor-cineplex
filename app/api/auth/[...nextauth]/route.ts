import NextAuth, { NextAuthOptions, SessionStrategy } from 'next-auth'
import { authOptions } from '@/lib/utils'



const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
