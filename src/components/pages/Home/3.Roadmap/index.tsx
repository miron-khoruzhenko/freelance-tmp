import Card, { ParagrafCard } from '@/components/common/Card'
import Heading3d from '@/components/common/Headings'
import React from 'react'
import bg from '~/roadmap/bg.png'

const Roadmap = () => {
	return (
		// <div className='relative min-h-screen pt-[65%] -mt-[40%] bg-[url("/roadmap/bg.png")] bg-top bg-cover bg-no-repeat  h-[2000px]'>
		<div className='relative min-h-screen mt-[150px] pt-[10%]'>
			<img src={bg} alt="" className="absolute top-1/2 -translate-y-1/2 left-0 object-cover min-w-full" />

			<div className="container mx-auto flex flex-col justify-start items-center relative h-[900px] ">
				<Heading3d className=''>Roadmap</Heading3d>
				<p className="text-[20px] text-center my-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">


					<ParagrafCard className='absolute top-1/2 left-1/2 -translate-x-[calc(50%+450px)] -translate-y-[calc(50%-180px)] rotate-[9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='absolute top-1/2 left-1/2 -translate-x-[calc(50%+200px)] -translate-y-[calc(50%+180px)] rotate-[-9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='absolute top-1/2 left-1/2 -translate-x-[calc(50%-200px)] -translate-y-[calc(50%-180px)] rotate-[-9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard className='absolute top-1/2 left-1/2 -translate-x-[calc(50%-450px)] -translate-y-[calc(50%+180px)] rotate-[9deg]' title='Lorem Ipsum is simply '>
						Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
					</ParagrafCard>
				</div>


			</div>
		</div>
	)
}

export default Roadmap