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

export const MathsLabsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl p-10 px-32">
          <p>The Elements Learning (EL) Math Lab is a transformative educational environment designed to make mathematics engaging and accessible for students of all ages. Our Math Labs are meticulously designed to provide a comprehensive, hands-on learning experience primarily focused on concrete manipulatives, using the CPA (Concrete-Pictorial-Abstract) Methodology.</p>
        </div>
        <section className="p-16 bg-[#F3EEE8]">
          <MultiCarousel items={events} />
        </section>
        <CustomAccordion containerClass={"w-full p-10 px-32"} type="multiple"
        items={[
          {
            title: "Packages",
            id: "Packages",
            content: 
            
            <div className="flex flex-col gap-4 p-8">
              <p className="px-10 text-xl">We offer three packages in our Maths Labs. Each package is tailored to meet the diverse needs of schools and educators.</p>    
              <div className="flex gap-6">
                {packages.map(pkg => <ContentCard {...pkg} />)}
              </div>
            </div>

          },
          {
            title: "Lab Manuals",
            id: "Lab Manuals",
            content: 
            <div className="p-8">
              <div className="flex gap-2">
                <div className="flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                </div>
                <div className="flex-[3_0_0] flex flex-col px-8 gap-8 text-base md:text-xl">
                  <h3 className="text-5xl">Our Math Lab Manuals serve as invaluable teacher's guides, meticulously designed to help educators utilize the tools and manipulatives included in our Math Lab packages.</h3>
                  <p>These manuals are crafted to provide clear, step-by-step instructions on teaching specific math concepts through hands-on activities, ensuring that both teachers and students get the most out of their math learning experience.</p>
                  <p>Each Math Lab Manual is grade-specific and aligned with the National Curriculum (NC) to fulfill defined SLO’s.</p>
                </div>
              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
  )
}
