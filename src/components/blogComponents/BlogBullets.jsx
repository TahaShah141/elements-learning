import { BlogParagraph } from "./BlogParagraph"
import { useEffect, useState } from "react"

export const BlogBullets = ({header, headerClass="", points, indented=false, headerSize, size="BASE", style="DOTS"}) => {

  const [alignment, setAlignment] = useState("items-center")
  useEffect(() => {
    if (style === "CIRCLE" || style === "DOTS") {
      setAlignment("items-start")
    }
    else if (style === "NUMBER" || style === "LETTER") {
      setAlignment("items-start")
    }
  }, [style])

  const Marker = ({i}) => {
    if (style === "DOTS") {
      return (
        <div className="bg-light-black p-0.5 mt-2 rounded-full">
          <div className="bg-light-black rounded-full size-1 md:size-2" />
        </div>
      )
    } 
    else if (style === "CIRCLE") {
      return (
        <div className="bg-light-black p-0.5 mt-2 rounded-full">
          <div className="bg-white rounded-full size-1 md:size-2" />
        </div>
      )
    } else if (style === "NUMBER") {
      return (
        <BlogParagraph className="font-bold w-4 text-center" text={`${i+1}. `}/>
      )
    } else if (style === "LETTER") {
      return (
        <BlogParagraph className="font-bold w-4 text-center" text={`${String.fromCharCode(65+i)}. `} />
      )
    } else return <></>
  }

  return (
    <div className={`flex flex-col gap-1 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      {header && <BlogParagraph className={headerClass} size={headerSize || size} text={header} />}
      <div className="flex flex-col pl-2 xs:pl-4 md:pl-8 xl:pl-12 gap-1">
        {points.map((point, i) => (
          <div className={`flex gap-2 ${alignment}`}>
            <Marker i={i} />
            <BlogParagraph className="flex-1" size={size} text={point} />
          </div>
        ))}
      </div>
    </div>
  )
}
