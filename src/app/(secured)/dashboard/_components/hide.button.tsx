import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronsLeft } from 'lucide-react'

interface HideButtonProps {
	status: boolean
	onClick: () => void
}

const HideButton = ({ status, onClick }: HideButtonProps) => {
	return (
		<Button
			variant='outline'
			size='icon'
			className={cn(
				'mt-4 rounded-xl absolute top-3',
				!status && 'right-1',
				status && 'left-3'
			)}
			onClick={onClick}
		>
			<ChevronsLeft className='h-6 w-6' />
		</Button>
	)
}

export default HideButton
