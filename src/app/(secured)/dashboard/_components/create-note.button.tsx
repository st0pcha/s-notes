'use client'

import { createNote } from '@/actions/dashboard'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Plus } from 'lucide-react'
import { User } from 'next-auth'

interface CreateNoteButtonProps {
	user: User
}

const CreateNoteButton = ({ user }: CreateNoteButtonProps) => {
	const { toast } = useToast()

	const onClick = async () => {
		createNote(user?.id).then(res => {
			if (res.error) {
				toast({
					variant: 'destructive',
					title: 'Uh.. Something went wrong.',
					description: res.error,
				})
			}
		})
	}

	return (
		<Button variant='ghost' onClick={onClick}>
			<span className='flex text-lg'>
				<Plus className='mr-2 h-4 w-4' /> Create
			</span>
		</Button>
	)
}

export default CreateNoteButton
