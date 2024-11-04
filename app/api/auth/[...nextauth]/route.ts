import NextAuth, { NextAuthOptions, SessionStrategy } from 'next-auth'
import { authOptions } from '@/lib/ssn'



const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
