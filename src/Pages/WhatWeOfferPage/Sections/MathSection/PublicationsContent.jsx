import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { BulletList } from "../BulletList"

export const PublicationsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl">
          <p>At Elements Learning (EL), we are dedicated to producing high-quality educational materials that cater to the diverse needs of educators and students. Our comprehensive range of textbooks and popular Maths resources is designed to enhance the learning experience and foster a deep understanding of Mathematical concepts.</p>
          <p>Central to our approach is the CPA (Concrete-Pictorial-Abstract) Methodology, which underpins all our publications. This approach ensures that students develop a deep and robust understanding of Mathematical concepts by:</p>
        </div>
        <div className="pl-52 py-4">
          <BulletList contentClass="text-xl break-all"
          list={[
            {title: "Concrete", content: "Using physical maninpulatives and objects to explore Mathematical ideas."},
            {title: "Pictorial", content: "Transitioning to visual representations such as diagrams and models to further conceptual understanding."},
            {title: "Abstract", content: "Finally moving to abstract symbols and notations, solidifying students' mastery of concepts."}
          ]} />
        </div>
        <CustomAccordion containerClass={"w-full"} type="multiple"
        items={[
          {
            title: "Textbooks",
            id: "Textbooks",
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
            title: "Popular Maths",
            id: "Popular Maths",
            content: 
            <div className="p-8">
              <div className="flex gap-2">
                <div className="h-[600px] w-[450px] bg-neutral-400">
                </div>
                <div className="flex-1 flex flex-col p-12 gap-8 text-base md:text-lg bg-[#F3EEE8]">
                  <h3 className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quos molestiae, maxime dolor, odit amet nobis iusto autem dolorem recusandae doloremque, animi ratione laboriosam soluta commodi. Ad deserunt possimus voluptatum suscipit veniam dolorum illum fugiat quia molestias, doloribus error!</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime architecto voluptates animi beatae maiores exercitationem optio, harum delectus incidunt recusandae minima molestias corrupti qui sapiente ea illum reprehenderit earum magnam alias ullam illo a. Corrupti, expedita in. Architecto, distinctio vero.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro, illum impedit laborum dignissimos assumenda deleniti voluptatum similique cupiditate exercitationem?</p>
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
