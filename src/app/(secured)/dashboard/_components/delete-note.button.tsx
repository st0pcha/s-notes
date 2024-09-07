'use client'

import { deleteNote } from '@/actions/dashboard'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Note } from '@prisma/client'
import { Delete } from 'lucide-react'
import { User } from 'next-auth'
import { useRouter } from 'next/navigation'

interface DeleteNoteButtonProps {
	user: User
	note: Note
}

const DeleteNoteButton = ({ user, note }: DeleteNoteButtonProps) => {
	const { toast } = useToast()
	const router = useRouter()
	if (!user || !note) return
	if (user.id !== note.ownerId) return

	const onClick = () => {
		deleteNote(user.id, note.id).then(res => {
			if (res.error) {
				toast({
					variant: 'destructive',
					title: 'Uh.. Something went wrong.',
					description: res.error,
				})
			} else {
				router.push(`/dashboard/${user.id}`)
			}
		})
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive'>
					<Delete className='mr-2 h-4 w-4' /> Delete
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your note
						and remove note data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onClick}>Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default DeleteNoteButton
