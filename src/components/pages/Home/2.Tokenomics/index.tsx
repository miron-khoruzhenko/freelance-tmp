import Card from '@/components/common/Card'
import Heading3d from '@/components/common/Headings'
import { useParallax } from 'react-scroll-parallax';
import cloud from '~/2.section/cloud.png'

import { LegacyRef, useEffect, useState } from 'react';

const Tokenomics = () => {

	// if min width 1024px the not use parallax
	const [width, setWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);


	const parallax = useParallax(width < 1024 ? {
		// speed: -10,
		speed: 0,
		easing: 'easeInOutQuad',


		translateX: ['-700px', '800px'],
		translateY: ['-300px', '800px'],
		startScroll: 500,
		endScroll: 2000,
		// shouldDisableScalingTranslations: true,
		shouldAlwaysCompleteAnimation: true,
	} : {		shouldAlwaysCompleteAnimation: true,

		// speed: -10,
		speed: 0,
		translateX: [0, 0],
		translateY: [0, 0],
	});



	return (
		<section className='bg-tokenomics bg-center bg-cover bg-no-repeat min-h-screen'>
			<div className="container mx-auto flex flex-col justify-start items-center pt-[150px]">
				<Heading3d className=''>TOKENOMICS</Heading3d>
				<p className="text-[20px] text-center my-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>


				<div ref={parallax.ref as LegacyRef<HTMLDivElement>} className="relative w-[1000px] lg:w-auto mb-96 lg:mb-0">
					<ImgWithTables />
				</div>

			</div>
		</section>
	)
}

const ImgWithTables = () => {
	return (
		<>
			<img src={cloud} alt="" className="" />
			<div className=" absolute top-1/2 left-1/2 translate-y-[170px] lg:translate-y-[220px] -translate-x-[calc(50%-20px)] lg:-translate-x-1/2 w-[300px] flex justify-start items-center gap-4">
				<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
				<Card className='p-2 whitespace-nowrap'>Lorem Ipsum is simply dummy</Card>
			</div>
			<div className=" absolute top-1/2 left-1/2 translate-y-[120px] lg:translate-y-[160px] -translate-x-[calc(50%+330px)] lg:-translate-x-[calc(50%+420px)] w-[300px] flex justify-start items-center gap-4">
				<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
				<Card className='p-2 whitespace-nowrap'>Lorem Ipsum is simply dummy</Card>
			</div>
			<div className=" absolute top-1/2 left-1/2 translate-y-[220px] lg:translate-y-[280px] -translate-x-[calc(50%-340px)] lg:-translate-x-[calc(50%-410px)] w-[300px] flex justify-start items-center gap-4">
				<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
				<Card className='p-2 whitespace-nowrap'>Lorem Ipsum is simply dummy</Card>
			</div>
		</>
	)
}
export default Tokenomics