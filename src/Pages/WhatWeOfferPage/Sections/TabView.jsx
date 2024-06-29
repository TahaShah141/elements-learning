import { useState } from "react"

const TabHeader = ({tab, isOpen, onClick}) => {
  return (
    <div onClick={onClick} className={`size-72 shadow-lg p-6 flex flex-col gap-2 justify-end transition-all duration-300 ${isOpen ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}>
      <div className="h-3/5">
        <img src={tab.src} alt="" className="h-full"/>
      </div>
      <h3 className="font-bold text-3xl">{tab.name}</h3>
    </div>
  )
}

export const TabView = ({name, color, src, tabs}) => {

  const [opened, setOpened] = useState(tabs[0])

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8 px-16 gap-12" style={{backgroundColor: color}}>
        <div className="flex w-full justify-between px-4 py-2 items-center border-b-2 border-light-black">
          <h1 className="font-bold text-8xl">{name}</h1>
          <img src={src} alt="" className="h-full"/>
        </div>

        <div className="flex gap-4 justify-center">
          {tabs.map(tab => <TabHeader tab={tab} onClick={() => setOpened(tab)} isOpen={opened.name === tab.name} />)}
        </div>
      </div>
      {opened.content}
    </div>
  )
}
