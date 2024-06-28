import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { ContentCard } from "../ContentCard"

const packages = [
  {
    headers: ["Basic", "Maths Lab"],
    color: "#75BF46",
    content: [
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!"
    ]
  },
  {
    headers: ["Standard", "Maths Lab"],
    color: "#02AEEE",
    content: [
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
    ]
  },
  {
    headers: ["Premium", "Maths Lab"],
    color: "#6C3694",
    content: [
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
      "Repellat minus expedita amet error architecto quod!",
    ]
  },
]

export const MathsLabsContent = () => {
  return (
    <FadeIn className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl p-10 px-32">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae ea! Dicta cumque possimus ullam quisquam consequatur quos perferendis, voluptates porro inventore id rem incidunt at beatae necessitatibus asperiores esse. Debitis sapiente amet aspernatur eveniet velit nemo nesciunt earum, officiis ducimus totam dicta quibusdam optio illum voluptatum placeat animi fugit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laudantium tenetur repellat nulla ipsum? Aut praesentium veniam aliquam porro? Qui repudiandae voluptatum pariatur non vitae adipisci tenetur distinctio aperiam aliquid?</p>
        </div>
        <section className="p-16 bg-[#F3EEE8]">
          Carousel
        </section>
        <CustomAccordion containerClass={"w-full p-10 px-32"} type="multiple"
        items={[
          {
            title: "Packages",
            id: "Packages",
            content: 
            
            <div className="flex flex-col gap-4 p-8 text-lg">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim officiis aliquid quibusdam excepturi praesentium eum rem neque sit dolore laborum natus, explicabo dolorem delectus molestias. Alias voluptatibus officiis id. Consequatur!</p>    
              <div className="flex gap-6">
                {packages.map(pkg => <ContentCard {...pkg} />)}
              </div>
            </div>

          },
          {
            title: "Lab Manuals",
            id: "Lab Manuals",
            content: 
            <div className="p-8">
              <div className="flex gap-2">
                <div className="h-[600px] w-[450px] bg-neutral-400">
                </div>
                <div className="flex-1 flex flex-col p-12 gap-8 text-base md:text-lg">
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
