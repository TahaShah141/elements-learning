import React from 'react'
import { StaggeredHeaders } from '../../components/StaggeredHeaders'
import { SlidingDiv } from '../../components/SlidingDiv'
import { HexagonPlayButton } from '../../components/HexagonPlayButton'


const TestimonialCard = ({quote, person}) => {
  return (
    <div className="bg-[#F3EEE8] p-16 flex flex-col justify-center gap-2 rounded-3xl rounded-bl-none text-lg max-w-[600px]">
      <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-open</title><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor"/></svg>
      <div className="flex flex-col gap-8">
        <p>{quote}</p>
        <p className="font-bold">{person}</p>
      </div>
    </div>
  )
}


export const Testimonials = () => {
  return (
    <>
    <div className="flex flex-col gap-4">
      <div className="w-96">
        <img src="landingpage/testimonials.png" alt="" />
      </div>
      <StaggeredHeaders headers={["What", "Others", "Say About", "Us"]} direction="bottom" px={20} containerClass="flex flex-col text-5xl font-bold uppercase items-end" />
    </div>
    <div className="relative flex flex-col justify-center">
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-16 z-10">
        <SlidingDiv direction="right" px={50} threshold={0.7}>
          <button className="size-full">
            <HexagonPlayButton outerColor="#FABB41" />
          </button>
        </SlidingDiv>
      </div>
      <SlidingDiv direction="top" px={50} threshold={0.7}>
      <TestimonialCard person={"Teacher Trainee - AJK"}
      quote={"As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."} />
      </SlidingDiv>
    </div>
    </>
  )
}
