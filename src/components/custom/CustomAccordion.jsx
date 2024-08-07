import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { HexagonPlayButton } from "../HexagonPlayButton"

export const CustomAccordion = ({containerClass, items, type="single", changeHeaders=false}) => {

  const [opened, setOpened] = useState("")

  return (
    <Accordion onValueChange={(value) => setOpened(value)} className={containerClass} type={type} collapsible>
      {items.map(item => 
        <AccordionItem value={item.id}>
          <AccordionTrigger className={`p-1 rounded-full hover:no-underline rounded-br-none font-bold text-xs xs:text-base sm:text-xl md:text-2xl lg:text-xl flex items-center gap-2 group transition-colors ${item.id !== opened && changeHeaders ? "bg-transparent delay-0 duration-0" : item.disabled ? "bg-gray-300 text-gray-600" : "bg-[#FBBA41] duration-200"}`}>
            <div className="size-6 xs:size-8 sm:size-12 xl:size-16 relative">
              {!(item.id === opened || (opened instanceof Array && opened.filter(id => item.id === id).length !== 0)) ? 
              <>
              {changeHeaders ? 
              <>
              <div className="absolute inset-0 transition-opacity duration-200 size-full opacity-100 group-hover:opacity-0">
                <HexagonPlayButton outerColor={item.disabled ? "#aaa" : "#FCBA42"} innerColor={"#FFFFFF"} />
              </div>
              <div className="absolute inset-0 transition-opacity duration-500 size-full opacity-0 group-hover:opacity-100">
                <HexagonPlayButton outerColor="#FFFFFF" innerColor="#000000" />
              </div>
              </>:
              <div className="absolute inset-0 transition-opacity duration-200 size-full group-hover:rotate-90">
                <HexagonPlayButton outerColor={"#FFFFFF"} innerColor={"#000000"} />
              </div>
              }
              </>:
              <div className="size-full rotate-90">
                <HexagonPlayButton innerColor="#000000" outerColor="#FFFFFF" />
              </div>}
            </div>
            <p className="flex-1 text-left">{item.title}</p>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  )
}
