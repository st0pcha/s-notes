import { ExtendedUser } from '@/types/next-auth'
import { Note } from '@prisma/client'
import Editor from './editor'

interface NoteProps {
	note: Note | undefined
	user: ExtendedUser
}

const NoteContent = ({ note, user }: NoteProps) => {
	if (!note) return

	return (
		<div className=''>
			<h1 className='text-xl'>{note.title}</h1>

			<div className='mt-6 w-full h-full'>
				<Editor user={user} note={note} />
			</div>
		</div>
	)
}

export default NoteContent
