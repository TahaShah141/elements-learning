import { FadeIn } from "../components/FadeIn"
import { Footer } from "../components/Footer"
import { LinkButton } from "../components/LinkButton"
import { SlidingDiv } from "../components/SlidingDiv"
import { StaggeredHeaders } from "../components/StaggeredHeaders"

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
    <SlidingDiv direction={"top"} delay={index*0.5} className="flex flex-col flex-1 rounded-[50px] overflow-hidden rounded-tl-none gap-4 max-w-md bg-[#F3EEE8]">
      <div className="w-full h-96 bg-neutral-200">
        {/* <img src={src} alt="" className="size-full" /> */}
      </div>
      <div className="flex flex-col text-lg gap-4 p-10 items-start">
        <p>{content}</p>
        <LinkButton textColor={"#FFFFFF"} bgColor="#FBBA41" text={"More Info"} />
      </div>
    </SlidingDiv>
  )
}

const BlogCard = ({title, src, desc, comments, likes, date, author, index}) => {
  return (
    <div className="w-full p-10 rounded-[50px] rounded-br-none flex justify-center items-center gap-10 shadow-md bg-white border">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col">
          <h4 className="font-bold text-3xl">{title}</h4>
          <p>{author}</p>
          <p>{date}</p>
        </div>
        
        <p>{desc}</p>
        
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
      <div className="size-64 rounded-[30px] rounded-br-none bg-neutral-300">

      </div>
    </div>
  )
}

export const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-8 w-full flex gap-20 justify-center items-center">
        <StaggeredHeaders headers={["News and", "Blogs"]} containerClass="text-8xl font-bold" direction="left" />
        <div className="max-w-[600px]">
          <img src="/newsandblogspage/newsandblogs.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col p-16 gap-8 px-40">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl min-[900px]:text-cente font-bold uppercase">News</h3>
        <div className="flex gap-8 justify-center">
          {news.map((goal, index) => <NewsCard key={goal.title} {...goal} index={index} />)}
        </div>
      </section>
      <section className="bg-[#F3EEE8] p-16 lg:p-20 flex flex-col gap-8">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl min-[900px]:text-cente font-bold uppercase">Blogs</h3>
        {blogs.map(blog => <BlogCard {...blog} />)}        
      </section>
      <section className="flex flex-col items-center">
        <div className="flex bg-[#FBBA42] translate-y-1/4 w-4/5 flex-col p-12 justify-center items-center gap-8">
          <div className="flex flex-col text-lg gap-1 items-center">
            <h4 className="font-bold text-4xl">Join Our Community</h4>
            <p>Sign up for our newsletter and get fresh articles, freebies, advice and more 3 times a week.</p>
          </div>
          <div className="flex gap-4 justify-center p-2 px-16 w-full">
            <input type="text" placeholder="Full Name" className="flex-1 px-2" />
            <input type="text" placeholder="Email" className="flex-1 px-2" />
            {/* <LinkButton text="Submit" bgColor={"#404040"} textColor={"#FFFFFF"} /> */}
            <button className="p-2 bg-[#404040] text-white font-bold px-4">Submit</button>
          </div>
        </div>
        <div className="bg-[#353535] h-10 w-full"></div>
      </section>
      <Footer />
    </div>
  )
}
