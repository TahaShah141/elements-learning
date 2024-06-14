import { SlidingDiv } from "../../components/SlidingDiv"
import { StaggeredHeaders } from "../../components/StaggeredHeaders"

export const Hero = () => {
  return (
    <>
      <div className="py-24 max-w-lg flex flex-col gap-8">
        <StaggeredHeaders />
        <SlidingDiv direction={"bottom"} px={10} delay={1}>
          <p className="text-lg">Welcome to Elements Learning (EL), where we're reshaping K-12 education from the ground up.</p>
        </SlidingDiv>
        <div className="flex gap-4">
          <button className="p-4 bg-[#E7BA42] text-xl text-white font-bold flex items-center">
            <p>Trainings</p>
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" fill="currentColor"/></svg>
          </button>
          <button className="p-4 text-xl text-[#E7BA42] bg-[#353535] font-bold flex items-center">
            <p>Trainings</p>
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-2/5 gap-4">
        <div className="h-24 flex gap-4">
          <div className="flex-1 bg-[#74BE43] rounded-bl-[72px]"></div>
          <div className="flex-1"></div>
        </div>
        <div className="flex flex-[2_0_0] gap-4">
          <div className="flex-1 bg-[#F8EA01] rounded-[72px] rounded-br-none"></div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex-1 bg-[#F67E1F] rounded-[72px] rounded-bl-none"></div>
            <div className="flex-1 bg-[#02AEEE] rounded-[72px] rounded-tr-none"></div>
          </div>
        </div>
        <div className="h-24 flex gap-4">
          <div className="flex-1"></div>
          <div className="flex-1 bg-[#FBBB40] rounded-tr-[72px]"></div>
        </div>
      </div>
    </>
  )
}
