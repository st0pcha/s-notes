'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const StartNowButton = () => {
	const { data: session } = useSession()

	return (
		<Button size='sm' asChild>
			<Link href={session?.user ? `/dashboard/${session.user.id}` : '/auth'}>
				<ArrowRight className='mr-2 h-4 w-4' />
				Start now.
			</Link>
		</Button>
	)
}

export default StartNowButton
