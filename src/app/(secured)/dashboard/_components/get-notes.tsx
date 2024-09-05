'use client'

import { ArrowRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface GetNotesProps {
	type: 'favorite' | 'all'
}

const GetNotes = ({ type }: GetNotesProps) => {
	const { data: session } = useSession()
	if (!session) return null

	const allNotes = [...session.user.notesIn, ...session.user.notesOwner]
	let notes = allNotes
	if (type === 'favorite') notes = session.user.favoriteNotes

	if (allNotes.length === 0) return null

	return (
		<div className='mt-12'>
			<h1 className='text-lg font-bold underline text-center mb-2'>
				{type === 'favorite' ? 'Favorite' : 'Notes'}
			</h1>
			<div>
				{notes.map((note, idx) => (
					<div key={idx} className='hover:bg-accent/50'>
						<Link href={`/dashboard/${note.id}`} className='flex items-center'>
							<ArrowRight className='mr-2 h-4 w-4' />
							{note.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default GetNotes
