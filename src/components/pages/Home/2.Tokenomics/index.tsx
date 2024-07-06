import Card from '@/components/common/Card'
import Heading3d from '@/components/common/Headings'
import cloud from '~/2.section/cloud.png'

const Tokenomics = () => {

	return (
		<section className='bg-tokenomics bg-center bg-cover bg-no-repeat min-h-screen'>
			<div className="container mx-auto flex flex-col justify-start items-center pt-[150px]">
			<Heading3d className=''>TOKENOMICS</Heading3d>
			<p className="text-[20px] text-center my-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
			
			<div className="relative">
				<img src={cloud} alt="" className="" />
				<div className=" absolute top-1/2 left-1/2 translate-y-[220px] -translate-x-1/2 w-[300px] flex justify-start items-center gap-4">
					<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
					<Card className='p-2'>Lorem Ipsum is simply dummy</Card>
				</div>
				<div className=" absolute top-1/2 left-1/2 translate-y-[160px] -translate-x-[calc(50%+400px)] w-[300px] flex justify-start items-center gap-4">
				<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
				<Card className='p-2'>Lorem Ipsum is simply dummy</Card>
				</div>
				<div className=" absolute top-1/2 left-1/2 translate-y-[280px] -translate-x-[calc(50%-410px)] w-[300px] flex justify-start items-center gap-4">
				<Card className='flex items-center justify-center p-2 bg-[#D8C5FF]'>70%</Card>
				<Card className='p-2'>Lorem Ipsum is simply dummy</Card>
				</div>
			</div>
</div>
		</section>
	)
}

export default Tokenomics