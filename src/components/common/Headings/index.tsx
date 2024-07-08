import React from 'react'

const Heading3d = ({ className, children, isMain }: { isMain?: boolean } & React.HTMLAttributes<HTMLHeadingElement>) => {
	if (isMain) {
		return (
			<h1 className="uppercase font-['Cherry_Bomb_One'] text-[85px] lg:text-[180px] text-white text-stroke-big absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] ">
				{children}
			</h1>
		)
	}

	return(
		<h2 
			className={"text-stroke-normal uppercase font-['Cherry_Bomb_One'] text-[50px] text-white " + className}
			style={{}}
			>
			{/* <span className="text-stroke">{children}</span> */}
			{children}
		</h2>
	)

}

export default Heading3d