import { LinkButton } from "../../components/LinkButton"
import { SlidingDiv } from "../../components/SlidingDiv"
import { StaggeredHeaders } from "../../components/StaggeredHeaders"

export const Hero = () => {
  return (
    <>
      <div className="py-24 max-w-lg flex flex-col gap-8">
        <StaggeredHeaders containerClass="text-8xl text-[#353535] font-bold" headers={["Life", "Long", "Learning."]}/>
        <SlidingDiv direction={"bottom"} px={10} delay={1}>
          <p className="text-lg">Welcome to Elements Learning (EL), where we're reshaping K-12 education from the ground up.</p>
        </SlidingDiv>
        <div className="flex gap-4">

          <LinkButton text="Training" textColor={"#FFFFFF"} bgColor={"#FBBA41"} />
          <LinkButton text="Contact Us" bgColor={"#353535"} textColor={"#FBBA41"} />
        </div>
      </div>
      <div className="flex flex-col w-2/5 gap-4">
        <div className="h-24 flex gap-4">
          <div className="flex-1 bg-[#74BE43] rounded-bl-[110px]"></div>
          <div className="flex-1"></div>
        </div>
        <div className="flex flex-[2_0_0] gap-4">
          <div className="flex-1 bg-[#F8EA01] flex items-end overflow-hidden rounded-[110px] rounded-br-none">
            <img src="/landingpage/pic01.png" className="w-full" alt="" />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex-1 bg-[#F67E1F] rounded-[110px] overflow-hidden rounded-bl-none">
              <img src="/landingpage/pic02.png" className="h-full" alt="" />
            </div>
            <div className="flex-1 bg-[#02AEEE] flex justify-end overflow-hidden rounded-[110px] rounded-tr-none">
              <img src="/landingpage/pic03.png" className="h-full" alt="" />

            </div>
          </div>
        </div>
        <div className="h-24 flex gap-4">
          <div className="flex-1"></div>
          <div className="flex-1 bg-[#FBBB40] rounded-tr-[110px]"></div>
        </div>
      </div>
    </>
  )
}
