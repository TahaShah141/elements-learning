import { SlidingDiv } from "@/components/SlidingDiv"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { IconButton } from "@/components/custom/IconButton"
import { services } from "@/constants/WhatWeOffer/services"
import { ArrowRightIcon } from "lucide-react"

export const WhatWeOffer = () => {

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-8">

        <div className="rounded-md flex-1 flex flex-col sm:flex-row lg:flex-col xs:gap-2 sm:gap-8 justify-end items-end gap-px">
          <div className="max-w-[400px]">
            <img src="/landingpage/services.png" alt="" />
          </div>
          
          <SlidingDiv direction="bottom" repeat={true} className="flex flex-col xl:gap-2 max-w-[500px] xl:text-right">
            <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl">What we offer</h2>
            <p className="text-base md:text-xl lg:text-xl xl:text-2xl">Transforming education at every level, Elements Learning System offers holistic solutions for K-12 success. Backed by NUST, we are merging experience with innovation to shape future leaders.</p>
          </SlidingDiv>
        </div>
        <CustomAccordion changeHeaders={true} containerClass={"flex-1"} items={services.map(service => ({
          title: service.title,
          id: service.title,
          content: (
            <div className={`flex justify-start gap-2 p-2`}>
              <div className="w-24 sm:p-4 xs:w-32 sm:w-40 md:w-48 lg:w-32 xl:w-64">
                <img src={service.illustrationSrc} className="w-full h-fit float-start" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start">
              <p className="text-xs sm:text-base md:text-lg lg:text-sm xl:text-base">
                {service.content}
              </p>
              <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Learn More"} className={"text-[#FBBA41] font-bold text-sm sm:text-lg bg-[#353535] p-1 px-2 sm:p-2"} />

              </div>
            </div>
          )
        }))} />
      </div>
    </>
  )
}
