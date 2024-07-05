import { AssessmentsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/AssessmentsContent";
import { MathsLabsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsLabsContent";
import { MathsManipulativesContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsManipulativesContent";
import { PublicationsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Publications/PublicationsContent";
import { TrainingsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/Training/TrainingsContent";

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
  }
]