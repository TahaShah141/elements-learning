import { BulletList } from "@/Pages/WhatWeOfferPage/Sections/BulletList"
import { FadeIn } from "@/components/FadeIn"
import { SlidingDiv } from "@/components/SlidingDiv"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { useScrollToTop } from "@/lib/useScrollToTop"
import { TextbooksPublications } from "./TextbooksPublications"

export const PublicationsContent = () => {

  useScrollToTop()

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>At Elements Learning (EL), we are dedicated to producing high-quality educational materials that cater to the diverse needs of educators and students. Our comprehensive range of textbooks and popular Maths resources is designed to enhance the learning experience and foster a deep understanding of Mathematical concepts.</p>
          <p>Central to our approach is the CPA (Concrete-Pictorial-Abstract) Methodology, which underpins all our publications. This approach ensures that students develop a deep and robust understanding of Mathematical concepts by:</p>
        </div>
        <SlidingDiv direction={"top"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "Concrete", content: "Using physical maninpulatives and objects to explore Mathematical ideas."},
            {title: "Pictorial", content: "Transitioning to visual representations such as diagrams and models to further conceptual understanding."},
            {title: "Abstract", content: "Finally moving to abstract symbols and notations, solidifying students' mastery of concepts."}
          ]} />
        </SlidingDiv>
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
                <SlidingDiv direction={"left"} className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                  <img src="/media/popularmaths.jpg" className="h-full" />
                </SlidingDiv>
                <SlidingDiv direction={"right"} className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]">
                  <h3 className="text-lg font-semibold lg:font-normal md:text-xl lg:text-3xl xl:text-4xl">Popular Math uses puzzles and games to make learning enjoyable for all ages, featuring resources from renowned Maths popularizers and plans for recreational programs and olympiads.</h3>
                  <p>Martin Gardner, a famous Maths popularizer, is best known for creating and sustaining interest in recreational Math. It is said that Martin transformed countless kids into scientists and countless scientists into kids. Known for his mind-bending puzzles and over 100 engaging books, he sparked curiosity worldwide.</p>
                  <p>Now, we invite you to continue Martin's legacy by joining us as a part-time author.</p>
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
