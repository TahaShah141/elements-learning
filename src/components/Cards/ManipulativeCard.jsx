import { SlidingDiv } from "../SlidingDiv"

export const ManipulativeCard = ({name, src, color, innerColor, text, index}) => {
  
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
      </div>
      <p className="flex-1 text-[8px] leading-none xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong>{name+": "}</strong>{text}</p>
    </SlidingDiv>
  )
}