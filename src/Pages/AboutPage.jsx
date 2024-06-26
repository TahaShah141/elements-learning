import { Footer } from "../components/Footer"
import { SlidingDiv } from "../components/SlidingDiv"
import { StaggeredHeaders } from "../components/StaggeredHeaders"

export const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-[#F3EEE8] p-8 w-full flex gap-20 justify-center items-center">
        <StaggeredHeaders headers={["About Us"]} containerClass="text-9xl font-bold" direction="left" />
        <div className="max-w-[600px]">
          <img src="/aboutpage/aboutus.png" alt="" />
        </div>
      </section>
      <section className="relative w-full">
        <img src="/aboutpage/hero.png" alt="" className="w-full"/>
        <div className="absolute grid p-20 text-white grid-cols-2 grid-rows-2 inset-0 bg-black/75">
          <SlidingDiv direction={"right"} className="flex flex-col gap-4 text-right text-2xl col-start-2 justify-center size-full">
            <h2 className="text-7xl uppercase font-bold" >Our Mission</h2>
            <p>Our mission is to deliver top-tier, affordable K-12 educational solutions that equip learners with the knowledge, skills, and values necessary to excel in the 21st century. We strive to utilize the finest global resources and innovative teaching methods to provide a comprehensive, engaging, and locally relevant educational experience. Our commitment extends to enhancing teacher capabilities, fostering a culture of continuous feedback, and promoting the spirit of self-learning.</p>
          </SlidingDiv>
          <SlidingDiv direction={"left"} className="flex flex-col gap-4 text-left text-2xl row-start-2 justify-center size-full">
            <h2 className="text-7xl uppercase font-bold" >Our Vision</h2>
            <p>To reinvent K-12 education into a system that creates a nurturing environment for curiosity, creativity, and critical thinking, enabling every child to reach their full potential, understand themselves, and play a positive role in the larger community, paving the way for a brighter future for all.</p>
          </SlidingDiv>
        </div>
      </section>
      <Footer />
    </div>
  )
}
