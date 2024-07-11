import { StaggeredPillarHeader } from '@/Pages/LandingPage/StaggeredPillarHeader'
import { SlidingDiv } from '@/components/SlidingDiv'

export const Pillars = () => {

  return (
    <>
    <div className="flex gap-4 sm:gap-8 md:gap-16 w-full flex-col  sm:flex-row justify-center sm:items-end">
      <StaggeredPillarHeader />
      <div className="flex flex-col items-start gap-2 md:gap-4">
        <SlidingDiv className='relative flex-1' direction="right" px={50}>
          <img src="/landingpage/pillars.png" className="w-full sm:w-[400px] lg:w-[550px]" />
        </SlidingDiv>
        <SlidingDiv direction="bottom" px={70} delay={0.3}  className="grid grid-cols-2 min-[400px]:flex w-full text-xs xs:text-sm lg:text-base justify-between lg:justify-center place-items-center xs:place-items-start gap-y-10 lg:gap-20 flex-1">
          <div className="flex  flex-col xs:flex-row min-[400px]:flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/teachingmaterial.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Teaching</p>
              <p>Material</p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row min-[400px]:flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/teacherstraining.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Teachers</p>
              <p>Training</p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row min-[400px]:flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/assessments.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Assessments</p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row min-[400px]:flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/schoolleaderships.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>School</p>
              <p>Leaderships</p>
            </div>
          </div>
        </SlidingDiv>
      </div>
    </div>
    <SlidingDiv direction="bottom" px={50}>
    <div className="xl:px-20">
      <p className="sm:text-lg text-center">
      Quality education, as <strong>envisioned by Elements Learning</strong>, rides on the sturdy foundation of four crucial components: well-crafted teaching materials that <i>engage and enlighten</i>, continuous teacher training that <i>inspires and empowers</i>, rigorous assessments to measure <i>progress and potential</i>, and dynamic school leadership to <i>steer towards excellence.</i> These elements form the backbone of a <strong>holistic educational journey</strong>, fostering intellectual, emotional, and spiritual growth in students.</p>
    </div>
    </SlidingDiv>
    </>
  )
}
