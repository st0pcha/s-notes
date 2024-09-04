import Footer from '@/components/footer'
import Header from '@/components/header'
import Providers from '@/components/providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 's-Notes',
	description: 'Notes Web-app',
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
					<Header />

					<main className='h-full pt-40 bg-background dark:bg-background-DARK'>
						{children}
					</main>

					<Footer />
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
