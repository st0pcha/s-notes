'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/use-user'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const StartNowButton = () => {
	const user = useUser()

	return (
		<Button size='sm' asChild>
			<Link href={user ? `/dashboard/${user.id}` : '/auth'}>
				<ArrowRight className='mr-2 h-4 w-4' />
				Start now.
			</Link>
		</Button>
	)
}

export default StartNowButton
