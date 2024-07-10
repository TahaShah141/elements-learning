import { BlogPage } from "@/components/blogComponents/BlogPage"
import { allBlogs } from "@/constants/Blogs/allBlogs"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { useScrollToTop } from "@/lib/useScrollToTop"

export const Blog = () => {

  useScrollToTop()

  const { blogID } = useParams()
  const navigate = useNavigate()

  const [currentBlog, setCurrentBlog] = useState()

  useEffect(() => {
    const newBlog = allBlogs.find(blog => blog.id === blogID)
    if (newBlog) setCurrentBlog(newBlog)
    else navigate("/404")
  }, [blogID])

  return (
    <>
      <BlogPage {...currentBlog} /> 
      <Footer />
    </>
  )
}
