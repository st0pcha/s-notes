'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ExtendedUser } from '@/types/next-auth'
import { Note } from '@prisma/client'
import { formatDistance } from 'date-fns'
import { Delete, Settings2 } from 'lucide-react'
import Editor from './editor'

interface NoteProps {
	note: Note | undefined
	user: ExtendedUser
}

const NoteContent = ({ note, user }: NoteProps) => {
	const { toast } = useToast()
	if (!note) return null

	const handleNoteDelete = () => {
		if (note.ownerId === user.id) {
			toast({
				variant: 'destructive',
				title: 'You are not this note creator!',
			})
		}
	}

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

					<Button variant='destructive' onClick={handleNoteDelete}>
						<Delete className='mr-2 h-4 w-4' /> Delete
					</Button>
				</div>
			</div>

			<div className='mt-6 w-full h-full'>
				<Editor user={user} note={note} />
			</div>
		</div>
	)
}

export default NoteContent
