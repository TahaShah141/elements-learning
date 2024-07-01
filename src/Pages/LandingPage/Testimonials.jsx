import { HexagonPlayButton } from '@/components/HexagonPlayButton'
import { SlidingDiv } from '@/components/SlidingDiv'
import { StaggeredHeaders } from '@/components/StaggeredHeaders'
import { useState } from 'react'


const TestimonialCard = ({quote, person}) => {

  return (
    <div className="bg-[#F3EEE8] flex flex-col justify-center p-6 sm:p-10 lg:p-16 gap-2 rounded-xl md:rounded-3xl md:rounded-bl-none rounded-bl-none text-xs md:text-base lg:text-lg md:max-w-[400px] lg:max-w-[600px]">
      <svg className="size-4 lg:size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-open</title><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor"/></svg>
      <div className="flex flex-col gap-4 lg:gap-8">
        <p>{quote}</p>
        <p className="font-bold">{person}</p>
      </div>
    </div>
  )
}

const testimonials = [
  {
    person: "Teacher Trainee - AJK",
    quote: "As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."
  },
  {
    person: "Teacher Trainee - AJK 2",
    quote: "As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."
  },
  {
    person: "Teacher Trainee - AJK 3",
    quote: "As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."
  },
  {
    person: "Teacher Trainee - AJK 4",
    quote: "As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."
  },
  {
    person: "Teacher Trainee - AJK 5",
    quote: "As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."
  },
]


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
