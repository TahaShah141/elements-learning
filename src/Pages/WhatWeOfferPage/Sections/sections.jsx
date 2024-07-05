import { AssessmentsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/AssessmentsContent";
import { MathsLabsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsLabsContent";
import { MathsManipulativesContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsManipulativesContent";
import { PublicationsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Publications/PublicationsContent";
import { TrainingsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Training/TrainingsContent";
import { ECEContent } from "./ECESection/ECEContent";

export const sections = 
[
  {
    name: "Maths",
    color: "#FBBA42",
    src: "/landingpage/maths.png",
    tabs: [
      {
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <PublicationsContent />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/maths/trainings.png",
        tabName: "trainings",
        content: <TrainingsContent />
      },
      {
        name: "Maths Lab",
        src: "/whatweofferpage/maths/maths-lab.png",
        tabName: "labs",
        content: <MathsLabsContent />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/maths/maths-manipulatives.png",
        tabName: "manipulatives",
        content: <MathsManipulativesContent />
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        tabName: "assessments",
        content: <AssessmentsContent />
      },
    ],
  },
  {
    name: "ECE",
    color: "#DA037F50",
    src: "/landingpage/ece.png",
    content: <ECEContent />
  },
  {
    name: "Language",
    color: "#307F0150",
    src: "/landingpage/language.png",
    content: <ECEContent />
  },
  {
    name: "STEAM",
    color: "#DA037F50",
    src: "/landingpage/steam.png",
    content: <ECEContent />
  },
  {
    name: "EdTech",
    color: "#DA037F50",
    src: "/landingpage/edtech.png",
    content: <ECEContent />
  },
  {
    name: "Science",
    color: "#DA037F50",
    src: "/landingpage/science.png",
    content: <ECEContent />
  },
  {
    name: "Social Sciences",
    color: "#DA037F50",
    src: "/landingpage/socialscience.png",
    content: <ECEContent />
  },
]
