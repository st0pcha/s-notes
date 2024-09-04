import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from './config/auth.config'

const { auth } = NextAuth(authConfig)

export default auth(req => {
	const { auth, nextUrl } = req
	const isLoggedIn = !!auth

	// console.log(`isLoggedIn?: ${isLoggedIn}`)

	const { pathname, origin } = nextUrl
	if (pathname === '/auth' && isLoggedIn) {
		return NextResponse.redirect(new URL('/', origin))
	}

	if (pathname.startsWith('/dashboard') && !isLoggedIn) {
		return NextResponse.redirect(new URL('/auth', origin))
	}

	NextResponse.next()
})
