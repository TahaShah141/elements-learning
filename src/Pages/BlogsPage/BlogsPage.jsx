import { allBlogs } from "@/constants/Blogs/allBlogs"
import { BlogCard } from "./BlogCard"
import { StaggeredHeaders } from "@/components/StaggeredHeaders"
import { Footer } from "../Footer/Footer"

export const BlogsPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["Blogs"]} containerClass="text-3xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <img src="/newsandupdatespage/newsandupdates.png" alt="" />
        </div>
      </section>
      <div className="p-4 md:p-8 xl:p-16 flex flex-wrap gap-4">
        {allBlogs.map(blog => <BlogCard {...blog} />)}
        {allBlogs.map(blog => <BlogCard {...blog} />)}
      </div>
      <Footer />
    </div>
  )
}
