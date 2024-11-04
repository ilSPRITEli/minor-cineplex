'use client'

import { useState} from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      // console.log('email', email)
      // console.log('password', password)
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        console.error(result.error)
      } else {
        router.push('/profile')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  if (status === 'authenticated') {
    router.push('/profile');
  }

  return (
    <div className="main_gradient flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-rose-950/20 backdrop-blur-lg p-6 rounded-md shadow-md text-white space-y-2"
      >
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 bg-transparent px-3 py-2 rounded" // Added border
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 bg-transparent px-3 py-2 rounded" // Added border
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 duration-300 text-black py-2 rounded mb-4"
        >
          Sign In
        </button>
        <p className="text-sm text-white/80">
            New here?{' '}
            <a href="/signup" className="text-yellow-500 hover:underline">
              Sign up
            </a>
        </p>
        {' '}
      </form>
    </div>
  )
}
