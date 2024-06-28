import { FadeIn } from "@/components/FadeIn"
import { BulletList } from "../BulletList"
import { CustomAccordion } from "@/components/custom/CustomAccordion"

const manipulatives = [
  {
    name: "Fraction Board",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sapiente! Nihil accusamus consequuntur error facilis voluptatum quam quisquam quidem a corrupti sint deserunt ab tempora eaque qui alias repellat nostrum nesciunt non, sunt iure est minus eius. Repellendus, quisquam blanditiis.",
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "#"
  },
  {
    name: "Base-10 Blocks",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sapiente! Nihil accusamus consequuntur error facilis voluptatum quam quisquam quidem a corrupti sint deserunt ab tempora eaque qui alias repellat nostrum nesciunt non, sunt iure est minus eius. Repellendus, quisquam blanditiis.",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "#"
  },
  {
    name: "Tangram",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sapiente! Nihil accusamus consequuntur error facilis voluptatum quam quisquam quidem a corrupti sint deserunt ab tempora eaque qui alias repellat nostrum nesciunt non, sunt iure est minus eius. Repellendus, quisquam blanditiis.",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "#"
  },
  {
    name: "Geoboard",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sapiente! Nihil accusamus consequuntur error facilis voluptatum quam quisquam quidem a corrupti sint deserunt ab tempora eaque qui alias repellat nostrum nesciunt non, sunt iure est minus eius. Repellendus, quisquam blanditiis.",
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "#"
  },
  {
    name: "Circular Geoboard",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sapiente! Nihil accusamus consequuntur error facilis voluptatum quam quisquam quidem a corrupti sint deserunt ab tempora eaque qui alias repellat nostrum nesciunt non, sunt iure est minus eius. Repellendus, quisquam blanditiis.",
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "#"
  },
]

const ManipulativeCard = ({name, src, color, innerColor, text}) => {
  return (
    <div className="flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-48 rounded-full rounded-tl-none" style={{backgroundColor: innerColor}}></div>
      <p className="flex-1 pr-20"><strong>{name+": "}</strong>{text}</p>
    </div>
  )
}

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
            <div className="p-8 flex flex-col gap-4">
              {manipulatives.map(man => <ManipulativeCard {...man} />)}
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
