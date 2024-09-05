'use server'

import { limits } from '@/config/limits.config'
import { prisma } from '@/lib/database'
import {
	getNotesWhereUser,
	getNotesWhereUserOwner,
} from '@/lib/database/note.db'
import { Note } from '@prisma/client'

interface NoteResponse {
	error?: string
	note?: Note
}

export const createNote = async (userId?: string): Promise<NoteResponse> => {
	if (!userId) return { error: 'Unknown error!' }

	const user = await prisma.user.findUnique({ where: { id: userId } })
	if (!user) return { error: 'User not exist!' }

	const notes = [
		await getNotesWhereUser(userId),
		await getNotesWhereUserOwner(userId),
	]

	if (notes.length >= limits.notes)
		return { error: `Notes limit reached! ${notes.length}/${limits.notes}` }

	const note = await prisma.note.create({ data: { ownerId: user.id } })

	return { note }
}
