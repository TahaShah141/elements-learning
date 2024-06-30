import { FadeIn } from "@/components/FadeIn"
import { MultiCarousel } from "@/components/custom/MultiCarousel"

const events = [
  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/media/DSC_0628.JPG"
  },
  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/DSC_2991.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/DSC_4180.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/DSC08492.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/DSC_2953.JPG"
  },

  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/media/DSC_0628.JPG"
  },
  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/DSC_2991.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/DSC_4180.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/DSC08492.JPG"
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/DSC_2953.JPG"
  },
  
]

export const TrainingsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>At Elements Learning, we believe that the changing face of mathematics demands a fresh approach to teaching, one that embraces innovation and fosters critical thinking skills in the mathematicians of tomorrow.</p>
          <p>Our comprehensive teacher's training program is the cornerstone of this evolution, aimed at upskilling Elementary and Middle School Mathematics Teachers.</p>
        </div>
        <section className="p-16 sm:p-8 lg:p-12  bg-[#F3EEE8]">
        </section>
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>Through extensive face-to-face trainings with esteemed organizations and schools, such as APS, Froebels International Schools, Silver Oaks School System, FDE, FGE, NCLS, and many more to come, we ensure that teachers receive immersive learning experiences, preparing them to excel in the ever-evolving landscape of education.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={events} />
        </section>
               
      </div>
    </FadeIn>
  )
}
