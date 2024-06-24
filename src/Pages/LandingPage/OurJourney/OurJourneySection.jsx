import '../../../Styles/ourJourney.css'
import { SlidingDiv } from '../../../components/SlidingDiv'
import { Bullet } from './Bullet'

const JourneyMarker = ({color, content, header, offset=0, reverse=false}) => {
  return (
    <div className={`w-72 flex flex-col items-center gap-4 ${reverse ? 'flex-col-reverse' : ''}`} style={{transform: `translateY(${offset}px)`}}>
      <div className="flex flex-col gap-2 items-center text-md text-center px-4">
        <h4 className='font-semibold text-4xl'>{header}</h4>
        <p>{content}</p>
      </div>
      <Bullet color={color} />
    </div>
  )
}

export const OurJourneySection = () => {
  return (
    <>
    <h3 className="text-4xl font-bold uppercase">Our Journey</h3>
    <div className="relative h-[700px] flex">
      <div threshold={1} className="flex flex-col h-full flex-1 justify-end" direction="bottom" px={50}>
        <JourneyMarker offset={0} color="#EB008B" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
      </div>
      <div threshold={1} className="flex flex-col h-full flex-1" direction="top" px={50}>
        <div className="h-[25%] w-full" />
        <JourneyMarker offset={0} color="#00A551" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={false} />
      </div>
      <div threshold={1} className="flex flex-col h-full flex-1 justify-end" direction="bottom" px={50}>
        <JourneyMarker offset={0} color="#00ADEF" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
        <div className="h-[10%] w-full" />
      </div>
      <div threshold={1} className="flex flex-col h-full flex-1" direction="top" px={50}>
        <div className="h-[5%] w-full" />
        <JourneyMarker offset={0} color="#F3811F" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={false} />
      </div>
      <div threshold={1} className="flex flex-col h-full flex-1" direction="bottom" px={50}>
        <div className="h-[10%] w-full" />
        <JourneyMarker offset={0} color="#6C3A92" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
      </div>
      {/* <SlidingDiv threshold={1} className="flex flex-col h-full flex-1 justify-end" direction="bottom" px={50}>
        <JourneyMarker offset={0} color="#EB008B" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
      </SlidingDiv>
      <SlidingDiv threshold={1} className="flex flex-col h-full flex-1" direction="top" px={50}>
        <div className="h-[25%] w-full" />
        <JourneyMarker offset={0} color="#00A551" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={false} />
      </SlidingDiv>
      <SlidingDiv threshold={1} className="flex flex-col h-full flex-1 justify-end" direction="bottom" px={50}>
        <JourneyMarker offset={0} color="#00ADEF" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
        <div className="h-[10%] w-full" />
      </SlidingDiv>
      <SlidingDiv threshold={1} className="flex flex-col h-full flex-1" direction="top" px={50}>
        <div className="h-[5%] w-full" />
        <JourneyMarker offset={0} color="#F3811F" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={false} />
      </SlidingDiv>
      <SlidingDiv threshold={1} className="flex flex-col h-full flex-1" direction="bottom" px={50}>
        <div className="h-[10%] w-full" />
        <JourneyMarker offset={0} color="#6C3A92" header="2017-2019" content="Conducted formal training for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors." reverse={true} />
      </SlidingDiv> */}
    </div>
    </>
  )
}
