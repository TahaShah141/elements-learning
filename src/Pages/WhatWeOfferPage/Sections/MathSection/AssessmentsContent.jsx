import { BulletList } from "@/Pages/WhatWeOfferPage/Sections/BulletList"
import { ContentCard } from "@/Pages/WhatWeOfferPage/Sections/ContentCard"
import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"

const studentAssessments = [
  {
    headers: ["In-Book", "Assessments"],
    color: "#FBBA42",
    content: "Our math textbooks include a variety of assessments embedded within the chapters to evaluate students' understanding and mastery of mathematical concepts. These assessments may include formative quizzes, exercises, and problems designed to assess comprehension, application, and critical thinking skills."},
  {
    headers: ["Chapter End", "Assessments"],
    color: "#FBBA42",
    content: "At the conclusion of each chapter, students encounter comprehensive assessments that test their proficiency in the covered material. These assessments may include a mix of multiple-choice questions, short-answer problems, and hands-on activities to assess various dimensions of learning."},
  {
    headers: ["Periodic", "Review"],
    color: "#FBBA42",
    content: " Throughout the academic year, students engage in periodic reviews and assessments to consolidate their learning and identify areas for improvement including assessments for hands-on learning of using the tools. These assessments may take the form of unit tests, quizzes, or projects, providing students with opportunities to demonstrate their progress and receive feedback on their performance."
  },
  
]

const teacherAssessments = [
  {
    headers: ["Pre-Training", "Assessment"],
    content: " Before initiation of our teacher training program, educators undergo comprehensive assessments to gauge their current knowledge, skills, and teaching practices. These assessments serve as a baseline to identify areas for growth and tailor the training experience to meet individual needs effectively.",
    color: "#9FD8EB",
    highlight: "#2D7CEA",
    corner: "tr",
    number: "01"
  },
  {
    headers: ["Mid-Training", "Assessment"],
    content: "Throughout the training program, educators are assessed through a variety of methods to evaluate their progress and proficiency. These assessments may include presentations, practical demonstrations of tool usage, written evaluations, and reflective exercises. By assessing educators' performance during training, we ensure that they are acquiring the necessary knowledge and skills to effectively implement our methodologies in the classroom.",
    color: "#C5AECB",
    highlight: "#66378A",
    corner: "br",
    number: "02"
  },
  {
    headers: ["Post-Training", "Assessment"],
    content: " Following the completion of our training program, educators undergo assessments again to evaluate the impact and effectiveness of the training. These assessments measure the changes in knowledge, pedagogical practices, and confidence levels, providing valuable insights into the training program's outcomes and areas for further improvement.",
    color: "#C7DFAF",
    highlight: "#74C045",
    corner: "tr",
    number: "03"
  },
]

const AssessmentCard = ({headers, content, color, highlight, corner, number}) => {

  return (
    <div className="flex-1 flex md:flex-col items-center gap-2">
      <div className={`relative rotate-90 md:rotate-0 flex justify-center p-1 lg:p-2 rounded-full`} style={{backgroundColor: highlight}}>
        <div className="p-1 lg:p-3 bg-white rounded-full z-10">
          <div className={`rounded-full size-24 lg:size-48 xl:size-52 p-2 lg:p-4 flex flex-col justify-center items-center rounded-${corner}-none`} style={{backgroundColor: color}}>
            <div className="flex -rotate-90 md:rotate-0 flex-col justify-center items-center">
              <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold" style={{color: highlight}}>{number}</h3>
              <div className="flex flex-col items-center justify-center font-bold text-[10px] line-height-1 lg:text-xl xl:text-2xl">
                <p>{headers[0]}</p>
                <p>{headers[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute w-full h-1/2 bg-white left-0 ${corner === "tr" ? "top-0" : "bottom-0" }`} />
        <div className={`absolute h-1 lg:h-2 w-full flex justify-between top-1/2 z-10 -translate-y-1/2`}>
          <div className="size-1 lg:size-2 rounded-full" style={{backgroundColor: highlight}}></div>
          <div className="relative size-1 lg:size-2 rounded-full" style={{backgroundColor: highlight}}>
            <div className="absolute left-0 h-full w-8 lg:w-16 rounded-full" style={{backgroundColor: highlight}}>
              <div className="relative w-full h-full rounded-full" style={{backgroundColor: highlight}}>
                <div className="absolute w-1/2 rotate-45 -translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
                <div className="absolute w-1/2 -rotate-45 translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] xs:text-[11px] sm:text-xs lg:text-sm xl:text-base line-height-1 text-center">
        {content}
      </p>
    </div>
  )
}

export const AssessmentsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full gap-4 p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <h4 className="text-2xl xl:text-3xl">Assessments play a crucial role in the teaching and learning process, serving as valuable tools for evaluating progress, identifying areas for growth, and informing instructional decision-making.</h4>
          <p> By implementing a comprehensive assessment framework, Elements Learning (EL) ensures that both educators and students receive the support and feedback needed to achieve academic success and mastery in mathematics.</p>
        </div>
        <div className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "Inform Instructional Planning", content: " Assessments provide valuable data that informs instructional planning and decision-making, allowing educators to tailor their teaching strategies to address students' learning needs effectively."},
            {title: "Monitor Progress", content: "Assessments help educators and students monitor progress over time, identifying areas of strength and areas requiring additional support or intervention."},
            {title: "Promote Mastery Learning", content: "By providing opportunities for feedback and reflection, assessments support the principles of mastery learning, encouraging students to persist and succeed in their learning journey."},
            {title: "Guide Differentiation", content: "Assessments inform differentiation strategies, allowing educators to customize instruction based on individual students' readiness, interests, and learning profiles."},
          ]} />
        </div>
      </div>
      <CustomAccordion containerClass={"w-full"} type="multiple"
      items={[
        {
          title: "Teacher Assessments",
          id: "Teacher Assessments",
          content: 
          
          <div className="py-8 md:py-6 lg:p-8 flex md:flex-row gap-8 md:gap-4 flex-col">
            {teacherAssessments.map(assessment => <AssessmentCard {...assessment} />)}
          </div>

        },
        {
          title: "Student Assessments",
          id: "Student Assessments",
          content: 
          <div className="flex flex-col flex-wrap sm:flex-row gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
            {studentAssessments.map(assessment => <ContentCard {...assessment} />)}
          </div>
        },
      ]}
      />
    </FadeIn>
  )
}
