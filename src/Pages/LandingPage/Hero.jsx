import { LinkButton } from "../../components/LinkButton"
import { SlidingDiv } from "../../components/SlidingDiv"
import { StaggeredHeaders } from "../../components/StaggeredHeaders"

export const Hero = () => {
  return (
    <>
      <div className="py-10 xs:py-16 sm:py-24 md:max-w-lg flex w-full flex-col gap-4 lg:gap-8">
        <StaggeredHeaders containerClass="px-6 xs:px-10 md:px-0 text-4xl xs:text-6xl sm:text-8xl md:text-7xl lg:text-8xl text-[#353535] font-bold" headers={["Life", "Long", "Learning."]}/>
        <SlidingDiv className="px-6 xs:px-10 md:px-0" direction={"bottom"} px={10} delay={1}>
          <p className="text-xs xs:text-sm lg:text-lg">Welcome to Elements Learning (EL), where we're reshaping K-12 education from the ground up.</p>
        </SlidingDiv>

        <div className="w-full py-4 xs:py-8 gap-4 flex flex-col md:hidden overflow-hidden">
          <SlidingDiv className="flex gap-4 justify-end w-full" direction={"right"} px={50} delay={0.5}>
            <div className="size-20 xs:size-32 justify-center bg-[#F67E1F] flex items-end overflow-hidden rounded-[30px] xs:rounded-[50px] xs:rounded-br-none rounded-br-none">
              <img src="/landingpage/pic02.png" className="h-full" alt="" />
            </div>
            <div className="size-20 xs:size-32 justify-center bg-[#02AEEE] flex items-end overflow-hidden rounded-[30px] xs:rounded-[50px] xs:rounded-tl-none rounded-tl-none">
              <img src="/landingpage/pic03.png" className="h-full" alt="" />
            </div>
            <div className="h-20 w-20 xs:h-32 xs:w-12 bg-[#FBBB40] xs:rounded-tl-[50px] rounded-tl-[30px]"></div>
          </SlidingDiv>
          <SlidingDiv className="flex gap-4 flex-1" direction={"left"} px={50} delay={1}>
            <div className="h-20 w-20 xs:h-32 xs:w-12 bg-[#74BE43] rounded-br-[30px] xs:rounded-br-[50px]"></div>
            <div className="h-20 xs:h-32 w-3/5 justify-center bg-[#F8EA01] flex items-end overflow-hidden rounded-[30px] xs:rounded-[50px] xs:rounded-tr-none rounded-tr-none">
              <img src="/landingpage/pic01.png" className="h-full scale-[150%] translate-y-[10%]" alt="" />
            </div>
          </SlidingDiv>
        </div>
        <div className="flex gap-4 px-6 xs:px-10 md:px-0">

          <LinkButton text="Training" textColor={"#FFFFFF"} bgColor={"#FBBA41"} />
          <LinkButton text="Contact Us" bgColor={"#353535"} textColor={"#FBBA41"} />
        </div>
      </div>
      <div className="w-full xl:w-2/5 gap-4 hidden md:flex overflow-hidden">
        <SlidingDiv className="flex flex-col gap-4 flex-1" direction={"top"} px={100} delay={0.5}>
          <div className="h-16 xl:h-24 bg-[#74BE43] rounded-bl-[70px] lg:rounded-bl-[120px]"></div>
          <div className="flex-1 bg-[#F8EA01] flex items-end overflow-hidden rounded-[70px] lg:rounded-[120px] lg:rounded-br-none rounded-br-none">
            <img src="/landingpage/pic01.png" className="scale-[150%] -translate-y-[10%]" alt="" />
          </div>
          <div className="h-16 xl:h-24"></div>
        </SlidingDiv>

        <SlidingDiv className="flex flex-col gap-4 flex-1" direction={"bottom"} px={100} delay={0.6}>
          <div className="h-16 xl:h-24"></div>
            <div className="flex-1 bg-[#F67E1F] rounded-[70px] lg:rounded-[120px] overflow-hidden lg:rounded-bl-none rounded-bl-none">
              <img src="/landingpage/pic02.png" className="h-full" alt="" />
            </div>
            <div className="flex-1 bg-[#02AEEE] flex justify-end overflow-hidden rounded-[70px] lg:rounded-[120px] lg:rounded-tr-none rounded-tr-none">
              <img src="/landingpage/pic03.png" className="h-full" alt="" />
            </div>
          <div className="h-16 xl:h-24 bg-[#FBBB40] rounded-tr-[70px] lg:rounded-tr-[120px]"></div>
        </SlidingDiv>
      </div>
    </>
  )
}
