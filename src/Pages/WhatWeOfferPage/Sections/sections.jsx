import { AssessmentsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/AssessmentsContent";
import { MathsLabsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsLabsContent";
import { MathsManipulativesContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsManipulativesContent";
import { PublicationsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Publications/PublicationsContent";
import { TrainingsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Training/TrainingsContent";
import { ECEContent } from "./ECESection/ECEContent";
import { EdTechContent } from "./EdTechSection/EdTechContent";
import { LanguageContent } from "./LanguageSection/LanguageContent";
import { ScienceContent } from "./ScienceSection/ScienceContent";
import { SocialSciencesContent } from "./SocialSciencesSection/SocialSciencesContent";
import { SteamContent } from "./SteamSection/SteamContent";

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
    name: "Early Childhood Education",
    color: "#DA037F50",
    src: "/landingpage/ece.png",
    content: <ECEContent />
  },
  {
    name: "Language",
    color: "#307F0150",
    src: "/landingpage/language.png",
    content: <LanguageContent />
  },
  {
    name: "STEAM",
    color: "#00678F50",
    src: "/landingpage/steam.png",
    content: <SteamContent />
  },
  {
    name: "EdTech",
    color: "#DA037F50",
    src: "/landingpage/edtech.png",
    content: <EdTechContent />
  },
  {
    name: "Science",
    color: "#55088C50",
    src: "/landingpage/science.png",
    content: <ScienceContent />
  },
  {
    name: "Social Science",
    color: "#007E3D50",
    src: "/landingpage/socialscience.png",
    content: <SocialSciencesContent />
  },
]
