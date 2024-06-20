import Carousel from "../../components/Carousel"
import { Footer } from "../../components/Footer"
import { SlidingDiv } from "../../components/SlidingDiv"
import { Hero } from "./Hero"
import { PuzzlePieces } from "./PuzzlePieces"
import { Stats } from "./Stats"
import { EventCard } from "./EventCard"
import { Pillars } from "./Pillars"
import { WhatWeOffer } from "./WhatWeOffer"
import { Testimonials } from "./Testimonials"



export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="bg-[#F3EEE8] w-full flex justify-center gap-24">
        <Hero />
      </section>

      <section className="h-screen flex flex-col justify-center items-center">
      </section>

      <section className="w-full bg-[#F3EEE8]">
        <PuzzlePieces />
      </section>

      
      <section className="flex container p-20 gap-16 flex-col justify-center">
        <Pillars />
      </section>

      <section className="bg-[#F3EEE8] p-20 w-full" >
        <WhatWeOffer />
      </section>

      {/* Video Section */}
      <section className="flex gap-8 px-48 py-10 items-center">
        <SlidingDiv direction="left" px={50} className="h-48 aspect-video bg-neutral-200 rounded-lg"></SlidingDiv>
        <SlidingDiv direction="right" px={50}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur alias optio maxime eveniet, officia ipsum! Optio cum sequi, ipsam quo est debitis enim officia, doloribus non dignissimos iusto fuga commodi error obcaecati quidem consectetur dolores dolor ad aliquam amet cumque maxime. Minima beatae possimus veniam optio a ullam quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor facilis, porro illo harum deleniti provident voluptas magni praesentium distinctio? Explicabo, quas ab! Praesentium, sint.</p>
        </SlidingDiv>
      </section>

      <section className="bg-[#F3EEE8] w-full gap-16 p-10 px-44 flex justify-around">
        <Stats />
      </section>

      {/* Divider */}
      <section className="w-full p-2">

      </section>

      {/* Events Carousel */}
      <section className="bg-[#F3EEE8] w-full flex justify-center">
        <div className="container p-20 flex justify-center">
          <Carousel items={Array.from(Array(5)).map((_, i) =>
            <EventCard title={"Test Event "+(i+1)} date={"12-06-2024"}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit officia aut odit voluptas ullam omnis eveniet ipsa sequi recusandae perspiciatis culpa necessitatibus laudantium reprehenderit quo ab neque quaerat tempore ut vero error, voluptatibus ipsam itaque. Officia unde cumque dolorum quo nesciunt omnis asperiores, perferendis nulla soluta. Molestiae commodi perspiciatis sit saepe omnis porro mollitia natus, illo aliquid fuga reiciendis velit explicabo quam accusamus enim animi. Iusto quod, ipsam aut illum reprehenderit nam nulla sequi aperiam eligendi voluptatibus fugit magnam ut, totam architecto praesentium tempore, doloremque nisi at cupiditate ratione consequuntur natus. Nesciunt iusto illum cumque odit molestias expedita dolorem."} />
            )} />
        </div>
      </section>

      <section className="w-full p-20 flex justify-center gap-12">
        <Testimonials />
      </section>

      <Footer />
    </div>
  )
}