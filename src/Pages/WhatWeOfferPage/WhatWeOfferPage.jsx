import { Footer } from "@/Pages/Footer/Footer"
import { StaggeredHeaders } from "@/components/StaggeredHeaders"
import { services } from "@/constants/WhatWeOffer/services"
import { useScrollToTop } from "@/lib/useScrollToTop"
import { NavLink } from "react-router-dom"

export const WhatWeOfferPage = () => {

  useScrollToTop()

  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center ">
        <StaggeredHeaders headers={["What We", "Offer?"]} containerClass="text-2xl hidden min-[400px]:flex flex-col min-[400px]:text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <StaggeredHeaders headers={["What We Offer?"]} containerClass="min-[400px]:hidden text-3xl font-bold" direction="left" />
        <div className="max-w-[400px] sm:max-w-[600px]">
          <img src="/whatweofferpage/whatweoffer.png" alt="" />
        </div>
      </section>
      <section className="w-full flex justify-center flex-wrap gap-4 p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20">
        {services.map( service => (
          <NavLink to={service.disabled ? "" : service.link} className="rounded-3xl flex flex-col gap-2 justify-center items-center w-96 p-8 sm:w-40 sm:p-4 lg:w-64 lg:p-8 xl:w-96" style={{backgroundColor: service.disabled ? "#00000020" : service.color}}>
            <img src={service.illustrationSrc} alt={service.alt} className="w-full"/>
            <p className="font-bold text-xl sm:text-xs md:text-base lg:text-xl text-center">{service.title}</p>
          </NavLink>
        ))}
      </section>
      <Footer />
    </div>
  )
}
