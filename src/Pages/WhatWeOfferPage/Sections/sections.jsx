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
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/maths/maths-manipulatives.png",
      },
      {
        name: "Assessments",
        src: "/whatweofferpage/maths/assessments.png",
      },
    ]
  }
]