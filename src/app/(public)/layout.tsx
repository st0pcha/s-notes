import Footer from './_components/footer'
import Header from './_components/header'

interface PublicLayoutProps {
	children: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
	return (
		<>
			<Header />
			<main className='h-full pt-24 md:pt-8 bg-background dark:bg-background-DARK'>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default PublicLayout
