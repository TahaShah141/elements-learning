import { useEffect, useState } from "react"

export const MultiCarousel = ({items, autoScroll=true, size=500, gapSize=20, delay=3000}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState()
  const smallerSize = size * 0.8

  useEffect(() => {
    if (!autoScroll) clearInterval(intervalID);
    else {
      clearInterval(intervalID)
      const id = setInterval(() => setIndex(i => (i+1)%items.length), delay)
      setIntervalID(id)
      return () => clearInterval(id)
    }

  }, [])

  return (
    <div className="relative w-full flex overflow-hidden justify-center items-center gap-8" style={{height: size}}>
      <div className="absolute transition-all duration-500" style={{backgroundColor: items[index].color, width: size, height: size}} />
      <div className="relative z-10 h-3/5" style={{width: smallerSize}}>
        {items.map((item, i) => (
          <div className={`absolute transition-all duration-700 bottom-0 ${i === index ? "h-full w-full" : "h-1/2 w-1/2"}`} 
          style={{backgroundColor: item.innerColor, transform: `${index > i ? `translateX(calc(100% + ${(index-i) * (smallerSize/2 + gapSize)}px))` : `translateX(${(index-i) * (smallerSize/2 + gapSize) }px)`}`}}
          onClick={() => setIndex(i)}
          >

          </div>
        ))}
      </div>
    </div>
  )
}
