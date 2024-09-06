'use client'

import { ExtendedUser } from '@/types/next-auth'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView, lightDefaultTheme, Theme } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { Note } from '@prisma/client'

interface EditorProps {
	note: Note
	user: ExtendedUser | null
}

const Editor = ({ note, user }: EditorProps) => {
	const initialContent = Array.isArray(note.data)
		? note.data
		: note.data
		? JSON.parse(note.data as string)
		: [
				{
					type: 'paragraph',
					content: [{ text: 'Untitled' }],
				},
		  ]

	const editor = useCreateBlockNote({ initialContent })

	// const canEdit = note.users.includes(user?.id) || note.ownerId === user?.id

	if (typeof document === 'undefined') {
		return null
	}

	const theme = {
		colors: {
			editor: {
				text: '#ffffff',
				background: 'b',
			},
			menu: {
				text: '#ffffff',
				background: '#212121',
			},
			tooltip: {
				text: '#ffffff',
				background: '#212121',
			},
			hovered: {
				text: '#ffffff',
				background: '#121212',
			},
			selected: {
				text: '#ffffff',
				background: '#121212',
			},
			disabled: {
				text: '#ffffff',
				background: '#121212',
			},
			shadow: '#212121',
			border: '#212121',
			sideMenu: '#bababa',
			highlights: lightDefaultTheme.colors!.highlights,
		},
		borderRadius: 4,
		fontFamily: 'Helvetica Neue, sans-serif',
	} satisfies Theme

	return (
		<BlockNoteView
			theme={theme}
			editor={editor}
			editable={true}
			onChange={() => console.log(JSON.stringify(editor.document, null, 2))}
		/>
	)
}

export default Editor
