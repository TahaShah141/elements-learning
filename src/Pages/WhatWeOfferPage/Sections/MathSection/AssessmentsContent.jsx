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
    highlight: "#2D7CEA"
  },
  {
    headers: ["Mid-Training", "Assessment"],
    content: "Throughout the training program, educators are assessed through a variety of methods to evaluate their progress and proficiency. These assessments may include presentations, practical demonstrations of tool usage, written evaluations, and reflective exercises. By assessing educators' performance during training, we ensure that they are acquiring the necessary knowledge and skills to effectively implement our methodologies in the classroom.",
    color: "#C5AECB",
    highlight: "#66378A"
  },
  {
    headers: ["Post-Training", "Assessment"],
    content: " Following the completion of our training program, educators undergo assessments again to evaluate the impact and effectiveness of the training. These assessments measure the changes in knowledge, pedagogical practices, and confidence levels, providing valuable insights into the training program's outcomes and areas for further improvement.",
    color: "#C7DFAF",
    highlight: "#74C045"
  },
]

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
          
          <div className="flex flex-col gap-4 p-8 text-lg">
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
