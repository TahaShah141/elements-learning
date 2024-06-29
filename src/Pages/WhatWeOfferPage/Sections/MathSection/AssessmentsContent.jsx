import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { BulletList } from "../BulletList"
import { ContentCard } from "../ContentCard"

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
    <div className="flex-1 flex flex-col items-center gap-2">
      <div className={`relative flex justify-center p-2 rounded-full`} style={{backgroundColor: highlight}}>
        <div className="p-3 bg-white rounded-full z-10">
          <div className={`rounded-full size-64 flex flex-col justify-center items-center rounded-${corner}-none p-4`} style={{backgroundColor: color}}>
            <h3 className="text-7xl font-bold" style={{color: highlight}}>{number}</h3>
            <div className="flex flex-col items-center justify-center font-bold text-3xl">
              <p>{headers[0]}</p>
              <p>{headers[1]}</p>
            </div>
          </div>
        </div>
        <div className={`absolute w-full h-1/2 bg-white left-0 ${corner === "tr" ? "top-0" : "bottom-0" }`} />
        <div className={`absolute h-2 w-full flex justify-between top-1/2 z-10 -translate-y-1/2`}>
          <div className="size-2 rounded-full" style={{backgroundColor: highlight}}></div>
          <div className="relative size-2 rounded-full" style={{backgroundColor: highlight}}>
            <div className="absolute left-0 h-full w-16 rounded-full" style={{backgroundColor: highlight}}>
              <div className="relative w-full h-full rounded-full" style={{backgroundColor: highlight}}>
                <div className="absolute w-1/2 rotate-45 -translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
                <div className="absolute w-1/2 -rotate-45 translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-base">
        {content}
      </p>
    </div>
  )
}

export const AssessmentsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full gap-4 p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 text-xl">
          <h4 className="text-3xl">Assessments play a crucial role in the teaching and learning process, serving as valuable tools for evaluating progress, identifying areas for growth, and informing instructional decision-making.</h4>
          <p> By implementing a comprehensive assessment framework, Elements Learning (EL) ensures that both educators and students receive the support and feedback needed to achieve academic success and mastery in mathematics.</p>
        </div>
        <div className="pl-52 py-4">
          <BulletList contentClass="text-xl break-all"
          list={[
            {title: "Inform Instructional Planning", content: " Assessments provide valuable data that informs instructional planning and decision-making, allowing educators to tailor their teaching strategies to address students' learning needs effectively."},
            {title: "Monitor Progress:", content: "Assessments help educators and students monitor progress over time, identifying areas of strength and areas requiring additional support or intervention."},
            {title: "Promote Mastery Learning:", content: "By providing opportunities for feedback and reflection, assessments support the principles of mastery learning, encouraging students to persist and succeed in their learning journey."},
            {title: "Guide Differentiation:", content: "Assessments inform differentiation strategies, allowing educators to customize instruction based on individual students' readiness, interests, and learning profiles."},
          ]} />
        </div>
      </div>
      <CustomAccordion containerClass={"w-full"} type="multiple"
      items={[
        {
          title: "Teacher Assessments",
          id: "Teacher Assessments",
          content: 
          
          <div className="flex gap-4 p-8">
            {teacherAssessments.map(assessment => <AssessmentCard {...assessment} />)}
          </div>

        },
        {
          title: "Student Assessments",
          id: "Student Assessments",
          content: 
          <div className="p-8 flex gap-6">
            {studentAssessments.map(assessment => <ContentCard {...assessment} />)}
          </div>
        },
      ]}
      />
    </FadeIn>
  )
}
