import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Settings2 } from 'lucide-react'
import UserSettingsTab from './user-settings.tab'

const UserSettingsDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='ghost'>
					<span className='flex text-lg'>
						<Settings2 className='mr-2 h-4 w-4' /> Settings
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent className='w-[400px]'>
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Make changes to your profile here.
					</DialogDescription>
				</DialogHeader>

				<UserSettingsTab />
			</DialogContent>
		</Dialog>
	)
}

export default UserSettingsDialog
