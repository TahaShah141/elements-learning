import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const SlidingDiv = ({children, direction, className="", repeat=false, style={}, delay=0, px=10, threshold=0.5}) => {

  const [x, y] = [
    (direction === "left" ? -px : direction === "right" ? px : 0),
    (direction === "top" ? -px : direction === "bottom" ? px : 0),
  ] 

  const { ref, inView } = useInView({
    triggerOnce: !repeat,
    threshold: threshold
  }) 

  return (
    <motion.div
      ref={ref} className={className}
      style={style}
      initial={{x, y, opacity: 0}}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}

    >
      {children}
    </motion.div>
  )
}
