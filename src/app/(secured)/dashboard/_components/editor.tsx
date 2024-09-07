'use client'

import { updateNoteData } from '@/actions/dashboard'
import { ExtendedUser } from '@/types/next-auth'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView, lightDefaultTheme, Theme } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { Note } from '@prisma/client'
import debounce from 'lodash.debounce'

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

	if (typeof document === 'undefined') {
		return null
	}

	const debounceUpdate = debounce(async (data: any) => {
		const response = await updateNoteData(data, user?.id, note.id)
		if (response.error) {
			console.error(response.error)
		}
	}, 1000)

	const onChange = () => {
		debounceUpdate(editor.document)
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

	const canEdit = note.ownerId === user?.id
	return (
		<BlockNoteView
			theme={theme}
			editor={editor}
			editable={canEdit}
			onChange={onChange}
		/>
	)
}

export default Editor
