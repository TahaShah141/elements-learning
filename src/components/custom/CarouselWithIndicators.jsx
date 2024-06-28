import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useEffect, useState } from "react"

export const CarouselWithIndicators = ({itemClassName, contentClassName, indicatorClassName="", items}) => {
  
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const count = items.length

  useEffect(() => {

    if (!api) return;

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])
  
  return (
    <div className="w-full flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        >
        <CarouselContent className={contentClassName}>
          {items.map((item, i) => 
          <CarouselItem key={i} className={itemClassName}>
            {item}
          </CarouselItem>)}
        </CarouselContent>
        <div className="">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      {count !== 1 && <div className={`self-center justify-self-center flex gap-2 ${indicatorClassName}`}>
        {[...Array(count)].map((_, i) => <div key={i} className={`w-1 h-1 sm:h-2 sm:w-2 rounded-full bg-primary ${current === i ? "opacity-100" : "opacity-30"}`}></div>)}
      </div>}
    </div>
  )
}