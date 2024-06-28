
export const ContentCard = ({headers, color, content}) => {
  return (
    <div className="flex flex-1 flex-col rounded-tl-xl rounded-[40px] overflow-hidden bg-[#F3EEE8]">
      <div className="flex flex-col text-white font-bold p-12 pb-8 rounded-[40px] rounded-tl-xl rounded-bl-[70px]" style={{backgroundColor: color}}>
        <p className="text-6xl">{headers[0]}</p>
        <p className="text-4xl">{headers[1]}</p>
      </div>
      <div className="p-8 flex flex-col gap-2 text-sm">
        {content instanceof Array ? 
        <>
          {content.map((point, i) => 
            <div className="flex gap-4 items-start p-2 border-b" style={{borderBottomColor: i !== content.length - 1 ? color : "transparent"}}>
              <svg className="size-6" style={{color: color}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" fill="currentColor" /></svg>
              <p className="flex-1">{point}</p>
            </div>
          )}
        </> :
        <>{content}</>
        }
      </div>
    </div>
  )
}
