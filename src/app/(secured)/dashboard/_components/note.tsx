'use client'

import { Button } from '@/components/ui/button'
import { ExtendedUser } from '@/types/next-auth'
import { Note } from '@prisma/client'
import { formatDistance } from 'date-fns'
import { Settings2 } from 'lucide-react'
import DeleteNoteButton from './delete-note.button'
import Editor from './editor'

interface NoteProps {
	note: Note | undefined
	user: ExtendedUser
}

const NoteContent = ({ note, user }: NoteProps) => {
	if (!note) return null

	return (
		<div className=''>
			<h1 className='text-xl'>{note.title}</h1>

			<div className='mt-6'>
				<p>Creator: {note.ownerId}</p>
				<p>
					Created{' '}
					{formatDistance(note.createdAt, new Date(), { addSuffix: true })}
				</p>
				<p>Private?: {note.isPrivate ? 'yes' : 'no'}</p>

				<div className='mt-4 flex gap-4'>
					<Button>
						<Settings2 className='mr-2 h-4 w-4' /> Settings
					</Button>

					<DeleteNoteButton user={user} note={note} />
				</div>
			</div>

			<div className='mt-6 w-full h-full'>
				<Editor user={user} note={note} />
			</div>
		</div>
	)
}

export default NoteContent
