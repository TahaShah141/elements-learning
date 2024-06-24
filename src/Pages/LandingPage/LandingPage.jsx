import Carousel from "../../components/Carousel"
import { Footer } from "../../components/Footer"
import { SlidingDiv } from "../../components/SlidingDiv"
import { EventCard } from "./EventCard"
import { Hero } from "./Hero"
import { OurJourneySection } from "./OurJourney/OurJourneySection"
import { Pillars } from "./Pillars"
import { PuzzlePieces } from "./PuzzlePieces"
import { Stats } from "./Stats"
import { Testimonials } from "./Testimonials"
import { WhatWeOffer } from "./WhatWeOffer"


export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="bg-[#F3EEE8] w-full flex justify-center gap-24">
        <Hero />
      </section>

      <section className="flex flex-col w-full gap-4 py-10 px-20">
        <OurJourneySection />
      </section>

      <section className="w-full bg-[#F3EEE8] min-[300px]:block hidden">
        <PuzzlePieces />
      </section>

      
      <section className="flex container p-20 gap-16 flex-col justify-center">
        <Pillars />
      </section>

      <section className="bg-[#F3EEE8] p-8 sm:p-12 lg:p-20 lg:px-32 xl:px-40 w-full" >
        <WhatWeOffer />
      </section> 

      {/* Video Section */}
       <section className="flex gap-2 md:gap-8 lg:px-32 xl:px-40 md:p-10 p-4 xs:p-6 items-center flex-col md:flex-row">
        <SlidingDiv direction="left" px={50} className="w-full md:w-auto md:h-48 aspect-video bg-neutral-200 rounded-lg"></SlidingDiv>
        <SlidingDiv direction="right" px={50}>
          <p className="text-xs xs:text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur alias optio maxime eveniet, officia ipsum! Optio cum sequi, ipsam quo est debitis enim officia, doloribus non dignissimos iusto fuga commodi error obcaecati quidem consectetur dolores dolor ad aliquam amet cumque maxime. Minima beatae possimus veniam optio a ullam quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor facilis, porro illo harum deleniti provident voluptas magni praesentium distinctio? Explicabo, quas ab! Praesentium, sint.</p>
        </SlidingDiv>
      </section> 

      <section className="bg-[#F3EEE8] w-full grid grid-cols-2 gap-8 p-8 sm:flex xs:p-12 md:px-32 lg:px-48 md:gap-9 lg:gap-16 justify-between">
        <Stats />
      </section>

      {/* Divider */}
      <section className="w-full p-2">

      </section>

      {/* Events Carousel */}
      {/* <section className="bg-[#F3EEE8] w-full flex justify-center">
        <div className="container p-20 flex justify-center">
          <Carousel items={Array.from(Array(5)).map((_, i) =>
            <EventCard title={"Test Event "+(i+1)} date={"12-06-2024"}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit officia aut odit voluptas ullam omnis eveniet ipsa sequi recusandae perspiciatis culpa necessitatibus laudantium reprehenderit quo ab neque quaerat tempore ut vero error, voluptatibus ipsam itaque. Officia unde cumque dolorum quo nesciunt omnis asperiores, perferendis nulla soluta. Molestiae commodi perspiciatis sit saepe omnis porro mollitia natus, illo aliquid fuga reiciendis velit explicabo quam accusamus enim animi. Iusto quod, ipsam aut illum reprehenderit nam nulla sequi aperiam eligendi voluptatibus fugit magnam ut, totam architecto praesentium tempore, doloremque nisi at cupiditate ratione consequuntur natus. Nesciunt iusto illum cumque odit molestias expedita dolorem."} />
            )} />
        </div>
      </section> */}

      <section className="w-full p-6 sm:p-10 flex flex-col justify-center xs:items-start min-[550px]:flex-row min-[550px]:items-center sm:gap-8 gap-4">
        <Testimonials />
      </section>

      <Footer />
    </div>
  )
}
