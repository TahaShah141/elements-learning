import { HashLink } from "react-router-hash-link"
import { SlidingDiv } from "../SlidingDiv"
import { IconButton } from "../custom/IconButton"
import { ArrowRightIcon } from "lucide-react"

export const ManipulativeCard = ({name, src, color, innerColor, text, buyLink, index}) => {
  
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="relative flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
      </div>
      <p className="flex-1 text-[8px] leading-none xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong>{name+": "}</strong>{text}</p>
      <HashLink to={buyLink} className="absolute right-0 bottom-0" >
        <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Shop Now"} className={"font-bold text-sm py-3 sm:text-lg xs:text-xl lg:text-2xl text-white p-2 xs:px-4 lg:p-4 rounded-3xl rounded-tr-none"} style={{backgroundColor: innerColor}}/>
      </HashLink>
    </SlidingDiv>
  )
}