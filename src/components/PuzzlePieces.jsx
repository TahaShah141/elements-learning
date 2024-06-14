import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const puzzles = [
  {
    letter: "T",
    header: "Transfer",
    meaning: "knowledge",
    color: "#E03697"
  },
  {
    letter: "S",
    header: "Storytelling",
    meaning: "immersive",
    color: "#6C3A94"
  },
  {
    letter: "R",
    header: "Reflective",
    meaning: "practice",
    color: "#75BF44"
  },
  {
    letter: "Q",
    header: "Questioning",
    meaning: "thoughtful",
    color: "#02AEEE"
  },
  {
    letter: "P",
    header: "Playful",
    meaning: "exploration",
    color: "#FBBA42"
  },
]

const PuzzlePiece = ({letter, header, meaning, color, showTab, reverseOrder}) => {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 80 },
        duration: 0.3
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className="relative flex flex-col justify-center items-center gap-2 text-white flex-1 h-full" style={{backgroundColor: color}}>
      {showTab && <div className="absolute size-20 rounded-tr-lg bg-white right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: color}}/>}
      <p className="font-bold text-7xl">{letter}</p>
      <div className={`flex ${reverseOrder ? "flex-col-reverse" : "flex-col"}`}>
        <p className="text-2xl uppercase tracking-widest">{header}</p>
        <p className="flex items-center gap-1">
          <span className="flex-1 border border-white "/>
            {meaning}
          <span className="flex-1 border border-white "/>
        </p>
      </div>
    </motion.div>
  )
}

export const PuzzlePieces = () => {

  const containerVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  return (
    <motion.div
    ref={ref}
    className='flex flex-row-reverse h-80'
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={containerVariants}
    >
    {puzzles.map((puzzle, i) => 
      <PuzzlePiece reverseOrder={i % 2 === 1} showTab={i !== 0} {...puzzle} />
    )}
    </motion.div>
  )
}
