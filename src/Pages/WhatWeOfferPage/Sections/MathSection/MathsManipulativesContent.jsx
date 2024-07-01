import { BulletList } from "@/Pages/WhatWeOfferPage/Sections/BulletList"
import { FadeIn } from "@/components/FadeIn"
import { SlidingDiv } from "@/components/SlidingDiv"
import { CustomAccordion } from "@/components/custom/CustomAccordion"

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

const ManipulativeCard = ({name, src, color, innerColor, text, index}) => {
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img loading="lazy"  src={src} className="w-full"/>
      </div>
      <p className="flex-1 text-[8px] line-height-1 xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong>{name+": "}</strong>{text}</p>
    </SlidingDiv>
  )
}

export const MathsManipulativesContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4  text-base md:text-lg xl:text-xl">
          <h4 className="text-2xl xl:text-3xl">Play, Learn, and Grow with the DoMath Series!</h4>
          <p>Our DoMath series, inspired by the well-known Singapore maths technique, would be an adventurous mathematical discovery for the students.</p>
          <p>This series is reinforced with manipulative tools including Tangram, Geoboard, Circular Geoboard, Tens Blocks, and Fraction Board, which turn traditional topics into engaging problems for young students. Our series, designed for children aged 4 to 13, promotes knowledge and discovery through hands-on experience.</p>
        </div>
        <SlidingDiv direction={"bottom"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "For Schools", content: "We aim to provide kids a unique opportunity to connect with numbers, shapes, and mathematical concepts in an interactive and enriching setting in your Maths class. Our DoMath Library containing 50+ Booklets will transform your school into an exciting place of mathematical exploration."},
            {title: "For Homeschoolers", content: "You can create a lively maths corner at home with our series designed specifically for homeschooling success. Watch your child go through booklets that are designed to grow alongside them, delivering a comprehensive and adaptable learning experience."},
          ]} />
        </SlidingDiv>
        <CustomAccordion containerClass={"w-full"} type="multiple"
        items={[
          {
            title: "Manipulatives",
            id: "Manipulatives",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-4">
              {manipulatives.map((man, i) => <ManipulativeCard {...man} index={i}/>)}
            </div>

          },
          {
            title: "Activity Booklets",
            id: "Activity Booklets",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <SlidingDiv direction={"top"} className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                  <img loading="lazy"  src="/media/WhatsApp Image 2024-04-01 at 14.31.45_b695ae6f.jpg" alt="" className="h-full" />
                </SlidingDiv>
                <SlidingDiv direction={"right"} className="flex-[3_0_0] flex flex-col sm:px-4 md:px-8 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base xl:text-lg">
                  <p>EL's activity booklets are essential tools for educators and parents looking to enhance students' math learning. Designed to complement our math manipulatives, each booklet features over 50 activities tailored to a specific tool. These resources inspire curiosity, foster creativity, and develop essential mathematical skills, encouraging meaningful exploration both in classrooms and at home.</p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Benifits of Using Activity Booklets</h3>
                    <SlidingDiv direction={"top"} className="pl-6 md:pl-16 lg:pl-24 xl:pl-32">
                      <BulletList contentClass="text-sm md:text-base xl:text-lg"
                      list={[
                        {title: "Hands-On Exploration"},
                        {title: "Engagement and Motivation"},
                        {title: "Comprehensive Skill Development"},
                        {title: "Flexible Use"},
                        {title: "Effective Extension and Reinforcement"}
                      ]} />
                    </SlidingDiv>
                  </div>
                </SlidingDiv>
              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
  )
}
