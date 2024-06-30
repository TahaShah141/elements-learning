import { FadeIn } from "@/components/FadeIn"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { BulletList } from "../BulletList"
import { useState } from "react"
import { CarouselSingle } from "@/components/custom/CarouselSingle"
import { HexagonPlayButton } from "@/components/HexagonPlayButton"
import samplePDF from '../../../../../public/sample.pdf'

const TextbooksPublications = () => {
  const [opened, setOpened] = useState("OVERVIEW")

  return (
    <>
    {opened === "OVERVIEW" ? 
    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <div className="flex-[3_0_0] flex flex-col text-right p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 bg-[#F3EEE8]">
          <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Our textbooks are meticulously crafted to align with the Student Learning Outcomes (SLOs) provided by the single National Curriculum.</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"> By incorporating best practices based on the CPA methodology, and innovative methods from educational theorists such as Jerome Bruner, Richard Skemp, Zoltán Pál Dienes, and Caleb Gattegno, our textbooks ensure a comprehensive and effective learning experience.</p>
          <div className="flex gap-2 mt-auto justify-end">
            <button onClick={() => setOpened("TEACHERS")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#FBBA42]">Teacher Guide</button>
            <button onClick={() => setOpened("STUDENTS")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#353535]">Student Workbooks</button>
          </div>
        </div>
        <div className="sm:flex-[2_0_0] aspect-square sm:aspect-[3/4] bg-neutral-400">
          <img src="/media/IMG-20240401-WA0010.jpg" className="h-full" />
        </div>
      </div>
    </div>:
    opened === "TEACHERS" ?
    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <div className="flex-[3_0_0] flex flex-col text-right p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 bg-[#F3EEE8]">
          <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Our textbooks are meticulously crafted to align with the Student Learning Outcomes (SLOs) provided by the single National Curriculum.</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"> By incorporating best practices based on the CPA methodology, and innovative methods from educational theorists such as Jerome Bruner, Richard Skemp, Zoltán Pál Dienes, and Caleb Gattegno, our textbooks ensure a comprehensive and effective learning experience.</p>
          <div className="flex gap-2 mt-auto justify-end">
            <button onClick={() => setOpened("OVERVIEW")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#FBBA42]">Textbooks Overview</button>
            <button onClick={() => setOpened("STUDENTS")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#353535]">Student Workbooks</button>
          </div>
        </div>
        <div className="sm:flex-[2_0_0] aspect-square sm:aspect-[3/4] bg-neutral-400">
          <CarouselSingle containerClass={"size-full"} items={[
            <img src="/bookcovers/book1.jpg" className="size-full" />, 
            <a href={samplePDF} target="_blank" rel="noreferrer"> 
              <img src="/bookcovers/book2.jpg" className="size-full" />
            </a>, 
            <img src="/bookcovers/book3.jpg" className="size-full" />, 
            <img src="/bookcovers/book4.jpg" className="size-full" />, 
            <img src="/bookcovers/book5.jpg" className="size-full" />, 
          ]}
          nextButton={
            <div className="size-10 lg:size-16">
              <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
            </div>
          } />
        </div>
      </div>
    </div>:
    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <div className="flex-[3_0_0] flex flex-col text-right p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 bg-[#F3EEE8]">
          <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Our textbooks are meticulously crafted to align with the Student Learning Outcomes (SLOs) provided by the single National Curriculum.</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"> By incorporating best practices based on the CPA methodology, and innovative methods from educational theorists such as Jerome Bruner, Richard Skemp, Zoltán Pál Dienes, and Caleb Gattegno, our textbooks ensure a comprehensive and effective learning experience.</p>
          <div className="flex gap-2 mt-auto justify-end">
            <button onClick={() => setOpened("TEACHERS")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#FBBA42]">Teacher Guide</button>
            <button onClick={() => setOpened("OVERVIEW")} className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#353535]">Textbooks Overview</button>
          </div>
        </div>
        <div className="sm:flex-[2_0_0] aspect-square sm:aspect-[3/4] bg-neutral-400">
          <CarouselSingle containerClass={"size-full"} items={[
            <img src="/bookcovers/book1.jpg" className="size-full" />, 
            <img src="/bookcovers/book2.jpg" className="size-full" />, 
            <img src="/bookcovers/book3.jpg" className="size-full" />, 
            <img src="/bookcovers/book4.jpg" className="size-full" />, 
            <img src="/bookcovers/book5.jpg" className="size-full" />, 
          ]}
          nextButton={
            <div className="size-10 lg:size-16">
              <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
            </div>
          } />
        </div>
      </div>
    </div>
    }
    </>
  )

}

export const PublicationsContent = () => {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>At Elements Learning (EL), we are dedicated to producing high-quality educational materials that cater to the diverse needs of educators and students. Our comprehensive range of textbooks and popular Maths resources is designed to enhance the learning experience and foster a deep understanding of Mathematical concepts.</p>
          <p>Central to our approach is the CPA (Concrete-Pictorial-Abstract) Methodology, which underpins all our publications. This approach ensures that students develop a deep and robust understanding of Mathematical concepts by:</p>
        </div>
        <div className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
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
            content: <TextbooksPublications />
          },
          {
            title: "Popular Maths",
            id: "Popular Maths",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="sm:flex-[2_0_0] aspect-square sm:aspect-[3/4] bg-neutral-400">
                  <img src="/media/popularmaths.jpg" className="h-full" />
                </div>
                <div className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]">
                  <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Popular Math uses puzzles and games to make learning enjoyable for all ages, featuring resources from renowned Maths popularizers and plans for recreational programs and olympiads.</h3>
                  <p>Martin Gardner, a famous Maths popularizer, is best known for creating and sustaining interest in recreational Math. It is said that Martin transformed countless kids into scientists and countless scientists into kids. Known for his mind-bending puzzles and over 100 engaging books, he sparked curiosity worldwide.</p>
                  <p>Now, we invite you to continue Martin's legacy by joining us as a part-time author.</p>
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
