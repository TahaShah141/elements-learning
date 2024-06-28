import { FadeIn } from "@/components/FadeIn"
import { BulletList } from "../BulletList"
import { CustomAccordion } from "@/components/custom/CustomAccordion"

export const MathsManipulativesContent = () => {
  return (
    <FadeIn className="flex flex-col w-full p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl">
          <h4 className="text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati magni consectetur, aut odio possimus enim natus quam? Deleniti, culpa.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae ea! Dicta cumque possimus ullam quisquam consequatur quos perferendis, voluptates porro inventore id rem incidunt at beatae necessitatibus asperiores esse. Debitis sapiente amet aspernatur eveniet velit nemo nesciunt earum, officiis ducimus totam dicta quibusdam optio illum voluptatum placeat animi fugit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laudantium tenetur repellat nulla ipsum? Aut praesentium veniam aliquam porro? Qui repudiandae voluptatum pariatur non vitae adipisci tenetur distinctio aperiam aliquid?</p>
        </div>
        <div className="pl-52 py-4">
          <BulletList contentClass="text-xl break-all"
          list={[
            {title: "For Schools", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo dolore velit libero ratione autem doloremque assumenda facere, eius excepturi aliquam fugit aliquid quae accusantium amet doloribus est esse nisi numquam quidem sunt? Ullam perspiciatis optio quae voluptatem sapiente aliquid."},
            {title: "For Homeschoolers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quaerat ut distinctio, fuga repellendus enim minima deserunt nobis sequi soluta ullam quam assumenda? Voluptatum voluptate asperiores eveniet, vitae aperiam fugit nostrum laborum doloremque laboriosam."},
          ]} />
        </div>
        <CustomAccordion containerClass={"w-full"} type="multiple"
        items={[
          {
            title: "Manipulatives",
            id: "Manipulatives",
            content: 
            <div className="p-8">
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col text-right p-12 gap-8 bg-[#F3EEE8]">
                  <h3 className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quos molestiae, maxime dolor, odit amet nobis iusto autem dolorem recusandae doloremque, animi ratione laboriosam soluta commodi. Ad deserunt possimus voluptatum suscipit veniam dolorum illum fugiat quia molestias, doloribus error!</h3>
                  <p className="text-base md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime architecto voluptates animi beatae maiores exercitationem optio, harum delectus incidunt recusandae minima molestias corrupti qui sapiente ea illum reprehenderit earum magnam alias ullam illo a. Corrupti, expedita in. Architecto, distinctio vero.</p>
                  <div className="flex gap-2 mt-auto justify-end">
                    <button className="px-6 py-4 font-bold text-lg text-white bg-[#FBBA42]">Teacher Guide</button>
                    <button className="px-6 py-4 font-bold text-lg text-white bg-[#353535]">Student Workbooks</button>
                  </div>
                </div>
                <div className="h-[600px] w-[450px] bg-neutral-400">
                </div>
              </div>
            </div>

          },
          {
            title: "Activity Booklets",
            id: "Activity Booklets",
            content: 
            <div className="p-8">
              <div className="flex gap-2">
                <div className="h-[600px] w-[450px] bg-neutral-400">
                </div>
                <div className="flex-1 flex flex-col px-4 gap-8 md:text-2xl">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quos molestiae, maxime dolor, odit amet nobis iusto autem dolorem recusandae doloremque, animi ratione laboriosam soluta commodi. Ad deserunt possimus voluptatum suscipit veniam dolorum illum fugiat quia molestias, doloribus error!</p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl">Benifits of Using Activity Booklets</h3>
                    <div className="pl-48">
                      <BulletList contentClass="text-2xl break-all"
                      list={[
                        {title: "Hands-On Exploration"},
                        {title: "Engagement and Motivation"},
                        {title: "Comprehensive Skill Development"},
                        {title: "Flexible Use"},
                        {title: "Effective Extension and Reinforcement"}
                      ]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
  )
}
