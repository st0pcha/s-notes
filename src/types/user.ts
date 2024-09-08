import { Note } from '@prisma/client'
import { DefaultSession, User } from 'next-auth'

export type PrismaUserWithoutPassword = Omit<User, 'password'>

export type ExtendedUser = DefaultSession['user'] & {
	id: string
	createdAt: Date

	notesIn: Note[]
	notesOwner: Note[]
	favoriteNotes: Note[]
}
