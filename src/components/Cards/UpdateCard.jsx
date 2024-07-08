import { LinkButton } from "../LinkButton"
import { SlidingDiv } from "../SlidingDiv"

export const UpdateCard = ({src, content, link, index}) => {

  return (
    <SlidingDiv direction={"top"} delay={index*0.5} className="flex flex-col flex-1 rounded-[50px] overflow-hidden rounded-tl-none gap-4 md:max-w-md bg-[#F3EEE8]">
      <div className="w-full md:h-64 lg:h-72 xl:h-96 aspect-square bg-neutral-400">
        {/* <img src={src} alt="" className="size-full" /> */}
      </div>
      <div className="flex flex-col flex-1 text-xs md:text-sm lg:text-base xl:text-xl gap-4 p-8 md:p-6 lg:p-6 xl:p-10 items-start">
        <p>{content}</p>
        <LinkButton textColor={"#FFFFFF"} bgColor="#FBBA41" text={"More Info"} />
      </div>
    </SlidingDiv>
  )
}