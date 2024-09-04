import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from './config/auth.config'

const { auth } = NextAuth(authConfig)

export default auth(req => {
	const { url, auth, nextUrl } = req
	const isLoggedIn = !!auth

	// console.log(`isLoggedIn?: ${isLoggedIn}`)

	const pathname = nextUrl.pathname
	if (pathname === '/auth' && isLoggedIn) {
		return NextResponse.redirect(new URL('/', url))
	}

	NextResponse.next()
})
