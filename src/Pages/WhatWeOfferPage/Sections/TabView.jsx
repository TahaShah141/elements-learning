import { Footer } from "@/Pages/Footer/Footer"
import { useEffect, useState } from "react"
import { Link, Navigate, useLocation, useSearchParams } from "react-router-dom"

const TabHeader = ({tab, isOpen, newLink}) => {
  return (
    <Link to={newLink} className={`xs:h-16 sm:h-24 md:h-32 flex-1 lg:h-40 xl:h-48 shadow-lg p-3 xs:p-4 lg:p-6 flex flex-col gap-2 items-center sm:items-start justify-center sm:justify-end transition-all duration-300 ${isOpen ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}>
      <div className="hidden sm:flex h-3/5">
        <img src={tab.src} alt="" className="h-full"/>
      </div>
      <h3 className="font-bold text-nowrap xs:text-xs sm:text-sm min-[800px]:text-base lg:text-lg xl:text-2xl">{tab.name}</h3>
    </Link>
  )
}

export const TabView = ({name, color, src, tabs=[], content=<></>}) => {

  const [searchParams, setSearchParams] = useSearchParams()
  const { pathname } = useLocation()
  const currentTab = searchParams.get("tab")
  const [opened, setOpened] = useState(currentTab || tabs[0]?.tabName)
  
  useEffect(() => {
    const currentTab = searchParams.get("tab")
    setOpened(currentTab || tabs[0]?.tabName)

    if (currentTab === null) setSearchParams({tab: tabs[0]?.tabName})
  }, [searchParams, tabs])
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-4 md:p-8 lg:px-16 gap-6 lg:gap-12" style={{backgroundColor: color}}>
        <div className="flex w-full justify-between px-4 py-2 items-center border-b-2 border-light-black">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">{name}</h1>
          <img src={src} alt="" className="h-24 sm:h-32 lg:h-48"/>
        </div>
        {tabs.length !== 0 &&
        <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
            {tabs.map(tab => <TabHeader tab={tab} newLink={`${pathname}?tab=${tab.tabName}`} isOpen={opened === tab.tabName} />)}
        </div>}
      </div>
      {tabs.length !== 0 ? 
      <>
        {tabs.find(tab => opened === tab.tabName)?.content}
      </>
      : content}
      <Footer />
    </div>
  )
}
