import { PuzzlePiece } from "../components/PuzzlePiece"
import { SlidingDiv } from "../components/SlidingDiv"

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
          <div className="text-8xl text-neutral-800 font-bold">
            <h1>Life</h1>
            <h1>Long</h1>
            <h1>Learning.</h1>
          </div>
          <p className="text-lg">Welcome to Elements Learning (EL), where we're reshaping K-12 education from the ground up.</p>
          <div className="flex gap-4">
            <button className="p-4 bg-[#E7BA42] text-xl text-white font-bold flex items-center">
              <p>Trainings</p>
              <RightArrow className={"w-8"} />
            </button>
            <button className="p-4 text-xl text-[#E7BA42] bg-neutral-800 font-bold flex items-center">
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

      <section className="h-screen flex flex-col justify-center">
        <SlidingDiv direction={"left"} px={100}>
          <div className="p-16">
            <div className="bg-neutral-200 rounded-xl p-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt corporis eius debitis impedit doloribus quas dolorum amet dolores praesentium, voluptate quam modi, possimus ducimus consectetur omnis eveniet quisquam soluta.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique, neque voluptatum veniam asperiores adipisci, corporis fuga modi omnis numquam atque voluptas illum perspiciatis laborum, unde porro a mollitia nisi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique, neque voluptatum veniam asperiores adipisci, corporis fuga modi omnis numquam atque voluptas illum perspiciatis laborum, unde porro a mollitia nisi.
            </div>
          </div>
        </SlidingDiv>
      </section>

      <section className="flex flex-row-reverse h-80 w-full bg-red-400">
        {puzzles.map((puzzle, i) => 
          <PuzzlePiece reverseOrder={i % 2 === 1} showTab={i !== 0} {...puzzle} />
        )}
      </section>
    </div>
  )
}
