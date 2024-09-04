import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 's-Notes',
		template: '%s | s-Notes',
	},
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
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='h-full pt-40'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
