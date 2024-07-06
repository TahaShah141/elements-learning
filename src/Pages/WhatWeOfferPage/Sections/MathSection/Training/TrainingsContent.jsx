import { FadeIn } from "@/components/FadeIn"
import { MultiCarousel } from "@/components/custom/MultiCarousel"
import { useScrollToTop } from "@/lib/useScrollToTop"
import { FlowChart } from "./FlowChart"
import { TrainingEvents } from "@/constants/WhatWeOffer/Sections/MathSections/TrainingsContent/TrainingEvent"

export const TrainingsContent = () => {

  useScrollToTop()
  
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
          <MultiCarousel items={TrainingEvents} />
        </section>
      </div>
    </FadeIn>
  )
}
