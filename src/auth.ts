import { PrismaAdapter } from '@auth/prisma-adapter'
import { Note } from '@prisma/client'
import NextAuth from 'next-auth'
import authConfig from './config/auth.config'
import { prisma } from './lib/database'
import {
	getNotesFavorite,
	getNotesWhereUser,
	getNotesWhereUserOwner,
} from './lib/database/note.db'
import { getUserById } from './lib/database/user.db'

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	callbacks: {
		async session({ token, session }) {
			if (!session.user) return session

			if (token.sub) session.user.id = token.sub
			if (token.createdAt) session.user.createdAt = token.createdAt as Date
			if (token.notesIn) session.user.notesIn = token.notesIn as Note[]
			if (token.notesOwner) session.user.notesOwner = token.notesOwner as Note[]
			if (token.favoriteNotes)
				session.user.favoriteNotes = token.favoriteNotes as Note[]

			return session
		},

		async jwt({ token }) {
			if (!token.sub) return token

			const user = await getUserById(token.sub)
			if (!user) return token

			token.createdAt = user.createdAt
			token.notesIn = await getNotesWhereUser(user.id)
			token.notesOwner = await getNotesWhereUserOwner(user.id)
			token.favoriteNotes = await getNotesFavorite(user.id)

			return token
		},
	},
	...authConfig,
})
