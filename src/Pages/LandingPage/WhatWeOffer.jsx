import { useState } from "react"
import { HexagonPlayButton } from "../../components/HexagonPlayButton"
import { LinkButton } from "../../components/LinkButton"
import { SlidingDiv } from "../../components/SlidingDiv"

const services = [
  {
    title: "Early Childhood Education (ECE) and Parenting",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/ece.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "Maths",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/maths.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "Language",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/language.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "Science",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/science.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "Social Science",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/socialscience.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "STEAM (connected learning)",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/steam.png",
    link: "/",
    linkText: "Learn more"
  },
  {
    title: "Ed Tech",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, animi quae quam magnam facere eos modi natus, ipsum temporibus perferendis officiis ex laboriosam distinctio molestiae nisi rerum a dolorem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci vero deleniti, incidunt qui omnis et est aspernatur a mollitia architecto ab debitis corrupti rerum accusantium. Sapiente laborum reiciendis labore.",
    illustrationSrc: "/landingpage/edtech.png",
    link: "/",
    linkText: "Learn more"
  }
]

const ServiceTab = ({title, content, illustrationSrc, link, linkText, open, onClick}) => {

  return (
    <>
      <div className="flex flex-col gap-2 flex-1">
        <div onClick={onClick} className={`p-1 rounded-full rounded-br-none font-bold text-xs xs:text-base sm:text-xl md:text-2xl lg:text-xl flex items-center gap-2 group transition-colors ${open ? "bg-[#FBBA41] delay-300 duration-700" : "bg-transparent delay-0 duration-0"}`}>
          <div className="size-6 xs:size-8 sm:size-12 xl:size-16 relative">
            {!open ? 
            <>
            <div className="absolute inset-0 transition-opacity duration-700 size-full opacity-100 group-hover:opacity-0">
              <HexagonPlayButton outerColor="#FCBA42" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-700 size-full opacity-0 group-hover:opacity-100">
              <HexagonPlayButton outerColor="#FFFFFF" innerColor="#000000" />
            </div>
            </>:
            <div className="size-full">
              <HexagonPlayButton innerColor="#000000" outerColor="#FFFFFF" />
            </div>}
          </div>
          <p className="flex-1">{title}</p>
        </div>

        <div className={`flex gap-2 duration-700 transition-all ${open ? "h-72 xs:h-60 sm:h-72 lg:h-[400px] xl:h-[500p  opacity-100" : "h-0 overflow-hidden opacity-0"}`}>
          <div className="flex flex-1 flex-col gap-2 items-start">
            <p className="text-xs sm:text-base md:text-lg lg:text-sm xl:text-lg">
              <img src={illustrationSrc} className="w-24 p-4 xs:w-32 sm:w-40 md:w-48 lg:w-32 xl:w-64 h-fit float-start" />
              {content}
            </p>

            <LinkButton to={link} text={linkText} textColor="#FBBA41" bgColor="#353535" />
          </div>
        </div>
      </div>
    </>
  )
}

export const WhatWeOffer = () => {

  const [openedIndex, setOpenedIndex] = useState(0);
  const [opened, setOpened] = useState([false, false, false, false, false, false, false]);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="rounded-md flex flex-col sm:flex-row lg:flex-col xs:gap-2 sm:gap-8 justify-end items-end gap-px">
          <div className="max-w-[500px]">
            <img src="/landingpage/services.png" alt="" />
          </div>
          
          <SlidingDiv direction="bottom" repeat={true} className="flex flex-col xl:gap-2 max-w-[500px] xl:text-right">
            <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">What we offer</h2>
            <p className="text-base sm:text-md md:text-xl lg:text-xl">Transforming education at every level, Elements Learning System offers holistic solutions for K-12 success. Backed by NUST, we are merging experience with innovation to shape future leaders.</p>
          </SlidingDiv>
        </div>
        <div className="flex-1 flex flex-col xl:gap-2">

          {services.map((service, index) => (
            <ServiceTab
              key={service.title}
              title={service.title}
              content={service.content}
              illustrationSrc={service.illustrationSrc}
              link={service.link}
              linkText={service.linkText}
              // open={opened[index]}
              // onClick={() => setOpened(o => o.map((o, i) => i === index ? !o : o))}
              open={index===openedIndex}
              onClick={() => setOpenedIndex(index)}
            />
          ))}
          
        </div>
      </div>
    </>
  )
}
