import { useEffect, useState } from "react"

export const CarouselSingle = ({containerClass, items, nextButton, prevButton, autoScroll=true, delay=3000}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState()
  const [paused, setPaused] = useState(false)

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
    <div className="size-full" 
    onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    style={{position: "relative"}}>
      <div className={containerClass} style={{overflow: "hidden", position: "relative"}}>
        {items.map((item, i) => 
          <div className="absolute inset-0 transition-all duration-300" style={{transform: `translateX(${(i-index)*100}%)`}}>
            {item}
          </div>
        )}
      </div>
      <button onClick={() => setIndex((index+1)%items.length)} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-black p-2">
        {nextButton}
      </button>      
      <button onClick={() => setIndex((index-1) < 0 ? items.length-1 : (index-1)%items.length)} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 size-fit p-2">
        {prevButton}
      </button>
      
    </div>
  )
}
