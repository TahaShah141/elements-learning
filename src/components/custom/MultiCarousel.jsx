import { useEffect, useState } from "react"
import { CarouselSingle } from "./CarouselSingle"
import Carousel from "../Carousel"
import { HexagonPlayButton } from "../HexagonPlayButton"

export const MultiCarousel = ({items, autoScroll=true, delay=3000}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState()
  const [size, setSize] = useState(200)
  const [gapSize, setGapSize] = useState(5)
  const [paused, setPaused] = useState(false)

  const [opened, setOpened] = useState(false)
  const smallerSize = size * 0.75

  useEffect(() => {

    const resetSize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth >= 1280) {
        setSize(650)
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
    }

    window.addEventListener("resize", resetSize)
    resetSize()

    return () => window.removeEventListener("resize", resetSize)
  }, [])

  useEffect(() => {

    if (paused || !autoScroll || opened) {
      clearInterval(intervalID)
    } else {
      const id = setInterval(() => setIndex(i => (i+1)%items.length), delay)
      setIntervalID(id)
      return () => clearInterval(id)
    }

  }, [opened, paused, autoScroll])

  return (
    <>
    {opened && <div onClick={() => setOpened(false)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="size-4/5">
        <CarouselSingle containerClass={"size-full"} 
        items={Array.from({length: 10}, (_, i) => 
          <div className="size-full flex flex-col justify-center">
            <img src={items[index].src} alt="" className="w-full bg-neutral-400" />
          </div>
        )}
        nextButton={
          <div className="size-10 lg:size-16">
            <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
          </div>
        }
        prevButton={
          <div className="size-10 lg:size-16 rotate-180">
            <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
          </div>
        }
        delay={2000} />
      </div>
    </div>}
    <div className="relative w-full flex overflow-hidden justify-center items-center gap-8" 
    style={{height: size}}>
      <div className="absolute flex flex-col justify-between transition-all duration-500" 
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{backgroundColor: items[index].color, color: "#FFFFFF", width: size*0.9, height: size, paddingRight: 0, paddingLeft: size/15, paddingTop: size/6, paddingBottom: size/7, borderRadius: `${size/10}px ${size/10}px 0px ${size/10}px`}}>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-md">{items[index].name}</p>
        {items[index].secondaries && 
        <div className="hidden md:flex gap-2 md:flex-col md:gap-0 font-semibold text-xs md:text-sm lg:text-base xl:text-lg">
          {items[index].secondaries.map(text => 
            <p className="text-black">{text}</p>
          )}
        </div>}
      </div>
      <div className="relative z-10 h-[45%] sm:-translate-y-[8%]" style={{width: smallerSize}}>
        {items.map((item, i) => (
          <div className={`absolute transition-all duration-700 bottom-0 ${i === index ? "h-full w-full" : "h-2/3 w-2/3"}`} 
          style={{backgroundColor: item.innerColor, transform: `${index > i ? `translateX(calc(${100*1/2}% + ${(index-i) * (smallerSize*(2/3) + gapSize)}px))` : `translateX(${(index-i) * (smallerSize*(2/3) + gapSize) }px)`}`}}
          onClick={() => (i === index) ? setOpened(true) : setIndex(i)}
          >
            <img src={item.src} alt="" className="size-full shadow-lg" />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
