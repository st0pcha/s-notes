'use client'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Home, Plus, Settings2, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import HideButton from './hide.button'

const notes = ['note', 'note', 'note', 'note', 'note', 'note', 'note']

const DashboardMenu = () => {
	const [isHidden, setIsHidden] = useState(true)

	return (
		<>
			<div
				className={cn(
					'bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50  relative h-screen w-60 p-6 px-4 flex flex-col',
					!isHidden &&
						'w-0 hover:bg-background-LIGHTMUTED/80 hover:dark:bg-background-DARKMUTED/80 duration-300'
				)}
			>
				<HideButton status={isHidden} onClick={() => setIsHidden(!isHidden)} />
				<div className={cn(!isHidden && 'hidden')}>
					<Logo className='text-3xl underline text-center mb-8' />

					<div>
						<Button variant='ghost' asChild>
							<span className='flex text-lg'>
								<Home className='mr-2 h-4 w-4' /> Home
							</span>
						</Button>

						<Button variant='ghost' asChild>
							<span className='flex text-lg'>
								<Settings2 className='mr-2 h-4 w-4' /> Settings
							</span>
						</Button>

						<Button variant='ghost' asChild>
							<span className='flex text-lg'>
								<Trash2 className='mr-2 h-4 w-4' /> Trash
							</span>
						</Button>

						<Button variant='ghost' asChild>
							<span className='flex text-lg'>
								<Plus className='mr-2 h-4 w-4' /> Create
							</span>
						</Button>
					</div>

					<div className='mt-12'>
						<h1 className='text-lg font-bold underline text-center mb-2'>
							Favorites
						</h1>
						<div>
							{notes.map((note, idx) => (
								<div key={idx} className='hover:bg-accent/50'>
									<Link href='/' className='flex items-center'>
										<ArrowRight className='mr-2 h-4 w-4' />
										{note}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div className='mt-12'>
						<h1 className='text-lg font-bold underline text-center mb-2'>
							Notes
						</h1>
						<div>
							{notes.map((note, idx) => (
								<div key={idx} className='hover:bg-accent/50'>
									<Link href='/' className='flex items-center'>
										<ArrowRight className='mr-2 h-4 w-4' />
										{note}
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardMenu
