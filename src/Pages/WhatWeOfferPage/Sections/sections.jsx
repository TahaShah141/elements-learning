import { AssessmentsContent } from "./MathSection/AssessmentsContent";
import { MathsLabsContent } from "./MathSection/MathsLabsContent";
import { MathsManipulativesContent } from "./MathSection/MathsManipulativesContent";
import { PublicationsContent } from "./MathSection/PublicationsContent";

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