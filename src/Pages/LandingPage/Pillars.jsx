import React from 'react'
import { StaggeredPillarHeader } from './StaggeredPillarHeader'
import { SlidingDiv } from '../../components/SlidingDiv'

export const Pillars = () => {
  return (
    <>
    <div className="flex gap-16 justify-center items-center">
      <StaggeredPillarHeader />
      <div className="flex flex-col items-start gap-4">
        <SlidingDiv direction="right" px={50}>
          <img src="/landingpage/pillars.png" className="h-[500px]" />
        </SlidingDiv>
        <SlidingDiv direction="bottom" px={70} delay={0.3}>
          <div className="flex justify-center gap-20 flex-1">
            <div className="flex flex-col gap-1 font-bold items-center size-16">
              <img src="/landingpage/teachingmaterial.png" className="scale-125" alt="" />
              <div className="flex flex-col items-center">
                <p>Teaching</p>
                <p>Material</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 font-bold items-center size-16">
              <img src="/landingpage/teacherstraining.png" className="scale-125" alt="" />
              <div className="flex flex-col items-center">
                <p>Teachers</p>
                <p>Training</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 font-bold items-center size-16">
              <img src="/landingpage/assessments.png" className="scale-125" alt="" />
              <div className="flex flex-col items-center">
                <p>Assessments</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 font-bold items-center size-16">
              <img src="/landingpage/schoolleaderships.png" className="scale-125" alt="" />
              <div className="flex flex-col items-center">
                <p>School</p>
                <p>Leaderships</p>
              </div>
            </div>
          </div>
        </SlidingDiv>
      </div>
    </div>
    <SlidingDiv direction="bottom" px={50}>
    <div className="px-20">
      <p className="text-lg">
        Quality education rides on the sturdy foundation of four crucial components: well-crafted teaching materials to engage and enlighten, continuous teacher training to inspire and empower, rigorous assessments to measure progress and potential, and dynamic school leadership to steer towards excellence. These wheels form the backbone of a holistic educational journey.
      </p>
    </div>
    </SlidingDiv>
    </>
  )
}
