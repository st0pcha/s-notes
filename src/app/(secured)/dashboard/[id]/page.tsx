'use client'

import { useSession } from 'next-auth/react'
import { redirect, RedirectType } from 'next/navigation'
import DashboardMenu from '../_components/dashboard.menu'

interface DashboardPageProps {
	params: {
		id: string
	}
}

const DashboardPage = ({ params }: DashboardPageProps) => {
	const { data: session } = useSession()
	if (!session?.user) return redirect('/', RedirectType.push)

	const { id } = params

	let isIdValid = false
	if (session.user.id === id) isIdValid = true

	const notes = [
		...session.user.notesIn,
		...session.user.notesOwner,
		...session.user.favoriteNotes,
	]
	const anyNoteWithThisIdExists = notes.some(n => n.id === id)
	if (anyNoteWithThisIdExists) isIdValid = true

	if (!isIdValid) return redirect('/', RedirectType.push)

	return (
		<div className='flex'>
			<DashboardMenu />
			<div className='flex'>
				<div className='flex-1 p-6'>
					<h1 className='text-5xl'>{id}</h1>
				</div>
			</div>
		</div>
	)
}

export default DashboardPage