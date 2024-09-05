import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: 's-Notes',
	description: 'Notes Web-app',
}

const RootLayout = async ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
