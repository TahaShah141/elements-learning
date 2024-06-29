import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { ContentCard } from "../ContentCard"
import { MultiCarousel } from "@/components/custom/MultiCarousel"

const packages = [
  {
    headers: ["Basic", "Maths Lab"],
    color: "#75BF46",
    content: [
      "Perfect for schools new to hands-on math learning.",
      "Includes five fundamental tools and manipulatives.",
      "Designed to cover key math concepts.",
      "Initiates interactive math learning.",
      "Improves understanding through concrete and pictorial representations.",

    ]
  },
  {
    headers: ["Standard", "Maths Lab"],
    color: "#02AEEE",
    content: [
      "Builds on the Basic package.",
      "Offers a wider range of tools and resources.",
      "Includes all items in the Basic package.",
      "Additional manipulatives and activities for complex math topics.",
      "Supports a more comprehensive math curriculum.",

    ]
  },
  {
    headers: ["Premium", "Maths Lab"],
    color: "#6C3694",
    content: [
      "Ideal for schools aiming to provide an enriched math learning experience.",
      "Includes everything in the Standard package.",
      "Premium tools, technology integration, and advanced activity tools.",
      "Furniture designed around math learning.",

    ]
  },
]

const events = [
  {
    name: "Fraction Board",
    text: "The fraction board provides ",
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "#"
  },
  {
    name: "Base-10 Blocks",
    text: " Understand numbers better by using blocks for",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "#"
  },
  {
    name: "Tangram",
    text: "The Tangram, an ancient Chinese puzzle Involves seven tans,",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "#"
  },
  {
    name: "Geoboard",
    text: "A geoboard is a board with",
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "#"
  },
  {
    name: "Circular Geoboard",
    text: "A circular geoboard consists of 12",
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "#"
  },
]

export const TrainingsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl p-10 px-32">
          <p>At Elements Learning, we believe that the changing face of mathematics demands a fresh approach to teaching, one that embraces innovation and fosters critical thinking skills in the mathematicians of tomorrow.</p>
          <p>Our comprehensive teacher's training program is the cornerstone of this evolution, aimed at upskilling Elementary and Middle School Mathematics Teachers.</p>
        </div>
        <section className="p-16 bg-[#F3EEE8]">
        </section>
        <div className="flex flex-col gap-4 text-xl p-10 px-32">
          <p>Through extensive face-to-face trainings with esteemed organizations and schools, such as APS, Froebels International Schools, Silver Oaks School System, FDE, FGE, NCLS, and many more to come, we ensure that teachers receive immersive learning experiences, preparing them to excel in the ever-evolving landscape of education.</p>
        </div>
        <section className="p-16 bg-[#F3EEE8]">
          <MultiCarousel items={events} />
        </section>
               
      </div>
    </FadeIn>
  )
}
