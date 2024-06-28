import { Footer } from "@/components/Footer"
import { StaggeredHeaders } from "@/components/StaggeredHeaders"
import { NavLink } from "react-router-dom"

export const WhatWeOfferPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center ">
        <StaggeredHeaders headers={["What We", "Offer?"]} containerClass="text-2xl hidden min-[400px]:flex flex-col min-[400px]:text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <StaggeredHeaders headers={["What We Offer?"]} containerClass="min-[400px]:hidden text-3xl font-bold" direction="left" />
        <div className="max-w-[400px] sm:max-w-[600px]">
          <img src="/whatweofferpage/whatweoffer.png" alt="" />
        </div>
      </section>
      <section className="w-full flex gap-2 p-6 flex-wrap">
        <NavLink to="/services/ece" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>ECE</NavLink>
        <NavLink to="/services/maths" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Maths</NavLink>
        <NavLink to="/services/language" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Language</NavLink>
        <NavLink to="/services/socialsciences" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Social Science</NavLink>
        <NavLink to="/services/science" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Science</NavLink>
        <NavLink to="/services/steam" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>STEAM</NavLink>
        <NavLink to="/services/edtech" className={`text-xl transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Ed Tech</NavLink>
      </section>
      <Footer />
    </div>
  )
}
