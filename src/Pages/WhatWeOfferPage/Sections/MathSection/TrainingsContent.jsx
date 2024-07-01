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
    src: "/media/Jhang Training/DSC_2707.JPG",
    gallery: ["/media/Jhang Training/DSC_2878.JPG","/media/Jhang Training/DSC_2793.JPG","/media/Jhang Training/DSC_2758.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/Gilgit_Training/DSC07950.JPG",
    gallery: ["/media/Gilgit_Training/DSC07851.JPG","/media/Gilgit_Training/DSC08492.JPG","/media/Gilgit_Training/DSC08433.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/Lahore_Science_Mela/DSC_1328.JPG",
    gallery: ["/media/Lahore_Science_Mela/DSC_1329.JPG","/media/Lahore_Science_Mela/DSC_1437.JPG","/media/Lahore_Science_Mela/DSC_1379.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/Attock_Training/DSC_2991.jpg",
    gallery: ["/media/Attock_Training/DSC_2960.jpg","/media/Attock_Training/DSC_3014.jpg","/media/Attock_Training/DSC_3030.jpg,"]
  },

  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/media/Lahore_Science_Mela/DSC_1417.JPG",
    gallery: ["/media/Lahore_Science_Mela/DSC_1329.JPG","/media/Lahore_Science_Mela/DSC_1437.JPG","/media/Lahore_Science_Mela/DSC_1328.JPG",]
  },
  {
    name: "Jhang Training",
    secondaries: ["Date: 12/04/2021", "Place: Jhang"],
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/media/NCLS_winter_camp/DSC_4574.JPG",
    gallery: ["/media/NCLS_winter_camp/DSC_4616.JPG","/media/NCLS_winter_camp/DSC_4574.JPG","/media/NCLS_winter_camp/DSC_5040.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/media/Gilgit_Training/DSC07851.JPG",
    gallery: ["/media/Gilgit_Training/DSC07951.JPG","/media/Gilgit_Training/DSC08492.JPG","/media/Gilgit_Training/DSC08433.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/media/Jhang Training/DSC_2758.JPG",
    gallery: ["/media/Jhang Training/DSC_2878.JPG","/media/Jhang Training/DSC_2793.JPG","/media/Jhang Training/DSC_2707.JPG",]
  },
  {
    name: "Attock Training",
    secondaries: ["Date: 03/08/2022", "Place: Attock"],
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/media/Attock_Training/DSC_2960.jpg",
    gallery: ["/media/Attock_Training/DSC_2967.jpg","/media/Attock_Training/DSC_3014.jpg","/media/Attock_Training/DSC_3047.jpg"]
  }, 
]

const flowchartSteps = [
  {
    name: "Sensitization Session",
    color: "#C5AECB",
    corner: "br",
  },
  {
    name: "Critical Fundamental Concepts",
    color: "#9FD5B5",
    corner: "tr",
    optionals: [
      {
        name: "Train the Trainer",
        corner: "bl"
      },
      {
        name: "Induction Training",
        corner: "tl"
      },
    ]
  },
  {
    name: "Class Assessment / Assessment for Learning",
    color: "#9FD8EB",
    corner: "br",
  },
  {
    name: "Student Learning Impact Analysis",
    color: "#F2CBAC",
    corner: "tr",
  },
]

const FlowChart = () => {
  return (
    <div className="w-full flex justify-center gap-2 ">

    </div>
  )
}

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
