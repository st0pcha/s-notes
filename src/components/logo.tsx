import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
	return (
		<h1 className={cn('font-bold gap-x-2', className)}>
			<span className='text-accent'>s</span>-Notes
		</h1>
	)
}

export default Logo
