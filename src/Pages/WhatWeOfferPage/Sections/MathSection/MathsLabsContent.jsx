import { ContentCard } from "@/Pages/WhatWeOfferPage/Sections/ContentCard"
import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
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
    name: "Jhang Lab Setup",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/Jhang Training/compressed_DSC_2707.JPG",
    gallery: ["/media/Jhang Training/compressed_DSC_2878.JPG","/media/Jhang Training/compressed_DSC_2793.JPG","/media/Jhang Training/compressed_DSC_2758.JPG",]
  },
  {
    name: "Attock Lab Setup",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/Attock_Training/compressed_DSC_2960.jpg",
    gallery: ["/media/Attock_Training/compressed_DSC_2967.JPG","/media/Attock_Training/compressed_DSC_3014.jpg","/media/Attock_Training/compressed_DSC_3047.JPG"]
  },
  {
    name: "Attock Lab Setup",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/Gilgit_Training/compressed_DSC08433.JPG",
    gallery: ["/media/Gilgit_Training/compressed_DSC07950.JPG","/media/Gilgit_Training/compressed_DSC08492.JPG","/media/Gilgit_Training/compressed_DSC08433.JPG",]
  },
  {
    name: "Attock Lab Setup",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/Jhang Training/compressed_DSC_2758.JPG",
    gallery: ["/media/Jhang Training/compressed_DSC_2878.JPG","/media/Jhang Training/compressed_DSC_2793.JPG","/media/Jhang Training/compressed_DSC_2707.JPG",]
  },
  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/Gilgit_Training/compressed_DSC07950.JPG",
    gallery: ["/media/Gilgit_Training/compressed_DSC08491.JPG","/media/Gilgit_Training/compressed_DSC08492.JPG","/media/Gilgit_Training/compressed_DSC08433.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/NCLS_winter_camp/compressed_DSC_4574.JPG",
    gallery: ["/media/NCLS_winter_camp/compressed_DSC_4616.JPG","/media/NCLS_winter_camp/compressed_DSC_4574.JPG","/media/NCLS_winter_camp/compressed_DSC_5040.jpg",]
  },
]

export const MathsLabsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>The Elements Learning (EL) Math Lab is a transformative educational environment designed to make mathematics engaging and accessible for students of all ages. Our Math Labs are meticulously designed to provide a comprehensive, hands-on learning experience primarily focused on concrete manipulatives, using the CPA (Concrete-Pictorial-Abstract) Methodology.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={events} />
        </section>
        <CustomAccordion containerClass={"w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"} type="multiple"
        items={[
          {
            title: "Packages",
            id: "Packages",
            content: 
            
            <div className="flex flex-col gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
              <p className="text-base md:text-lg xl:text-xl">We offer three packages in our Maths Labs. Each package is tailored to meet the diverse needs of schools and educators.</p>    
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                {packages.map(pkg => <ContentCard {...pkg} />)}
              </div>
            </div>

          },
          {
            title: "Lab Manuals",
            id: "Lab Manuals",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                  <img src="/media/IMG-20240401-WA0010.jpg" alt="" className="h-full" />
                </div>
                <div className="flex-[3_0_0] flex flex-col  p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base xl:text-lg">
                  <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Our Math Lab Manuals serve as invaluable teacher's guides, meticulously designed to help educators utilize the tools and manipulatives included in our Math Lab packages.</h3>
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
