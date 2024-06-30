import { MultiCarousel } from "@/components/custom/MultiCarousel"
import { Footer } from "../../components/Footer"
import { SlidingDiv } from "../../components/SlidingDiv"
import { Hero } from "./Hero"
import { OurJourneyMobile } from "./OurJourney/OurJourneyMobile"
import { OurJourneySection } from "./OurJourney/OurJourneySection"
import { Pillars } from "./Pillars"
import { PuzzlePieces } from "./PuzzlePieces"
import { Stats } from "./Stats"
import { Testimonials } from "./Testimonials"
import { WhatWeOffer } from "./WhatWeOffer"

const events = [
  {
    name: "Lahore Science Mela",
    secondaries: ["Date: 12/12/2022", "Place: Lahore"],
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/media/compressed-DSC_1434.jpg"
  },
  {
    name: "AJK Training",
    secondaries: ["Date: 04/03/2022", "Place: Azad Jammu Kashmir"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/compressed-DSC_1512.jpg"
  },
  {
    name: "Lahore Science Mela",
    secondaries: ["Date: 12/12/2022", "Place: Lahore"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/compressed-DSC_1638.jpg"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 06/02/2023", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/compressed-DSC_1410.jpg"
  },
  {
    name: "Lahore Science Mela",
    secondaries: ["Date: 12/12/2022", "Place: Lahore"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/compressed-DSC_1599.jpg"
  },
]

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center">
      <section className="bg-[#F3EEE8] w-full justify-between flex md:px-10 xl:px-20">
        <Hero />
      </section>

      <section className="w-full py-12">
        <SlidingDiv direction={"right"} px={75}>
          <h3 className="px-4 text-3xl min-[900px]:text-5xl min-[900px]:text-center font-bold uppercase">Our Journey</h3>
        </SlidingDiv>
        <OurJourneySection />
        <OurJourneyMobile />
      </section>

      <section className="w-full bg-[#F3EEE8]">
        <PuzzlePieces />
      </section>

      
      <section className="flex p-4 xs:p-10 sm:p-20 gap-12 md:gap-16 flex-col justify-center">
        <Pillars />
      </section>

      <section className="bg-[#F3EEE8] p-8 sm:p-10 lg:p-20 w-full" >
        <WhatWeOffer />
      </section> 

      {/* Video Section */}
       <section className="flex gap-2 md:gap-8 lg:px-32 xl:px-40 md:p-10 p-4 xs:p-6 items-center flex-col md:flex-row">
        <SlidingDiv direction="left" px={50} className="w-full md:w-auto md:h-48 aspect-video bg-neutral-200 rounded-lg"></SlidingDiv>
        <SlidingDiv direction="right" px={50}>
          <p className="text-xs xs:text-sm sm:text-base">Welcome to Elements Learning (EL) Where we' reshaping K-12 education from the ground up.Welcome to Elements Learning (EL) Where we' reshaping K-12 education from the ground up.Welcome to Elements Learning (EL) Where we' reshaping K-12 education from the ground up.Welcome to Elements Learning (EL) Where we' reshaping K-12 education from the ground up.</p>
        </SlidingDiv>
      </section> 

      <section className="bg-[#F3EEE8] w-full grid grid-cols-2 gap-8 p-8 sm:flex xs:p-12 md:px-32 lg:px-48 md:gap-9 lg:gap-16 justify-between">
        <Stats />
      </section>

      {/* Divider */}
      <section className="w-full p-2">

      </section>

      <section className="bg-[#F3EEE8] w-full p-4 sm:p-8 lg:p-12">
        <MultiCarousel items={events} />
      </section>

      <section className="w-full p-6 sm:p-10 flex flex-col justify-center xs:items-start min-[550px]:flex-row min-[550px]:items-center sm:gap-8 gap-4">
        <Testimonials />
      </section>

      <Footer />
    </div>
  )
}
