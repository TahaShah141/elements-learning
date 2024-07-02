import { FadeIn } from "@/components/FadeIn"
import { SlidingDiv } from "@/components/SlidingDiv"
import { MultiCarousel } from "@/components/custom/MultiCarousel"
import { TrainingEvent } from "@/constants/WhatWeOffer/Sections/MathSections/TrainingsContent/TrainingEvent"
import { flowchartSteps } from "@/constants/WhatWeOffer/Sections/MathSections/TrainingsContent/flowchartSteps"


const FlowChart = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center sm:gap-2 md:h-[80vh]">
      {flowchartSteps.map(({name, color, corner, optionals}, i) =>
        <>
          <SlidingDiv direction={"top"} delay={i*0.3} className="flex md:flex-col justify-center">
            {optionals && 
            <div className="flex-1 md:h-full flex md:flex-col items-center">
              <div className={`flex p-2 w-20 sm:p-4 sm:w-28 md:w-32 md:h-1/2 justify-center items-center text-center rounded-[20px] rounded-${optionals[0].corner}-none border-2 border-dashed border-neutral-500 text-neutral-500`}>
                <p className="font-bold text-xs sm:text-sm md:text-lg">{optionals[0].name}</p>
              </div>
              <div className="flex-1 flex md:flex-col justify-around">
                {Array.from({length: 10}).map((_, i) => <div className="size-0.5 sm:size-1 bg-neutral-600 rounded-full" />)} 
              </div>
            </div>}
            <div className={`flex p-2 size-36 sm:p-4 sm:w-40 xl:p-8 xl:w-64 md:h-1/4 lg:h-1/3 lg:p-6 lg:w-48 justify-center items-center text-center rounded-[30px] rounded-${corner}-none drop-shadow-md`}
            style={{backgroundColor: color}}>
              <p className="font-bold text-sm sm:text-base md:text-xl xl:text-2xl">{name}</p>
            </div>
            {optionals && 
            <div className="flex-1 w-full flex md:flex-col items-center">
              <div className="flex-1 flex md:flex-col justify-around">
                {Array.from({length: 10}).map((_, i) => <div className="size-0.5 sm:size-1 bg-neutral-600 rounded-full" />)} 
              </div>
              <div className={`flex p-2 w-20 sm:p-4 sm:w-28 md:w-32 md:h-1/2 justify-center items-center text-center rounded-[20px] rounded-${optionals[1].corner}-none border-2 border-dashed border-neutral-500 text-neutral-500`}>
                <p className="font-bold text-xs sm:text-sm md:text-lg">{optionals[1].name}</p>
              </div>
            </div>}              
          </SlidingDiv>
          {i !== flowchartSteps.length - 1 && 
          <SlidingDiv direction={"left"} delay={i*0.3 + 0.1} className="flex-1 flex flex-col gap-1 md:flex-row items-center justify-around">
            {Array.from({length: 6}).map((_, i) => <div className="size-1 xl:size-1.5 bg-black rounded-full" />)} 
          </SlidingDiv>
          }
        </>
      )}
    </div>
  )
}

export const TrainingsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>At Elements Learning, we believe that the changing face of mathematics demands a fresh approach to teaching, one that embraces innovation and fosters critical thinking skills in the mathematicians of tomorrow.</p>
          <p>Our comprehensive teacher's training program is the cornerstone of this evolution, aimed at upskilling Elementary and Middle School Mathematics Teachers.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <FlowChart />
        </section>
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>Through extensive face-to-face trainings with esteemed organizations and schools, such as APS, Froebels International Schools, Silver Oaks School System, FDE, FGE, NCLS, and many more to come, we ensure that teachers receive immersive learning experiences, preparing them to excel in the ever-evolving landscape of education.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={TrainingEvent} />
        </section>
               
      </div>
    </FadeIn>
  )
}
