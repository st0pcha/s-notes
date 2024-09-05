interface SecuredLayoutProps {
	children: React.ReactNode
}

const SecuredLayout = ({ children }: SecuredLayoutProps) => {
	return (
		<main className='h-full bg-background dark:bg-background-DARK'>
			{children}
		</main>
	)
}

export default SecuredLayout
