import Card, { ParagrafCard } from "@/components/common/Card"
import Heading3d from "@/components/common/Headings"

import foot_right from '~/hero/foot_right.png'
import foot_left from '~/hero/foot_left.png'

import social_1 from '~/navbar/icon1.svg'
import social_2 from '~/navbar/icon2.svg'

const Hero = () => {
	return (
		<div className="h-screen w-screen bg-hero bg-no-repeat bg-center bg-cover relative  ">
			<div className="container mx-auto pt-8">
				<Navbar />

				<Heading3d isMain>$CLOUD</Heading3d>

				<img src="/hero/kitty.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-20" />
				<ParagrafCard title="$CLOUD CONTRACT ADDRESS" className="absolute rotate-[-9deg] top-1/2 left-1/2  translate-y-full -translate-x-[calc(140%)] z-10 ">
					0xf6e932ca12afa26665dc4dde7e27be02a7c02e50 <img src="/hero/copy.svg" alt="" className="inline-block ml-4" />
				</ParagrafCard>
				<ParagrafCard title="Lorem Ipsum is simply " className="absolute rotate-[6deg] top-1/2 right-1/2 translate-y-2/3 translate-x-[calc(155%)] z-0 px-[30px] ">
					Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
				</ParagrafCard>

				<img src={foot_left} alt="" className="absolute bottom-0 left-0 z-0" />
				<img src={foot_right} alt="" className="absolute bottom-0 right-0 translate-y-1/2" />
			</div>
		</div>

	)
}

const Navbar = () => {

	return (
		<nav className="flex gap-8">
			<Card className="flex justify-between items-center w-full">
				<div className="flex items-center justify-center gap-2">
					<Card className="bg-[#AED6FB] size-[45px]" />
					<div className="flex flex-col justify-center h-full">
						<h3 className=" text-[20px] font-bold tracking-[-1.6px] leading-[1]">CLOUD</h3>
						<span className="text-[20px] font-light tracking-[-1.4px] leading-[1]">coin</span>
					</div>
				</div>

				<ul className="flex gap-8">
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

			</Card>

			<Card className="bg-[#79E7FF] font-bold text-[22px] flex items-center justify-center whitespace-nowrap">
				BUY NOW
			</Card>
		</nav>
	)
}

export const HeroAfter = () => {

	return(
		<div className="container mx-auto ">
			<Card className="w-full h-[200px] relative z-30"/>
		</div>
	)
}

export default Hero