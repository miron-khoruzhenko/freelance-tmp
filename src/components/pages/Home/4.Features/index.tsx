import Card from '@/components/common/Card'
import Heading3d from '@/components/common/Headings'

import { twMerge as cn } from 'tailwind-merge'

import img1 from '~/features/img1.png'
import img2 from '~/features/img2.png'
import img3 from '~/features/img3.png'

import icon2 from '~/features/icon1.svg'
import icon3 from '~/features/icon2.svg'
import icon1 from '~/features/icon3.svg'

import social_1 from '~/navbar/icon1.svg'
import social_2 from '~/navbar/icon2.svg'


const Features = () => {
	return (
		<div className='bg-features bg-top bg-no-repeat bg-cover min-h-screen relative z-30 pt-96'>
			<div className="container mx-auto flex flex-col justify-center items-center">
				<Heading3d className=''>FEATURES</Heading3d>
				<p className="text-[20px] text-center my-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>

				<div className="flex justify-center items-center gap-[30px] mt-16 mb-28">
					<PhotoCard order={0} icon={icon1} img={img1} className='rotate-[-6deg]' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
					<PhotoCard order={1} icon={icon2} img={img2} className='rotate-[6deg]' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
					<PhotoCard order={2} icon={icon3} img={img3} className='rotate-[-6deg]' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
				</div>

				<Footer />

			</div>
		</div>
	)
}

const PhotoCard = ({ img, icon, text, order, className = '' }: { order: number, img: string, icon: string, text: string, className?: string }) => {
	const bgStyle = order === 0 ? 'bg-white' : order === 1 ? 'bg-[#FFC5C5]' : 'bg-[#CFFFD7]'
	const posStyle = order === 0 ? 'left-10 top-0 -translate-y-1/2 rotate-[-12deg]' : order === 1 ? 'left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2' : 'right-10 top-0 -translate-y-1/2 rotate-[15deg]'

	return (
		<div className={cn("p-[25px]  rounded-[20px] border border-black relative", bgStyle, className)}>
			<img src={img} alt="" className="w-[300px] mb-11" />
			<p className="max-w-[300px] text-center text-[20px]">{text}</p>
			<Card className={cn('p-3 absolute ', posStyle)}><img src={icon} alt="" className="w-[18px] h-[18px] " /></Card>

		</div>
	)
}


const Footer = () => {

	return (
		<nav className="flex gap-8 w-full mb-8">
			<Card className="flex justify-between items-center w-full px-[30px] py-[45px]">
				<div className="flex items-center justify-center gap-2">
					<Card className="bg-[#AED6FB] size-[45px]" />
					<div className="flex flex-col justify-center h-full">
						<h3 className=" text-[20px] font-bold tracking-[-1.6px] leading-[1]">CLOUD</h3>
						<span className="text-[20px] font-light tracking-[-1.4px] leading-[1]">coin</span>
					</div>
				</div>

				<div className="flex gap-20">

					<ul className="grid grid-cols-2">
						<li className="">Home</li>
						<li className="">Tokenomics</li>
						<li className="">Roadmap</li>
						<li className="">Features</li>
					</ul>

					<div className="flex gap-4">
						<Card className="bg-[#CFFFD7] p-0 size-[45px] inline-flex items-center justify-center">
							<img src={social_1} alt="" className="invert size-[18px]" /></Card>
						<Card className="bg-[#CFFFD7] p-0 size-[45px] inline-flex items-center justify-center">
							<img src={social_2} alt="" className="invert size-[18px]" /></Card>
					</div>
				</div>

			</Card>
		</nav>
	)
}
export default Features