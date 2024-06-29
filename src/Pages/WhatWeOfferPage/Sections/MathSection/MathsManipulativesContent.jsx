import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { BulletList } from "../BulletList"

const manipulatives = [
  {
    name: "Fraction Board",
    text: "The fraction board provides a tangible representation of fractional concepts through a board divided into equal parts. By playing with the fraction pieces on the board, learners gain a visual understanding of fractions relationships, addition, subtraction, and equivalency.",
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/whatweofferpage/maths/fraction-board.png"
  },
  {
    name: "Base-10 Blocks",
    text: " Understand numbers better by using blocks for ones, tens, and hundreds Count easily and see how multiplication and division work. Move the blocks around to show adding and taking away. making it easier to know what's happening with numbers",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/whatweofferpage/maths/base-10-block.png"
  },
  {
    name: "Tangram",
    text: "The Tangram, an ancient Chinese puzzle Involves seven tans, forming various shapes, it nurtures kids spatial awareness, geometry skills, and problem-solving, it also evolves to teach advanced concepts like ated comparison, fractions, and rates.",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/whatweofferpage/maths/tangram.png"
  },
  {
    name: "Geoboard",
    text: "A geoboard is a board with pegs arranged in a grid. It's used with rubber bands to create shapes and patterns, teaching geometry basics. It loter covers advanced topics like area, perimeter, Symmetry, and congruence",
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/whatweofferpage/maths/geoboard.png"
  },
  {
    name: "Circular Geoboard",
    text: "A circular geoboard consists of 12 evenly placed pegs forming a circle. Elementary concepts, such as parts of a circle, fractional portions of a circle, angles, and more advanced topics like inscribed triangles within circles. Thale's theorem, approximating pie, and many more, can be demonstrated using rubber bands",
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/whatweofferpage/maths/circular-geoboard.png"
  },
]

const ManipulativeCard = ({name, src, color, innerColor, text}) => {
  return (
    <div className="flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-48 rounded-full rounded-tl-none overflow-hidden p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
      </div>
      <p className="flex-1 pr-20"><strong>{name+": "}</strong>{text}</p>
    </div>
  )
}

export const MathsManipulativesContent = () => {
  return (
    <FadeIn className="flex flex-col w-full p-20 px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-xl">
          <h4 className="text-3xl">Play, Learn, and Grow with the DoMath Series!</h4>
          <p>Our DoMath series, inspired by the well-known Singapore maths technique, would be an adventurous mathematical discovery for the students.</p>
          <p>This series is reinforced with manipulative tools including Tangram, Geoboard, Circular Geoboard, Tens Blocks, and Fraction Board, which turn traditional topics into engaging problems for young students. Our series, designed for children aged 4 to 13, promotes knowledge and discovery through hands-on experience.</p>
        </div>
        <div className="pl-52 py-4">
          <BulletList contentClass="text-xl break-all"
          list={[
            {title: "For Schools", content: "We aim to provide kids a unique opportunity to connect with numbers, shapes, and mathematical concepts in an interactive and enriching setting in your Maths class. Our DoMath Library containing 50+ Booklets will transform your school into an exciting place of mathematical exploration."},
            {title: "For Homeschoolers", content: "You can create a lively maths corner at home with our series designed specifically for homeschooling success. Watch your child go through booklets that are designed to grow alongside them, delivering a comprehensive and adaptable learning experience."},
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
                <div className="flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                </div>
                <div className="flex-[3_0_0] flex flex-col px-4 gap-8 md:text-2xl">
                  <p>EL's activity booklets are essential tools for educators and parents looking to enhance students' math learning. Designed to complement our math manipulatives, each booklet features over 50 activities tailored to a specific tool. These resources inspire curiosity, foster creativity, and develop essential mathematical skills, encouraging meaningful exploration both in classrooms and at home.</p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-5xl">Benifits of Using Activity Booklets</h3>
                    <div className="pl-32">
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
