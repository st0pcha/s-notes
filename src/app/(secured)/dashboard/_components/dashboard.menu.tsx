'use client'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Home, Settings2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import CreateNoteButton from './create-note.button'
import GetNotes from './get-notes'
import HideButton from './hide.button'

const DashboardMenu = () => {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<>
			<div
				className={cn(
					'bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50  relative h-screen w-60 p-6 px-4 flex flex-col',
					isHidden &&
						'w-0 hover:bg-background-LIGHTMUTED/80 hover:dark:bg-background-DARKMUTED/80 duration-300'
				)}
			>
				<HideButton status={isHidden} onClick={() => setIsHidden(!isHidden)} />

				<div className={cn(isHidden && 'hidden')}>
					<Logo className='text-3xl underline text-center mb-8' />

					<div>
						<Button variant='ghost'>
							<span className='flex text-lg'>
								<Home className='mr-2 h-4 w-4' /> Home
							</span>
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
		</>
	)
}

export default DashboardMenu
