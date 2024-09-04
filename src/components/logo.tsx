import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({ className }: { className?: string }) => {
	return (
		<Link href='/'>
			<h1 className={cn('font-bold gap-x-2', className)}>
				<span className='text-accent'>s</span>-Notes
			</h1>
		</Link>
	)
}

export default Logo
