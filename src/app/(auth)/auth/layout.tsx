import Providers from '@/components/providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Auth | s-Notes',
	description: 'Auth Page',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<main className='h-full pt-24 md:pt-8 bg-background dark:bg-background-DARK'>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
