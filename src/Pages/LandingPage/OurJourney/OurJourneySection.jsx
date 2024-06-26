import { Bullet } from '@/Pages/LandingPage/OurJourney/Bullet'
import { Jahaaz } from '@/Pages/LandingPage/OurJourney/Jahaaz'
import '@/Styles/ourJourney.css'
import { FadeIn } from '@/components/FadeIn'
import { SlidingDiv } from '@/components/SlidingDiv'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const animationTime = 3

const JourneyMarker = ({color, content, header, reverse=false, index}) => {
  return (
    <SlidingDiv direction={reverse ? "bottom" : "top"} delay={index*animationTime/5} className={`relative w-full`} >
      <div className={`relative w-full flex justify-center -translate-y-1/2`} >
        <div className={`absolute flex flex-col lg:gap-2 items-center w-[120%] min-[1400px]:w-full md:text-xs lg:text-sm xl:text-base text-center p-4 ${reverse ? "top-0 -translate-y-full" : "bottom-0 translate-y-full"}`}>
          <h4 className='font-semibold md:text-2xl xl:text-4xl'>{header}</h4>
          <p>{content}</p>
        </div>
        <Bullet color={color} />
      </div>
    </SlidingDiv>
  )
}

const getPercentageY = (xPercent) => {
  const trueX = 19.2*xPercent
  const trueY = Math.pow(Math.E, (trueX/10))+10.8/4
  const toReturn = (10.8-trueY)/10.8 * 100
  return toReturn
}

const getTangentAngle = (xPercent) => {
  const trueX = 19.2*xPercent
  const gradient = Math.pow(Math.E, (trueX/10))/10
  const angle = Math.atan(gradient)
  return angle
}

export const journeySteps = [
  {
    color: "#EB008B",
    header: "2009-2017",
    content: "Pioneered homeschooling, discovering the stark difference between children's love for learning and the traditional school experience.",
    contentBelow: true
  },
  {
    color: "#00A551",
    header: "2017-2019",
    content: "Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors.",
    contentBelow: false
  },
  {
    color: "#00ADEF",
    header: "2019-2021",
    content: "Faced resistance to change in existing school systems, realizing the need for broader engagement from government and university sectors.",
    contentBelow: true
  },
  {
    color: "#F3811F",
    header: "2021-2023",
    content: "Persisted in outreach efforts, securing a pivotal partnership with NUST to advance its vision for education reform.",
    contentBelow: false
  },
  {
    color: "#6C3A92",
    header: "2023-Present",
    content: "Emerged as a NUST spinoff, poised to revolutionize K-12 education through research-based parctices and accessible resources.",
    contentBelow: true
  }
]

const Dots = ({inc=0.01, allowed=false}) => {

  const coords = []
  for (let x = 0.1; x <= 0.9 ; x += inc) {
    coords.push({x, y: getPercentageY(x)})
  }

  return coords.map(({x, y}) => 
    <FadeIn key={x} className="absolute bg-black size-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{left: `${x*100}%`, top: `${y}%`}} delay={(x-0.1)/0.8*animationTime}/>
  )
}


export const OurJourneySection = () => {
  
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true
  })

  const [inc, setInc] = useState(0)

  useEffect(() => {
    const width = window.innerWidth
    setInc(width > 1400 ? 0.01 : width > 950 ? 0.02 : 0.03)
  })

  return (
    <div className='min-[900px]:flex hidden flex-col w-full gap-2 lg:gap-4 py-10 px-10 lg:px-20'>
      <div ref={ref} className={"relative aspect-video flex"}>
        {inView && 
        <>
        {journeySteps.map(({color, header, content, contentBelow}, i) => (
          <div className="flex flex-col h-full flex-1 items-center z-10">
            <div className="w-full" style={{height: `${getPercentageY(((i*2)+1)/10)}%`}} />
            <JourneyMarker index={i} offset={0} color={color} header={header} content={content} reverse={!contentBelow} />
          </div>
        ))}
        <Dots inc={inc} />
        <div className='absolute w-32 lg:w-40 xl:w-48 z-20 jahaaz' style={{left:`99%`, top: `${getPercentageY(99/100)}%`, transform: `translate(-50%, -50%) rotate(-${getTangentAngle(99/100)}rad)`}}>
          <Jahaaz />
        </div>
        </>}
      </div>
    </div>
  )
}
