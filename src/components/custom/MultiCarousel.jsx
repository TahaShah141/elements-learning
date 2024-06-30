import { useEffect, useState } from "react"

export const MultiCarousel = ({items, autoScroll=true, delay=3000}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState()
  const [size, setSize] = useState(200)
  const [gapSize, setGapSize] = useState(5)
  const [paused, setPaused] = useState(false)
  const smallerSize = size * 0.8

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 1280) {
      setSize(500)
      setGapSize(20)
    } else if (windowWidth >= 1024) {
      setSize(400)
      setGapSize(15)
    } else if (windowWidth >= 768) {
      setSize(350)
      setGapSize(12)
    } else if (windowWidth >= 640) {
      setSize(300)
      setGapSize(10)
    }
  }, [])

  useEffect(() => {

    if (paused || !autoScroll) {
      clearInterval(intervalID)
    } else {
      const id = setInterval(() => setIndex(i => (i+1)%items.length), delay)
      setIntervalID(id)
      return () => clearInterval(id)
    }

  }, [paused, autoScroll])

  return (
    <div className="relative w-full flex overflow-hidden justify-center items-center gap-8" 
    style={{height: size}} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute flex flex-col justify-between transition-all duration-500" style={{backgroundColor: items[index].color, color: "#FFFFFF", width: size, height: size, paddingRight: size/10, paddingLeft: size/10, paddingTop: size/15, paddingBottom: size/15}}>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-md">{items[index].name}</p>
        {items[index].secondaries && 
        <div className="hidden md:flex gap-2 md:flex-col md:gap-0 font-semibold text-xs md:text-sm lg:text-base xl:text-lg">
          {items[index].secondaries.map(text => 
            <p className="drop-shadow-md">{text}</p>
          )}
        </div>}
      </div>
      <div className="relative z-10 h-3/5 sm:-translate-y-[8%]" style={{width: smallerSize}}>
        {items.map((item, i) => (
          <div className={`absolute transition-all duration-700 bottom-0 p-1 ${i === index ? "h-full w-full" : "h-2/3 w-2/3"}`} 
          style={{backgroundColor: item.innerColor, transform: `${index > i ? `translateX(calc(${100*1/2}% + ${(index-i) * (smallerSize*(2/3) + gapSize)}px))` : `translateX(${(index-i) * (smallerSize*(2/3) + gapSize) }px)`}`}}
          onClick={() => setIndex(i)}
          >
            <img src={item.src} alt="" className="h-full object-fit shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
