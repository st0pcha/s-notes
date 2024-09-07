'use client'

import { useUser } from '@/hooks/use-user'
import { redirect, RedirectType } from 'next/navigation'
import DashboardMenu from '../_components/dashboard.menu'
import NoteContent from '../_components/note'

interface DashboardPageProps {
	params: {
		id: string
	}
}

const DashboardPage = ({ params }: DashboardPageProps) => {
	const user = useUser()
	if (!user) return redirect('/', RedirectType.push)

	const { id } = params

	let isIdValid = false
	if (user.id === id) isIdValid = true

	const notes = [...user.notesIn, ...user.notesOwner, ...user.favoriteNotes]
	const note = notes.find(n => n.id === id)
	if (note) isIdValid = true

	if (!isIdValid) return redirect('/', RedirectType.push)

	return (
		<div className='flex h-screen'>
			<DashboardMenu />

			<div className='flex-1 p-6 overflow-auto'>
				{/* <h1 className='text-5xl'>{id}</h1> */}

				<NoteContent user={user} note={note} />
			</div>
		</div>
	)
}

export default DashboardPage
