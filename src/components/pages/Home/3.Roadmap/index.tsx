import { ParagrafCard } from '@/components/common/Card'
import Heading3d from '@/components/common/Headings'
import bg from '~/roadmap/bg.png'
import bg_mobile from '~/roadmap/bg-mobile.png'
import { useState } from 'react'

const Roadmap = () => {
	const [imgHeight, setImgHeight] = useState(0)

	return (
		// <div className='relative min-h-screen pt-[65%] -mt-[40%] bg-[url("/roadmap/bg.png")] bg-top bg-cover bg-no-repeat  h-[2000px]'>
		<div className='relative min-h-screen mt-[150px] pt-[10%]'>
			<img src={bg} alt="" className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 object-cover min-w-full" />
			<img onLoad={
				e => setImgHeight((e.target as HTMLImageElement)?.offsetHeight)
			} src={bg_mobile} alt="" className="block lg:hidden absolute top-1/2 -translate-y-[40%] left-0 object-cover min-w-full" />

			<div className="container mx-auto flex flex-col justify-start items-center relative h-[900px] ">
				<Heading3d className=''>Roadmap</Heading3d>
				<p className="text-base lg:text-[20px] text-center my-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>

				<div 
					className="absolute flex flex-col items-end justify-between top-1/2 left-1/2 -translate-y-[16%] -translate-x-1/2 lg:-translate-y-1/2 w-full px-8 "
					style={{
						height: imgHeight - 570
					}}	
				>

					<ParagrafCard className='lg:absolute top-1/2 left-1/2 lg:-translate-x-[calc(50%+450px)] lg:-translate-y-[calc(50%-180px)] text-[18px] lg:text-[20px] lg:rotate-[9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='lg:absolute self-start top-1/2 left-1/2 lg:-translate-x-[calc(50%+200px)] lg:-translate-y-[calc(50%+180px)] text-[18px] lg:text-[20px] lg:rotate-[-9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='lg:absolute top-1/2 left-1/2 lg:-translate-x-[calc(50%-200px)] lg:-translate-y-[calc(50%-180px)] text-[18px] lg:text-[20px] lg:rotate-[-9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='lg:absolute self-start top-1/2 left-1/2 lg:-translate-x-[calc(50%-450px)] lg:-translate-y-[calc(50%+180px)] text-[18px] lg:text-[20px] lg:rotate-[9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

				</div>


			</div>
		</div>
	)
}

export default Roadmap