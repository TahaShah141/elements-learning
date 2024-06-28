import { FadeIn } from "@/components/FadeIn"
import { BulletList } from "../BulletList"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { CarouselSingle } from "@/components/custom/CarouselSingle"

export const PublicationsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae ea! Dicta cumque possimus ullam quisquam consequatur quos perferendis, voluptates porro inventore id rem incidunt at beatae necessitatibus asperiores esse. Debitis sapiente amet aspernatur eveniet velit nemo nesciunt earum, officiis ducimus totam dicta quibusdam optio illum voluptatum placeat animi fugit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laudantium tenetur repellat nulla ipsum? Aut praesentium veniam aliquam porro? Qui repudiandae voluptatum pariatur non vitae adipisci tenetur distinctio aperiam aliquid?</p>
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

            <CarouselSingle containerClass={"w-72 h-96"} nextButton={"next"} prevButton={"prev"}
            items={[
              <div className="size-full bg-sky-100"></div>,
              <div className="size-full bg-sky-200"></div>,
              <div className="size-full bg-sky-300"></div>,
              <div className="size-full bg-sky-400"></div>,
              <div className="size-full bg-sky-500"></div>,
            ]} />
            </div>

          },
          {
            title: "Popular Maths",
            id: "Popular Maths",
            content: 
            <div className="p-4 bg-red-400">
              <div className="h-96 bg-sky-400">

              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
  )
}
