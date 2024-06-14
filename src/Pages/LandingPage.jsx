import Carousel from "../components/Carousel"
import { EventCard } from "../components/EventCard"
import { Footer } from "../components/Footer"
import { HexagonPlayButton } from "../components/HexagonPlayButton"
import { PuzzlePiece } from "../components/PuzzlePiece"
import { SlidingDiv } from "../components/SlidingDiv"
import { TestimonialCard } from "../components/TestimonialCard"

const RightArrow = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" fill="currentColor"/></svg>
  )
}

const puzzles = [
  {
    letter: "T",
    header: "Transfer",
    meaning: "knowledge",
    color: "#E03697"
  },
  {
    letter: "S",
    header: "Storytelling",
    meaning: "immersive",
    color: "#6C3A94"
  },
  {
    letter: "R",
    header: "Reflective",
    meaning: "practice",
    color: "#75BF44"
  },
  {
    letter: "Q",
    header: "Questioning",
    meaning: "thoughtful",
    color: "#02AEEE"
  },
  {
    letter: "P",
    header: "Playful",
    meaning: "exploration",
    color: "#FBBA42"
  },
]

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="bg-[#F3EEE8] w-full flex justify-center gap-24">
        <div className="py-24 max-w-lg flex flex-col gap-8">
          {/* <SlidingDiv direction={"left"} px={10}> */}
          <div className="text-8xl text-[#353535] font-bold">
            <h1>Life</h1>
            <h1>Long</h1>
            <h1>Learning.</h1>
          </div>
          {/* </SlidingDiv> */}
          <p className="text-lg">Welcome to Elements Learning (EL), where we're reshaping K-12 education from the ground up.</p>
          <div className="flex gap-4">
            <button className="p-4 bg-[#E7BA42] text-xl text-white font-bold flex items-center">
              <p>Trainings</p>
              <RightArrow className={"w-8"} />
            </button>
            <button className="p-4 text-xl text-[#E7BA42] bg-[#353535] font-bold flex items-center">
              <p>Trainings</p>
              <RightArrow className={"w-8"} />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/5 gap-4">
          <div className="h-24 flex gap-4">
            <div className="flex-1 bg-[#74BE43] rounded-bl-[72px]"></div>
            <div className="flex-1"></div>
          </div>
          <div className="flex flex-[2_0_0] gap-4">
            <div className="flex-1 bg-[#F8EA01] rounded-[72px] rounded-br-none"></div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex-1 bg-[#F67E1F] rounded-[72px] rounded-bl-none"></div>
              <div className="flex-1 bg-[#02AEEE] rounded-[72px] rounded-tr-none"></div>
            </div>
          </div>
          <div className="h-24 flex gap-4">
            <div className="flex-1"></div>
            <div className="flex-1 bg-[#FBBB40] rounded-tr-[72px]"></div>
          </div>
        </div>
      </section>

      <section className="h-screen">

      </section>

      <section className="flex flex-row-reverse h-80 w-full bg-red-400">
        {puzzles.map((puzzle, i) => 
          <PuzzlePiece reverseOrder={i % 2 === 1} showTab={i !== 0} {...puzzle} />
        )}
      </section>

      
      <section className="flex container p-20 gap-8 flex-col justify-center">
        <div className="flex gap-16 justify-center items-center">
          <div className="flex flex-col items-end">
            <h2 className="text-huge font-bold">4</h2>
            <h3 className="text-8xl font-semibold uppercase">Pillars</h3>
            <h5 className="text-7xl font-thin">of Education</h5>
          </div>
          <div className="bg-neutral-100 rounded-3xl size-[600px] p-2">
            
          </div>
        </div>
        <SlidingDiv direction="bottom" px={50}>
        <div className="px-40">
          <p className="text-lg">
            Quality education rides on the sturdy foundation of four crucial components: well-crafted teaching materials to engage and enlighten, continuous teacher training to inspire and empower, rigorous assessments to measure progress and potential, and dynamic school leadership to steer towards excellence. These wheels form the backbone of a holistic educational journey.
          </p>
        </div>
        </SlidingDiv>
      </section>

      <section className="bg-[#F3EEE8] p-20 w-full" >
        <div className="flex gap-8 px-12">

          <div className="rounded-md flex flex-col justify-end items-end gap-px">
            <div className="size-[500px]">
              <img src="/services.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 w-[500px] text-right">
              <h2 className="uppercase font-bold text-5xl">What we offer</h2>
              <p className="text-2xl">Transforming education at every level, Elements Learning System offers holistic solutions for K-12 success. Backed by NUST, we are merging experience with innovation to shape future leaders.</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">

            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>Early Childhood Education (ECE) and Parenting</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="p-1 rounded-full rounded-br-none bg-[#FBBA41] font-bold text-xl flex items-center gap-2">
                <div className="size-16">
                  <HexagonPlayButton innerColor="#000000" outerColor="#FFFFFF" />
                </div>
                <p>Math</p>
                
              </div>
              <div className="flex flex-1 gap-4 p-4">
                <img src="/math.png" className="size-72" />
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.
                  </p>
                  <button className="p-4 text-lg text-[#E7BA42] bg-[#353535] font-bold flex items-center w-fit">
                    <p>Trainings</p>
                    <RightArrow className={"w-8"} />
                  </button>

                </div>
              </div>
            </div>

            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>Language</p>
            </div>
            
            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>Science</p>
            </div>
            
            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>Social Science</p>
            </div>
            
            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>STEAM (connected learning)</p>
            </div>
            
            <div className="flex items-center font-bold gap-2 text-xl">
              <div className="size-16">
                <HexagonPlayButton outerColor="#FCBA42" />
              </div>
              <p>Ed Tech</p>
            </div>
            
          </div>

        </div>
      </section>

      <section className="flex gap-8 px-48 py-10 items-center">
        <div className="h-48 aspect-video bg-neutral-200 rounded-lg"></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur alias optio maxime eveniet, officia ipsum! Optio cum sequi, ipsam quo est debitis enim officia, doloribus non dignissimos iusto fuga commodi error obcaecati quidem consectetur dolores dolor ad aliquam amet cumque maxime. Minima beatae possimus veniam optio a ullam quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor facilis, porro illo harum deleniti provident voluptas magni praesentium distinctio? Explicabo, quas ab! Praesentium, sint.</p>
      </section>

      <section className="bg-[#F3EEE8] w-full gap-8 p-10 flex justify-center">
        <div className="flex flex-col gap-2">
          <img src="/students.png" className="size-56" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">10000+</p>
            <p className="text-xl">Students</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src="/teachers.png" className="size-56" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">3000+</p>
            <p className="text-xl">Teachers</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src="/parents.png" className="size-56" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">1000+</p>
            <p className="text-xl">Parents</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src="/schools.png" className="size-56" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-xl">Schools</p>
          </div>
        </div>
      </section>

      <section className="w-full p-2">

      </section>

      <section className="bg-[#F3EEE8] w-full flex justify-center">
        <div className="container p-20 flex justify-center">
          <Carousel items={Array.from(Array(5)).map((_, i) =>
            <EventCard title={"Test Event "+(i+1)} date={"12-06-2024"}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit officia aut odit voluptas ullam omnis eveniet ipsa sequi recusandae perspiciatis culpa necessitatibus laudantium reprehenderit quo ab neque quaerat tempore ut vero error, voluptatibus ipsam itaque. Officia unde cumque dolorum quo nesciunt omnis asperiores, perferendis nulla soluta. Molestiae commodi perspiciatis sit saepe omnis porro mollitia natus, illo aliquid fuga reiciendis velit explicabo quam accusamus enim animi. Iusto quod, ipsam aut illum reprehenderit nam nulla sequi aperiam eligendi voluptatibus fugit magnam ut, totam architecto praesentium tempore, doloremque nisi at cupiditate ratione consequuntur natus. Nesciunt iusto illum cumque odit molestias expedita dolorem."} />
            )} />
        </div>
      </section>

      <section className="w-full p-20 flex justify-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="size-96">
            <img src="/testimonial.png" alt="" />
          </div>
          <div className="flex flex-col text-5xl font-bold uppercase items-end">
            <p>What</p>
            <p>Others</p>
            <p>Say About</p>
            <p>Us</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center">
          <button className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-16">
            <HexagonPlayButton outerColor="#FABB41" />
          </button>
          <TestimonialCard person={"Teacher Trainee - AJK"}
          quote={"As an experienced educator, I thought I had seen it all, but this training opened my eyes to new possibilities and approaches in teaching. The sessions were well-structured, practical, and tailored to the needs of educators. I particularly appreciated the focus on student-centered learing, differentiated instructions, and the integration of tooks/technology in teaching Maths."} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
