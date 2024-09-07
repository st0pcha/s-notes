'use client'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/use-user'
import { cn } from '@/lib/utils'
import { Home, Settings2, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import CreateNoteButton from './create-note.button'
import GetNotes from './get-notes'
import HideButton from './hide.button'

const DashboardMenu = () => {
	const user = useUser()
	const [isHidden, setIsHidden] = useState(false)

	if (!user) return null

	return (
		<div
			className={cn(
				'bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50 relative h-full w-60 p-6 px-4 flex flex-col',
				isHidden && 'w-0 bg-transparent dark:bg-transparent'
			)}
		>
			<HideButton status={isHidden} onClick={() => setIsHidden(!isHidden)} />

			<div className={cn(isHidden && 'hidden')}>
				<Logo className='text-3xl underline text-center mb-8' />

				<div>
					<Button variant='ghost'>
						<Link href={`/dashboard/${user?.id}`}>
							<span className='flex text-lg'>
								<Home className='mr-2 h-4 w-4' /> Home
							</span>
						</Link>
					</Button>

					<Button variant='ghost'>
						<span className='flex text-lg'>
							<Settings2 className='mr-2 h-4 w-4' /> Settings
						</span>
					</Button>

					<Button variant='ghost'>
						<span className='flex text-lg'>
							<Trash2 className='mr-2 h-4 w-4' /> Trash
						</span>
					</Button>

					<CreateNoteButton />
				</div>

				<GetNotes type='favorite' />
				<GetNotes type='all' />
			</div>
		</div>
	)
}

export default DashboardMenu
