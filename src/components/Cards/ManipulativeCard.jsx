import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { SlidingDiv } from "../SlidingDiv"
import { IconButton } from "../custom/IconButton"

export const ManipulativeCard = ({name, src, color, innerColor, text, buyLink, index}) => {
  
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="relative flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
      </div>
      <p className="flex-1 text-[8px] leading-none xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong>{name+": "}</strong>{text}</p>
      <Link to={buyLink} target="_blank" className="absolute right-0 bottom-0" >
        <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Shop Now"} className={"font-bold text-white xs:text-[10px] xs:px-1 xs:py-1 lg:py-3 lg:text-2xl  px-1 lg:p-4 rounded-2xl md:rounded-3xl rounded-tr-none"} style={{backgroundColor: innerColor}}/>
      </Link>
    </SlidingDiv>
  )
}