export const Jahaaz = ({innerColor="#D89000", OuterColor="#FCB500"}) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 3,3 24,3.5" fill={OuterColor} stroke="white" stroke-width="0.1"/>
        <polygon points="3,9 3,3 24,3.5" fill={innerColor} stroke="white" stroke-width="0.1"/>
        <polygon points="4,6 3,9 24,3.5" fill={OuterColor} stroke="white" stroke-width="0.1"/>
        <polygon points="4,6 8.5,12 24,3.5" fill={OuterColor} stroke="white" stroke-width="0.1"/>
      </svg>
    </div>
  )
}
