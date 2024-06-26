export const Bullet = ({color="#000000"}) => {
  return (
    <div className="aspect-square w-fit rounded-full p-2" style={{backgroundColor: color}}>
      <div className="bg-white rounded-full w-full aspect-square p-2">
        <div className="aspect-square rounded-full bullet-shadow w-6 min-[950px]:w-8 min-[1200px]:w-10" style={{backgroundColor: color}}></div>
      </div>
    </div>
  )
}
