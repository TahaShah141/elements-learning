import { Footer } from "@/components/Footer"
import { LinkButton } from "@/components/LinkButton"
import { SlidingDiv } from "@/components/SlidingDiv"
import { StaggeredHeaders } from "@/components/StaggeredHeaders"
import { CarouselWithIndicators } from "@/components/custom/CarouselWithIndicators"


const news = [
  {
    content: "We prioritize accessibility by providing easily accessible learning resources for educators, parents, and students; ensuring seamless experiences for all.",
    link: "#"
  },
  {
    content: "We prioritize accessibility by providing easily accessible learning resources for educators, parents, and students; ensuring seamless experiences for all.",
    link: "#"
  },
  {
    content: "We prioritize accessibility by providing easily accessible learning resources for educators, parents, and students; ensuring seamless experiences for all.",
    link: "#"
  },
]

const blogs = [
  {
    title: "Imposter Syndrome",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde.",
    date: "5d ago",
    author: "Laura.blackmoonlith.art.blog",
    comments: 58,
    likes: 23
  },
  {
    title: "Imposter Syndrome",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde.",
    date: "5d ago",
    author: "Laura.blackmoonlith.art.blog",
    comments: 58,
    likes: 23
  },
  {
    title: "Imposter Syndrome",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur animi eligendi quasi impedit possimus, itaque illo quis. Porro, reiciendis unde.",
    date: "5d ago",
    author: "Laura.blackmoonlith.art.blog",
    comments: 58,
    likes: 23
  },
]

const NewsCard = ({src, content, link, index}) => {
  return (
    <SlidingDiv direction={"top"} delay={index*0.5} className="flex flex-col flex-1 rounded-[50px] overflow-hidden rounded-tl-none gap-4 md:max-w-md bg-[#F3EEE8]">
      <div className="w-full md:h-64 lg:h-72 xl:h-96 aspect-square bg-neutral-400">
        {/* <img loading="lazy" src={src} alt="" className="size-full" /> */}
      </div>
      <div className="flex flex-col flex-1 text-xs md:text-sm lg:text-base xl:text-xl gap-4 p-8 md:p-6 lg:p-6 xl:p-10 items-start">
        <p>{content}</p>
        <LinkButton textColor={"#FFFFFF"} bgColor="#FBBA41" text={"More Info"} />
      </div>
    </SlidingDiv>
  )
}

const BlogCard = ({title, src, desc, comments, likes, date, author, index}) => {
  return (
    <div className="w-full p-6 pb-8 lg:p-10 rounded-[50px] md:flex-row-reverse lg:flex-row rounded-br-none flex flex-col-reverse justify-center items-center gap-4 lg:gap-10 shadow-md bg-white border">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col text-xs xs:text-sm md:text-base">
          <h4 className="font-bold text-xl xs:text-2xl sm:text-3xl">{title}</h4>
          <p>{author}</p>
          <p>{date}</p>
        </div>
        
        <p className="text-xs xs:text-sm md:text-base">{desc}</p>
        
        <div className="flex font-semibold gap-4">
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>share-outline</title><path d="M14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12L14,5M16,9.83L18.17,12L16,14.17V12.9H14C11.93,12.9 10.07,13.28 8.34,13.85C9.74,12.46 11.54,11.37 14.28,11L16,10.73V9.83Z" /></svg>
            Share
          </div>
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>comment-outline</title><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" /></svg>
            {comments}
          </div>
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>
            {likes}
          </div>
        </div>
      </div>
      <div className="w-full h-64 md:size-48 lg:size-64 rounded-[30px] rounded-br-none bg-neutral-300">

      </div>
    </div>
  )
}

export const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["News", "&", "Blogs"]} containerClass="text-3xl min-[400px]:block hidden text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold" direction="left" />
        <StaggeredHeaders headers={["News & Blogs"]} containerClass="text-3xl min-[400px]:hidden text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <img loading="lazy" src="/newsandblogspage/newsandblogs.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col p-4 md:px-8 lg:p-12 xl:p-20">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl text-left font-bold uppercase">News</h3>
        <div className="p-8 lg:p-4">
          <CarouselWithIndicators 
          itemClassName="sm:basis-1/2 lg:basis-1/3 flex justify-center" 
          contentClassName="" 
          indicatorClassName="md:hidden"
          items={news.map((goal, index) => <NewsCard key={goal.title} {...goal} index={index} />)}
          />
        </div>
      </section>
      <section className="bg-[#F3EEE8] p-6 xs:p-8 md:p-16 lg:p-20 flex flex-col gap-8">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl text-left font-bold uppercase">Blogs</h3>
        {blogs.map(blog => <BlogCard {...blog} />)}        
      </section>
      <section className="flex flex-col items-center">
        <div className="flex bg-[#FBBA42] translate-y-1/4 w-4/5 flex-col p-5 lg:p-12 justify-center items-center gap-8">
          <div className="flex flex-col text-lg gap-1 items-center">
            <h4 className="font-bold text-lg md:text-2xl lg:text-4xl">Join Our Community</h4>
            <p className="text-sm md:text-base" >Sign up for our newsletter and get fresh articles, freebies, advice and more 3 times a week.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4 justify-center lg:p-2 lg:px-16 w-full">
            <input type="text" placeholder="Full Name" className="flex-1 px-2 p-2 text-sm" />
            <input type="text" placeholder="Email" className="flex-1 px-2 p-2 text-sm" />
            <button className="p-2 lg:p-2 bg-[#404040] text-white font-bold px-4 text-sm">Submit</button>
          </div>
        </div>
        <div className="bg-[#353535] h-20 md:h-16 lg:h-20 w-full"></div>
      </section>
      <Footer />
    </div>
  )
}
