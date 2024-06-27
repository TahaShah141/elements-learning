import { SlidingDiv } from "../components/SlidingDiv"

const goals = [
  {
    color: "#A7E4F9",
    innerBg: "#6DD1F5",
    title: "Access",
    content: "We prioritize accessibility by providing easily accessible learning resources for educators, parents, and students, ensuring seamless learning experiences for all."
  },
  {
    color: "#CAB9DB",
    innerBg: "#A98CC2",
    title: "Quality",
    content: "We are committed to delivering high-quality learning experiences through innovative methodologies and assessment frameworks, empowering students to unlock their full potential and thrive academically and personally."
  },
  {
    color: "#CFE8BE",
    innerBg: "#B1DA94",
    title: "Relevance",
    content: "Our focus is on delivering engaging and relevant educational experiences that prepare students for success in a rapidly evolving world, ensuring their learning experiences are impactful and meaningful."
  },
]

const GoalCard = ({color, innerBg, src, title, content, index}) => {
  return (
    <SlidingDiv direction={"top"} delay={index*0.5} className="flex flex-col flex-1 rounded-[50px] rounded-tl-none gap-4 max-w-md" style={{backgroundColor: color}}>
      <div className="flex items-center p-5 md:p-8 justify-center rounded-full size-56 rounded-tl-none" style={{backgroundColor: innerBg}}>
        {/* <img src={src} alt="" className="size-full" /> */}
      </div>
      <div className="flex flex-col text-lg gap-1 p-5 md:p-10">
        <h4 className="font-bold text-2xl md:text-4xl">{title}</h4>
        <p className="text-sm md:text-base">{content}</p>
      </div>
    </SlidingDiv>
  )
}

const TeamCard = ({name, designation, extra, src, corner}) => {

  const cornerClass = `rounded-${corner}-none`

  return (
    <div className={`relative group overflow-hidden rounded-[50px] border border-black w-full aspect-[4/3] ${cornerClass} bg-orange-50`}>
      <img src={src} className="w-full" />
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex-col justify-end gap-1 items-end bg-black/40">

      </div>
    </div>
  )
}

export const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* <section className="bg-[#F3EEE8] p-2 xs:p-8 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["About Us"]} containerClass="text-3xl min-[400px] text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[400px] sm:max-w-[600px]">
          <img src="/aboutpage/aboutus.png" alt="" />
        </div>
      </section> */}
      {/* <section className="relative w-full">
        <img src="/aboutpage/hero.jpg" alt="" className="w-full"/>
        <div className="absolute grid py-10 px-5 lg:p-20 text-white grid-cols-2 grid-rows-2 inset-0 bg-black/75">
          <SlidingDiv direction={"right"} className="flex flex-col gap-2 md:gap-4 text-right text-lg md:text-2xl col-start-2 justify-center size-full">
            <h2 className="xs:text-lg sm:text-2xl md:text-3xl lg:text-7xl uppercase font-bold" >Our Mission</h2>
            <p className="text-xs sm:text:sm md:text-lg lg:text-2xl">Our mission is to deliver top-tier, affordable K-12 educational solutions that equip learners with the knowledge, skills, and values necessary to excel in the 21st century. We strive to utilize the finest global resources and innovative teaching methods to provide a comprehensive, engaging, and locally relevant educational experience. Our commitment extends to enhancing teacher capabilities, fostering a culture of continuous feedback, and promoting the spirit of self-learning.</p>
          </SlidingDiv>
          <SlidingDiv direction={"left"} className="flex flex-col gap-4 text-left text-2xl row-start-2 justify-center size-full">
            <h2 className="xs:text-lg sm:text-2xl md:text-4xl lg:text-7xl uppercase font-bold"  >Our Vision</h2>
            <p className="text-xs sm:text:sm md:text-lg lg:text-2xl">To reinvent K-12 education into a system that creates a nurturing environment for curiosity, creativity, and critical thinking, enabling every child to reach their full potential, understand themselves, and play a positive role in the larger community, paving the way for a brighter future for all.</p>
          </SlidingDiv>
        </div>
      </section> */}
      <section className="flex flex-col p-8 gap-8 px-20 md:px-40">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl text-center font-bold uppercase">Our Goals</h3>
        <div className="flex flex-col md:flex-row gap-8  justify-center">
          {goals.map((goal, index) => <GoalCard key={goal.title} {...goal} index={index} />)}
        </div>
      </section>
      {/* <section className="bg-[#F3EEE8] p-16 flex gap-8 justify-center items-start">
        <div className="rounded-md flex flex-col sm:flex-row lg:flex-col xs:gap-2 sm:gap-8 justify-end items-end gap-px">
          <div className="max-w-[400px]">
            <img src="/landingpage/services.png" alt="" />
          </div>
          
          <SlidingDiv direction="bottom" repeat={true} className="flex flex-col xl:gap-2 max-w-[500px] xl:text-right">
            <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl">Meet our Team</h2>
            <p className="text-base md:text-xl lg:text-xl xl:text-2xl">Meet our dedicated team of education experts and innovators, committed to revolutionizing K-12 education through research-based practices and accessible resources.</p>
          </SlidingDiv>
        </div>
        <div className="flex-1 p-3 grid grid-cols-3 gap-4">
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>

          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
          <TeamCard corner={"tl"}/>
        </div>
      </section>
      <Footer /> */}
    </div>
  )
}
