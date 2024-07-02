import { HexagonPlayButton } from "@/components/HexagonPlayButton"

export const FAQSection = () => {

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">FAQs</div>
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white text-lg">FAQs</div>
      <div className="flex-1 flex flex-col gap-4 xl:gap-8 text-white">
        <p className="text-xs md:text-base">
          Got questions? We've got answers. Explore our frequently asked questions to find everything you need to know about Elements Learning and our educational offerings. Whether it's about out products, services, or educational philosophy, we're here to provide clarity and support your learning journey. 
        </p>
        <div className="flex flex-col text-sm md:text-bas md:px-4 gap-2 xl:px-8">
          <div className="flex items-center gap-2">
            <div className="size-10">
              <HexagonPlayButton outerColor="#FABB41" />
            </div>
            <p className="flex items-end py-1 w-full border-b border-white">What is Elements Learning (EL)?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <HexagonPlayButton outerColor="#FABB41" />
            </div>
            <p className="flex items-end py-1 w-full border-b border-white">Are Elements Learning's products suitable for both teachers and parents?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <HexagonPlayButton outerColor="#FABB41" />
            </div>
            <p className="flex items-end py-1 w-full border-b border-white">What educational services does EL offer?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <HexagonPlayButton outerColor="#FABB41" />
            </div>
            <p className="flex items-end py-1 w-full border-b border-white">Are math manipulative tools safe for children to use?</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <HexagonPlayButton outerColor="#FABB41" />
            </div>
            <p className="flex items-end py-1 w-full border-b border-white">What sets EL apart from other educational platforms?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
