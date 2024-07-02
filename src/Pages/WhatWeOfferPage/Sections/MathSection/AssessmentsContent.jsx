import { BulletList } from "@/Pages/WhatWeOfferPage/Sections/BulletList"
import { AssessmentCard } from "@/components/Cards/AssessmentCard"
import { ContentCard } from "@/components/Cards/ContentCard"
import { FadeIn } from "@/components/FadeIn"
import { SlidingDiv } from "@/components/SlidingDiv"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { studentAssessments } from "@/constants/WhatWeOffer/Sections/MathSections/AssessmentsContents/studentAssessments"
import { teacherAssessments } from "@/constants/WhatWeOffer/Sections/MathSections/AssessmentsContents/teacherAssessment"
import { useScrollToTop } from "@/lib/useScrollToTop"

export const AssessmentsContent = () => {

  useScrollToTop()

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full gap-4 p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <h4 className="text-2xl xl:text-3xl">Assessments play a crucial role in the teaching and learning process, serving as valuable tools for evaluating progress, identifying areas for growth, and informing instructional decision-making.</h4>
          <p> By implementing a comprehensive assessment framework, Elements Learning (EL) ensures that both educators and students receive the support and feedback needed to achieve academic success and mastery in mathematics.</p>
        </div>
        <SlidingDiv direction={"bottom"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "Inform Instructional Planning", content: " Assessments provide valuable data that informs instructional planning and decision-making, allowing educators to tailor their teaching strategies to address students' learning needs effectively."},
            {title: "Monitor Progress", content: "Assessments help educators and students monitor progress over time, identifying areas of strength and areas requiring additional support or intervention."},
            {title: "Promote Mastery Learning", content: "By providing opportunities for feedback and reflection, assessments support the principles of mastery learning, encouraging students to persist and succeed in their learning journey."},
            {title: "Guide Differentiation", content: "Assessments inform differentiation strategies, allowing educators to customize instruction based on individual students' readiness, interests, and learning profiles."},
          ]} />
        </SlidingDiv>
      </div>
      <CustomAccordion containerClass={"w-full"} type="multiple"
      items={[
        {
          title: "Teacher Assessments",
          id: "Teacher Assessments",
          content: 
          
          <div className="py-8 md:py-6 lg:p-8 flex md:flex-row gap-8 md:gap-4 flex-col">
            {teacherAssessments.map((assessment, i) => <AssessmentCard {...assessment} index={i} />)}
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
