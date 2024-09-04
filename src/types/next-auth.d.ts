import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {}

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser
	}
}
