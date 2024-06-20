export const Bullet = ({color="#000000", strokeWidth="10px"}) => {
  return (
    <div className="aspect-square rounded-full" style={{backgroundColor: color, padding: strokeWidth}}>
      <div className="bg-white rounded-full w-full aspect-square" style={{padding: strokeWidth}}>
        <div className="aspect-square rounded-full bullet-shadow" style={{backgroundColor: color, width: `calc(4*${strokeWidth})`}}></div>
      </div>
    </div>
  )
}
