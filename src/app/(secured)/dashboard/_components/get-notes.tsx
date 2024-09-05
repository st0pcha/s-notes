'use client'

import { useUser } from '@/hooks/use-user'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface GetNotesProps {
	type: 'favorite' | 'all'
}

const GetNotes = ({ type }: GetNotesProps) => {
	const user = useUser()
	if (!user) return null

	const allNotes = [...user.notesIn, ...user.notesOwner]
	let notes = allNotes
	if (type === 'favorite') notes = user.favoriteNotes

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
