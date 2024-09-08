'use server'

import { limits } from '@/config/limits.config'
import {
	getNotesFavorite,
	getNotesWhereUser,
	getNotesWhereUserOwner,
} from '@/database/note.db'
import { prisma } from '@/lib/database'
import { Note } from '@prisma/client'

interface NoteResponse {
	error?: string
	note?: Note
}

export const createNote = async (userId?: string): Promise<NoteResponse> => {
	if (!userId) return { error: 'Authorize first before this action!' }

	const user = await prisma.user.findUnique({ where: { id: userId } })
	if (!user) return { error: 'User not exist!' }

	const notes = [
		...(await getNotesWhereUser(userId)),
		...(await getNotesWhereUserOwner(userId)),
		...(await getNotesFavorite(userId)),
	]

	if (notes.length >= limits.notes) return { error: `Notes limit reached!` }

	const note = await prisma.note.create({ data: { ownerId: user.id } })

	return { note }
}

export const updateNoteData = async (
	data: any,
	userId?: string,
	noteId?: string
): Promise<NoteResponse> => {
	if (!userId) return { error: 'Authorize first before this action!' }

	const user = await prisma.user.findUnique({ where: { id: userId } })
	if (!user) return { error: 'User not exist!' }
	if (!noteId) return { error: 'This note is not exists!' }

	const note = await prisma.note.findUnique({ where: { id: noteId } })
	if (!note) return { error: 'This note is not exists!' }
	const noteUsers = await prisma.note
		.findUnique({ where: { id: noteId } })
		.users()

	if (note.ownerId !== user.id && !noteUsers?.includes(user))
		return { error: 'You can not edit this note!' }

	await prisma.note.update({
		where: { id: note.id },
		data: { data: JSON.stringify(data, null, 2) },
	})

	return { note }
}

export const deleteNote = async (
	userId?: string,
	noteId?: string
): Promise<NoteResponse> => {
	if (!userId) return { error: 'Authorize first before this action!' }

	const user = await prisma.user.findUnique({ where: { id: userId } })
	if (!user) return { error: 'User not exist!' }
	if (!noteId) return { error: 'This note is not exists or already deleted!' }

	const note = await prisma.note.findUnique({ where: { id: noteId } })
	if (!note) return { error: 'This note is not exists or already deleted!' }

	await prisma.note.delete({ where: { id: noteId } })

	return { note }
}
