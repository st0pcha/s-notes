import { Note } from '@prisma/client'
import { prisma } from '../lib/database'

export const getNoteById = async (id: string): Promise<Note | null> => {
	return await prisma.note.findUnique({ where: { id } })
}

export const getNotesWhereUserOwner = async (
	userId: string
): Promise<Note[]> => {
	const favoriteNotes = await getNotesFavorite(userId)
	const favoriteNoteIds = favoriteNotes.map(note => note.id)

	return await prisma.note.findMany({
		where: {
			ownerId: userId,
			id: { notIn: favoriteNoteIds },
		},
	})
}

export const getNotesWhereUser = async (userId: string): Promise<Note[]> => {
	const favoriteNotes = await getNotesFavorite(userId)
	const favoriteNoteIds = favoriteNotes.map(note => note.id)

	return await prisma.note.findMany({
		where: {
			users: { some: { id: userId } },
			id: { notIn: favoriteNoteIds },
		},
	})
}

export const getNotesFavorite = async (userId: string): Promise<Note[]> => {
	return await prisma.note.findMany({
		where: { usersFavorite: { some: { id: userId } } },
	})
}
