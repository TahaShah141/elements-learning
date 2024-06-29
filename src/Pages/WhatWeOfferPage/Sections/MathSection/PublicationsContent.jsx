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
                <div className="flex-[3_0_0] flex flex-col text-right p-12 gap-8 bg-[#F3EEE8]">
                  <h3 className="text-5xl">Our textbooks are meticulously crafted to align with the Student Learning Outcomes (SLOs) provided by the single National Curriculum.</h3>
                  <p className="text-base md:text-xl"> By incorporating best practices based on the CPA methodology, and innovative methods from educational theorists such as Jerome Bruner, Richard Skemp, Zoltán Pál Dienes, and Caleb Gattegno, our textbooks ensure a comprehensive and effective learning experience.</p>
                  <div className="flex gap-2 mt-auto justify-end">
                    <button className="px-6 py-4 font-bold text-lg text-white bg-[#FBBA42]">Teacher Guide</button>
                    <button className="px-6 py-4 font-bold text-lg text-white bg-[#353535]">Student Workbooks</button>
                  </div>
                </div>
                <div className="flex-[2_0_0] aspect-[3/4] bg-neutral-400">
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
                <div className="flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                </div>
                <div className="flex-[3_0_0] flex flex-col p-12 gap-8 text-base md:text-xl bg-[#F3EEE8]">
                  <h3 className="text-5xl">Popular Math uses puzzles and games to make learning enjoyable for all ages, featuring resources from renowned Maths popularizers and plans for recreational programs and olympiads.</h3>
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
