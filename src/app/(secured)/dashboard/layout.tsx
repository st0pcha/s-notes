import Providers from '@/components/providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dashboard | s-Notes',
	description: 'Notes Dashboard',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					{/* <DashboardMenu /> */}

					<main className='flex h-full bg-background dark:bg-background-DARK'>
						{children}
					</main>

					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
