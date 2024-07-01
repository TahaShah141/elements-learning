import React from 'react'
import { CountUp } from '../../components/CountUp'

export const Stats = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <img loading="lazy" src="/landingpage/students.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={10000} increment={200} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl  ">Students</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img loading="lazy" src="/landingpage/teachers.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={3000} increment={60} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl ">Teachers</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img loading="lazy" src="/landingpage/parents.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={1000} increment={20} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl ">Parents</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img loading="lazy" src="/landingpage/schools.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={100} increment={2} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl ">Schools</p>
        </div>
      </div>
    </>
  )
}
