import React from 'react'
import { CountUp } from '../../components/CountUp'

export const Stats = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <img src="/students.png" className="size-56" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-4xl font-bold" start={0} end={10000} increment={200} delay={20} suffix="+"/>
          <p className="text-xl">Students</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/teachers.png" className="size-56" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-4xl font-bold" start={0} end={3000} increment={60} delay={20} suffix="+"/>
          <p className="text-xl">Teachers</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/parents.png" className="size-56" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-4xl font-bold" start={0} end={1000} increment={20} delay={20} suffix="+"/>
          <p className="text-xl">Parents</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/schools.png" className="size-56" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-4xl font-bold" start={0} end={100} increment={2} delay={20} suffix="+"/>
          <p className="text-xl">Schools</p>
        </div>
      </div>
    </>
  )
}
