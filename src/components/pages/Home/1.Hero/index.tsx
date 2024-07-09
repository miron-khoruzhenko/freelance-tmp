import Card, { ParagrafCard } from "@/components/common/Card"
import Heading3d from "@/components/common/Headings"

import foot_right from '~/hero/foot_right.png'
import foot_left from '~/hero/foot_left.png'

import social_1 from '~/navbar/icon1.svg'
import social_2 from '~/navbar/icon2.svg'
import { useState } from "react"

import { twMerge as cn } from "tailwind-merge"

const Hero = () => {
	return (
		<div className="h-screen w-screen bg-hero bg-no-repeat bg-center bg-cover relative  ">
			<div className="container mx-auto pt-4 pb-4 lg:pt-8 px-4 flex flex-col justify-between h-full">
				<Navbar />

				<Heading3d isMain>$CLOUD</Heading3d>

				<img src="/hero/kitty.png" alt="" className="absolute top-1/3 lg:top-0 left-1/2 -translate-x-1/2 translate-y-[-20%] lg:translate-y-[18%] z-20" />

				<div className="flex flex-col gap-4">

					<ParagrafCard title="Lorem Ipsum is simply " className="max-w-full w-full lg:w-auto lg:absolute lg:rotate-[6deg] top-1/2 right-1/2 lg:translate-y-2/3 lg:translate-x-[calc(160%)] z-20 lg:z-0 px-[30px] ">
						Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
					</ParagrafCard>

					<ParagrafCard 
						title="$CLOUD CONTRACT ADDRESS" 
						className="max-w-full w-full lg:w-auto text-left lg:absolute lg:rotate-[-9deg] top-1/2 left-1/2  lg:translate-y-full lg:-translate-x-[calc(135%)] z-10 whitespace-nowrap cursor-pointer"
						onClick={
							() => navigator.clipboard.writeText('0xf6e932ca12afa26665dc4dde7e27be02a7c02e50')
						}
					>
						0xf6e932ca12afa26665dc4dde7e27be02a7c02e50 <img src="/hero/copy.svg" alt="" className="inline-block lg:ml-4" />
					</ParagrafCard>

					<div className="lg:hidden flex items-center gap-4">
						<Card className="px-4 py-2">
							<div className="flex gap-4">
								<Card className="bg-[#CFFFD7] cursor-pointer p-0 lg:p-0 size-[45px] inline-flex items-center justify-center">
									<img src={social_1} alt="" className="invert size-[18px]" /></Card>
								<Card className="bg-[#CFFFD7] cursor-pointer p-0 lg:p-0 size-[45px] inline-flex items-center justify-center">
									<img src={social_2} alt="" className="invert size-[18px]" /></Card>
							</div>

						</Card>

						<Card className="bg-[#79E7FF] font-bold text-base w-full h-full flex items-center justify-center whitespace-nowrap">
							BUY NOW
						</Card>
					</div>
				</div>

				<img src={foot_left} alt="" className="z-40 lg:z-0 scale-50 -translate-x-1/4 translate-y-1/4 lg:scale-100 lg:translate-x-0 lg:translate-y-0 absolute bottom-0 left-0" />
				<img src={foot_right} alt="" className="z-40 lg:z-0 scale-50 translate-x-1/4 lg:scale-100 lg:translate-x-0 absolute bottom-1/4 lg:bottom-0 right-0 translate-y-1/2" />
			</div>
		</div>

	)
}

const Navbar = () => {

	const [isModalOpen, SetIsModalOpen] = useState(false)

	return (
		<nav className="flex gap-8 relative">
			<Card className="flex justify-between items-center w-full">
				<div className="flex items-center justify-center gap-2">
					<Card className="bg-[#AED6FB] size-[45px]" />
					<div className="flex flex-col justify-center h-full">
						<h3 className=" text-[20px] font-bold tracking-[-1.6px] leading-[1]">CLOUD</h3>
						<span className="text-[20px] font-light tracking-[-1.4px] leading-[1]">coin</span>
					</div>
				</div>

				<ul className={cn("absolute z-40 top-[calc(100%+1rem)] left-0 right-0 font-bold lg:font-normal bg-white border-black border lg:border-none p-4 shadow-[0px_4px_0px_0px_#000] rounded-[10px] lg:rounded-none lg:bg-none lg:shadow-none  lg:static gap-8 flex flex-col lg:opacity-100 lg:flex-row transition-all lg:translate-y-0	 ", isModalOpen ? 'translate-y-0 opacity-100 ' : '-translate-y-[200%] opacity-0 ')}>
					<li className="cursor-pointer">Home</li>
					<li className="cursor-pointer">Tokenomics</li>
					<li className="cursor-pointer">Roadmap</li>
					<li className="cursor-pointer">Features</li>
				</ul>

				<div className="flex lg:hidden flex-col gap-1 cursor-pointer h-full items-center justify-center z-30" onClick={() => SetIsModalOpen(!isModalOpen)}>
					<div className="w-10 h-1 rounded-full border-[.5px] border-black shadow-[0px_1px_0px_0px_#000]"></div>
					<div className="w-10 h-1 rounded-full border-[.5px] border-black shadow-[0px_1px_0px_0px_#000]"></div>
					<div className="w-10 h-1 rounded-full border-[.5px] border-black shadow-[0px_1px_0px_0px_#000]"></div>
				</div>



				<div className="hidden lg:flex gap-4">
					<Card className="bg-[#CFFFD7] cursor-pointer p-0 lg:p-0 size-[45px] inline-flex items-center justify-center">
						<img src={social_1} alt="" className="invert size-[18px]" /></Card>
					<Card className="bg-[#CFFFD7] cursor-pointer p-0 lg:p-0 size-[45px] inline-flex items-center justify-center">
						<img src={social_2} alt="" className="invert size-[18px]" /></Card>
				</div>

			</Card>

			<Card className="hidden bg-[#79E7FF] font-bold text-[22px] lg:flex items-center justify-center whitespace-nowrap">
				BUY NOW
			</Card>
		</nav>
	)
}

export const HeroAfter = () => {

	return (
		<div className="container mx-auto hidden lg:block ">
			<Card className="w-full h-[200px] relative z-30" />
		</div>
	)
}

export default Hero