import React from 'react'
import { twMerge as cn } from 'tailwind-merge'

const Card = ({children, className, onClick} : React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div onClick={onClick} className={cn("rounded-[10px] border border-black py-4 px-4 lg:px-[22px] shadow-[0px_4px_0px_0px_#000] bg-white inline-block", className)}>
			{children}
		</div>
	)
}

export const ParagrafCard = ({className, title, children, onClick}:{title: string} & React.HTMLAttributes<HTMLDivElement>) => {
	return(
		<Card onClick={onClick} className={cn("text-center  ", className)}>
			<h3 className="text-xl lg:text-[25px] font-bold uppercase text-stroke-small">{title}</h3>
			<p className="text-sm lg:text-[20px] ">{children}</p>
		</Card>
	)
}

export default Card