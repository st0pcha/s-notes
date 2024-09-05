import { Note, User } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

export type PrismaUserWithoutPassword = Omit<User, 'password'>

export type ExtendedUser = DefaultSession['user'] & {
	id: string
	createdAt: Date

	notesIn: Note[]
	notesOwner: Note[]
	favoriteNotes: Note[]
}

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser
	}
}
