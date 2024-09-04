import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const StartNowButton = () => {
	return (
		<Button size='sm' asChild>
			<Link href='/auth'>
				<ArrowRight className='mr-2 h-4 w-4' />
				Start now.
			</Link>
		</Button>
	)
}

export default StartNowButton
