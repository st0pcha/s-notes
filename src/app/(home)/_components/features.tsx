import { features } from '@/config/data.config'
import { Card, CardContent, CardHeader } from '../../../components/ui/card'

const Features = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h3 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-6 underline'>
				Features
			</h3>

			<div className='grid grid-cols-2 lg:grid-cols-3 gap-6 shadow-xl rounded-xl p-6'>
				{features.map((feature, idx) => (
					<Card
						key={idx}
						className='bg-background-LIGHTMUTED dark:bg-background-DARKMUTED'
					>
						<CardHeader className='text-3xl text-center'>
							{feature.icon}
						</CardHeader>
						<CardContent className='text-center'>{feature.text}</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Features
