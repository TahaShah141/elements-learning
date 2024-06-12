import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const SlidingDiv = ({children, direction, px=10}) => {

  const [x, y] = [
    (direction === "left" ? -px : direction === "right" ? px : 0),
    (direction === "top" ? -px : direction === "bottom" ? px : 0),
  ] 

  const { ref, inView } = useInView({
    threshold: 0.5
  }) 

  return (
    <motion.div
      ref={ref}
      initial={{x, y, opacity: 0}}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  )
}
