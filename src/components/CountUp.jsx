import { useEffect } from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer";

export const CountUp = ({start=0, end, duration=3000, increment, delay, prefix="", suffix="", isInt=true, className=""}) => {
  
  const [value, setValue] = useState(start)
  const [intervalID, setIntervalID] = useState(null)
  const { ref, inView } = useInView();

  const _increment = increment || (end - start) / duration
  const _delay = delay || duration / (end - start)

  useEffect(() => {
    if (inView) {
      const counter = setInterval(() => {
        setValue(prevValue => {
          const nextValue = prevValue + _increment
          if (nextValue > end) {
            clearInterval(counter)
            return end
          }
          return isInt ? Math.floor(nextValue) : nextValue
        })
      }, _delay)

      setIntervalID(counter)
    }
    else {
      setValue(start)
      clearInterval(intervalID)
      setIntervalID(null)
    }
  }, [inView])
  
  return (
    <p className={className} ref={ref}>
      {`${prefix}${value}${suffix}`}
    </p>
  )
}
