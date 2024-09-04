import DashboardMenu from '../_components/dashboard.menu'

interface DashboardPageProps {
	params: {
		userId: string
	}
}

const DashboardPage = ({ params }: DashboardPageProps) => {
	return (
		<>
			<DashboardMenu />
			<div className='flex'>
				<div className='flex-1 p-6'>
					<h1 className='text-5xl'>{params.userId}</h1>
				</div>
			</div>
		</>
	)
}

export default DashboardPage
