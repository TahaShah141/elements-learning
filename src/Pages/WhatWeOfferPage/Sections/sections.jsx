import { AssessmentsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/AssessmentsContent";
import { MathsLabsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsLabsContent";
import { MathsManipulativesContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/MathsManipulativesContent";
import { PublicationsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/PublicationsContent";
import { TrainingsContent } from "@/Pages/WhatWeOfferPage/Sections/MathSection/TrainingsContent";

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
        content: <PublicationsContent />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/maths/trainings.png",
        content: <TrainingsContent />
      },
      {
        name: "Maths Lab",
        src: "/whatweofferpage/maths/maths-lab.png",
        content: <MathsLabsContent />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/maths/maths-manipulatives.png",
        content: <MathsManipulativesContent />
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
        content: <AssessmentsContent />
      },
    ]
  }
]