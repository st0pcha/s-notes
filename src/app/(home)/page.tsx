import Features from '@/app/(home)/_components/features'
import Heading from '@/app/(home)/_components/heading'

const Home = () => {
	return (
		<div className='min-h-full w-full flex flex-col'>
			<div className='flex items-center justify-center text-center gap-y-8 flex-1 flex-col pb-10'>
				<Heading />
			</div>

			<div className='flex justify-center py-10'>
				<Features />
			</div>
		</div>
	)
}

export default Home
