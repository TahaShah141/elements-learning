import { motion } from 'framer-motion';

export const PuzzlePiece = ({letter, header, meaning, color, showTab, content, reverseOrder, order}) => {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className="relative flipping-card-parent group text-white flex-1 h-full" style={{backgroundColor: color, zIndex: order}}>
      {showTab && <div className="absolute size-4 xs:size-6 sm:size-8 md:size-10 lg:size-14 xl:size-16 rounded-sm bg-white right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: color}}/>}
      <div className='w-full h-full flipping-card group text-[8px] sm:text-sm md:text-base lg:text-xl xl:text-3xl'>
        <div className='size-full min-[400px]:group-hover:hidden flex flex-col justify-center items-center gap-px md:gap-1 lg:gap-2'>
          <p className="font-bold text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl">{letter}</p>
          <div className={`flex ${reverseOrder ? "flex-col-reverse" : "flex-col"} min-w-[60%]`}>
            <p className="uppercase text-center sm:tracking-wider md:tracking-widest lg:tracking-[0.2em]">{header}</p>
            <p className="flex justify-center items-center gap-1 w-full text-xs lg:text-sm xl:text-base">
              <span className="flex-1 hidden lg:block h-0 border border-white "/>
                {meaning}
              <span className="flex-1 hidden lg:block h-0 border border-white "/>
            </p>
          </div>
        </div>
        <div className='size-full min-[400px]:group-hover:flex flipped-content-anti hidden flex-col justify-center items-center gap-2 leading-none text-[8px] md:text-[11px] lg:text-sm xl:text-lg px-5 drop-shadow-xl'>
          {content}
        </div>
      </div>
    </motion.div>
  )
}
