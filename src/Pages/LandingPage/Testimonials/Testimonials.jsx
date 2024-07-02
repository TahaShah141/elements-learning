import { HexagonPlayButton } from '@/components/HexagonPlayButton'
import { SlidingDiv } from '@/components/SlidingDiv'
import { StaggeredHeaders } from '@/components/StaggeredHeaders'
import { testimonials } from '@/constants/LandingPage/testimonials'
import { useState } from 'react'
import { TestimonialCard } from './TestimonialCard'

export const Testimonials = () => {

  const [index, setIndex] = useState(0)

  return (
    <>
    <div className="flex min-[550px]:flex-col gap-2 items-end justify-center">
      <div className="w-32 sm:w-40 md:w-48 lg:w-72">
        <img src="landingpage/testimonials.png" alt="" />
      </div>
      <StaggeredHeaders headers={["What", "Others", "Say About Us"]} direction="bottom" px={20} containerClass="flex flex-col text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase sm:items-end" />
    </div>
    <div className="relative flex flex-col justify-center">
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-10 lg:size-16 z-10">
        <SlidingDiv direction="right" px={20} threshold={0.1}>
          <button className="size-full" onClick={() => setIndex((index+1)%testimonials.length)}>
            <HexagonPlayButton outerColor="#FABB41" />
          </button>
        </SlidingDiv>
      </div>
      <SlidingDiv direction="top" px={50} threshold={0.7}>
        <TestimonialCard {...testimonials[index]} />
      </SlidingDiv>
    </div>
    </>
  )
}
