import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { ContentCard } from "../ContentCard"
import { BulletList } from "../BulletList"

const studentAssessments = [
  {
    headers: ["In-Book", "Assessments"],
    color: "#FBBA42",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid."
  },
  {
    headers: ["Chapter End", "Assessments"],
    color: "#FBBA42",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid."
  },
  {
    headers: ["Periodic", "Review"],
    color: "#FBBA42",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid."
  },
  
]

const teacherAssessments = [
  {
    headers: ["Pre-Training", "Assessment"],
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid.",
    color: "#9FD8EB",
    highlight: "#2D7CEA"
  },
  {
    headers: ["Mid-Training", "Assessment"],
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid.",
    color: "#C5AECB",
    highlight: "#66378A"
  },
  {
    headers: ["Post-Training", "Assessment"],
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatum iusto assumenda, natus quas commodi, vitae animi quo sunt aperiam magnam omnis soluta tempore, illum officia. Iusto impedit ducimus ea eos. Dolor provident nemo blanditiis eveniet illo. Aliquam officia praesentium aut omnis tempore necessitatibus, quam, exercitationem facilis vel doloremque ratione expedita nemo assumenda beatae, ut sunt aspernatur? Facere, aliquid.",
    color: "#C7DFAF",
    highlight: "#74C045"
  },
]

export const AssessmentsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full gap-4 p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 text-xl">
          <h4 className="text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati magni consectetur, aut odio possimus enim natus quam? Deleniti, culpa.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae ea! Dicta cumque possimus ullam quisquam consequatur quos perferendis, voluptates porro inventore id rem incidunt at beatae necessitatibus asperiores esse. Debitis sapiente amet aspernatur eveniet velit nemo nesciunt earum, officiis ducimus totam dicta quibusdam optio illum voluptatum placeat animi fugit.</p>
        </div>
        <div className="pl-52 py-4">
          <BulletList contentClass="text-xl break-all"
          list={[
            {title: "For Schools", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo dolore velit libero ratione autem doloremque assumenda facere, eius excepturi aliquam fugit aliquid quae accusantium amet doloribus est esse nisi numquam quidem sunt? Ullam perspiciatis optio quae voluptatem sapiente aliquid."},
            {title: "For Homeschoolers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quaerat ut distinctio, fuga repellendus enim minima deserunt nobis sequi soluta ullam quam assumenda? Voluptatum voluptate asperiores eveniet, vitae aperiam fugit nostrum laborum doloremque laboriosam."},
            {title: "For Schools", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo dolore velit libero ratione autem doloremque assumenda facere, eius excepturi aliquam fugit aliquid quae accusantium amet doloribus est esse nisi numquam quidem sunt? Ullam perspiciatis optio quae voluptatem sapiente aliquid."},
            {title: "For Homeschoolers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quaerat ut distinctio, fuga repellendus enim minima deserunt nobis sequi soluta ullam quam assumenda? Voluptatum voluptate asperiores eveniet, vitae aperiam fugit nostrum laborum doloremque laboriosam."},
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
