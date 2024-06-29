import { Footer } from "@/components/Footer"
import { useState } from "react"

const TabHeader = ({tab, isOpen, onClick}) => {
  return (
    <div onClick={onClick} className={`xs:h-16 sm:h-24 md:h-32 flex-1 lg:h-44 xl:h-64 shadow-lg p-4 lg:p-6 flex flex-col gap-2 items-center justify-center sm:justify-end transition-all duration-300 ${isOpen ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}>
      <div className="hidden sm:flex h-3/5">
        <img src={tab.src} alt="" className="h-full"/>
      </div>
      <h3 className="font-bold xs:text-xs sm:text-sm min-[800px]:text-base lg:text-lg xl:text-2xl">{tab.name}</h3>
    </div>
  )
}

export const TabView = ({name, color, src, tabs}) => {

  const [opened, setOpened] = useState(tabs[0])

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-4 md:p-8 lg:px-16 gap-6 lg:gap-12" style={{backgroundColor: color}}>
        <div className="flex w-full justify-between px-4 py-2 items-center border-b-2 border-light-black">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">{name}</h1>
          <img src={src} alt="" className="h-24 sm:h-32 lg:h-48"/>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          {tabs.map(tab => <TabHeader tab={tab} onClick={() => setOpened(tab)} isOpen={opened.name === tab.name} />)}
        </div>
      </div>
      {opened.content}
      <Footer />
    </div>
  )
}
