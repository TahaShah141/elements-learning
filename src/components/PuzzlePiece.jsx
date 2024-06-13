
export const PuzzlePiece = ({letter, header, meaning, color, showTab, reverseOrder}) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 text-white flex-1 h-full" style={{backgroundColor: color}}>
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
    </div>
  )
}
