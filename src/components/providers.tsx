import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
	children: React.ReactNode
}

const Providers = async ({ children }: ProvidersProps) => {
	const session = await auth()

	return (
		<SessionProvider session={session}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</SessionProvider>
	)
}

export default Providers
