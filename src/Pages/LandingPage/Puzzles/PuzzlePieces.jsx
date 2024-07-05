import { SlidingDiv } from "@/components/SlidingDiv";
import { puzzles } from "@/constants/LandingPage/puzzles";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PuzzlePiece } from "./PuzzlePiece";
import { useState } from "react";

export const PuzzlePieces = () => {

  const containerVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [showTabs, setShowTabs] = useState(true)

  return (
    <>
    <motion.div
    ref={ref}
    className='hidden sm:flex h-16 xs:h-24 sm:h-36 md:h-48 lg:h-64 xl:h-80'
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={containerVariants}
    onMouseEnter={() => setShowTabs(false)}
    onMouseLeave={() => setShowTabs(true)}
    >
    {puzzles.map((puzzle, i) => 
      <PuzzlePiece reverseOrder={i % 2 === 1} showTab={showTabs && i !== puzzles.length - 1} {...puzzle} order={puzzles.length - i} />
    )}
    </motion.div>

    {/* Mobile View */}
    <div className='flex sm:hidden flex-col text-white'>
      <div className="grid grid-cols-2 grid-rows-3 ">
        <SlidingDiv direction={"left"} className="aspect-square relative" style={{backgroundColor: puzzles[0].color, zIndex: puzzles.length - 0}}>
          <div className="absolute size-10 rounded-md right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: puzzles[0].color}}/>
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            <p className="font-bold text-5xl">{puzzles[0].letter}</p>
            <div className={`flex flex-col`}>
              <p className="uppercase text-center tracking-widest">{puzzles[0].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[0].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
          </div>
        </SlidingDiv>
        <SlidingDiv direction={"top"} delay={0.2} className="aspect-square relative" style={{backgroundColor: puzzles[1].color, zIndex: puzzles.length - 1}}>
          <div className="absolute size-10 rounded-md right-1/2 bottom-0 translate-x-1/2 translate-y-1/2 rotate-45" style={{backgroundColor: puzzles[1].color}}/>
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            <p className="font-bold text-5xl">{puzzles[1].letter}</p>
            <div className={`flex flex-col-reverse`}>
              <p className="uppercase text-center tracking-widest">{puzzles[1].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[1].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
          </div>
        </SlidingDiv>
        <SlidingDiv direction={"top"} delay={0.4} className="col-span-2 relative" style={{backgroundColor: puzzles[2].color, zIndex: puzzles.length - 2}}>
          <div className="absolute size-10 rounded-md left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-45" style={{backgroundColor: puzzles[2].color}}/>
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            <p className="font-bold text-5xl">{puzzles[2].letter}</p>
            <div className={`flex flex-col`}>
              <p className="uppercase text-center tracking-widest">{puzzles[2].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[2].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
          </div>
        </SlidingDiv>
        <SlidingDiv direction={"left"} delay={0.6} className="aspect-square relative" style={{backgroundColor: puzzles[3].color, zIndex: puzzles.length - 3}}>
          <div className="absolute size-10 rounded-md right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: puzzles[3].color}}/>
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            <p className="font-bold text-5xl">{puzzles[3].letter}</p>
            <div className={`flex flex-col`}>
              <p className="uppercase text-center tracking-widest">{puzzles[3].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[3].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
          </div>
        </SlidingDiv>
        <SlidingDiv direction={"right"} delay={0.8} className="aspect-square relative" style={{backgroundColor: puzzles[4].color, zIndex: puzzles.length - 4}}>          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            <p className="font-bold text-5xl">{puzzles[4].letter}</p>
            <div className={`flex flex-col-reverse`}>
              <p className="uppercase text-center tracking-widest">{puzzles[4].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[4].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
          </div>
        </SlidingDiv>
      </div>
    </div>
    </>
  )
}
