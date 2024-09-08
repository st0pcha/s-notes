import 'next-auth'
import { ExtendedUser } from './user'

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser
	}
}
