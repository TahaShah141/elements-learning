import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const navLinkClassName = ({isActive}) => {
  return `transition-all duration-500 border-b-2 hover:border-[#FBBA41] ${(isActive ? "border-[#FBBA41]" : "border-transparent")}`
}

const tailwindClasses = ["top-0", "right-0", "bottom-0", "left-0"]

const NavOption = ({text, link, children, clamp="left"}) => {
  if (!children) {
    return (
      <NavLink to={link} className={navLinkClassName}>{text}</NavLink>
    )
  } else {
    return (
      <div className="relative group p-1">
        <div className="flex items-center">
          <NavLink to={link} className={navLinkClassName}>{text}</NavLink>
          <svg className="size-5 group-hover:rotate-90 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,17L15,12L10,7V17Z" fill="currentColor"/></svg>
        </div>
        <div className={`absolute flex flex-col items-start gap-2 translate-y-full overflow-clip text-nowrap ${clamp}-0 bottom-0 h-0 w-0 group-hover:w-48 group-hover:h-fit group-hover:p-4 bg-white  transition-all duration-300 shadow-md rounded-lg border`}>
          {children}
        </div>
      </div>
    )
  }
}

export const Navbar = () => {

  const [opened, setOpened] = useState(false)

  return (
    <>
    <nav className="hidden min-[700px]:flex w-full justify-center py-4 px-10 xl:px-20 border-b-2 border-[#FABF23]">
      <div className="w-full flex justify-between items-center text-sm lg:text-base ">
        <Link to={"/"} className="flex gap-2">
          <img loading="lazy" src="/logo.png" className="h-12 sm:h-8 md:h-12" alt="" />
        </Link>
        <div className="flex gap-2 xl:gap-10 items-center">
          <NavOption text="About Us" link="/about">
            <NavLink to="/about" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Mission & Vision</NavLink>
            <NavLink to="/about" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Our Team</NavLink>
          </NavOption>
          <NavOption text="What We Offer" link="/services">
            <NavLink to="/services#ece" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>ECE</NavLink>
            <NavLink to="/services/maths" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Maths</NavLink>
            <NavLink to="/services" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Language</NavLink>
            <NavLink to="/services" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Social Science</NavLink>
            <NavLink to="/services" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Science</NavLink>
            <NavLink to="/services" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>STEAM</NavLink>
            <NavLink to="/services" className={`transition-all duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Ed Tech</NavLink>
          </NavOption>
          <NavOption text="News & Blogs" link="/blogs" />
          <NavOption text="Contact Us" link="/contact" />
        </div>
      </div>
    </nav>
    <nav className="flex min-[700px]:hidden flex-col gap-2 w-full justify-center py-4 px-10 xl:px-20 border-b-2 border-[#FABF23]">
      <div className="w-full flex justify-between items-center text-sm lg:text-base ">
        <Link to={"/"} className="flex gap-2">
          <img loading="lazy" src="/logo.png" className="h-8 md:h-12" alt="" />
        </Link>
        <div className="relative group">
          <button className="size-6 flex flex-col justify-around" onClick={() => setOpened(!opened)}>
            <span className={`w-full transition-all duration-200 p-px bg-black ${opened ? "rotate-45 translate-y-2" : "transform-none"}`}></span>
            <span className={`w-full p-px bg-black ${opened ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-full transition-all duration-200 p-px bg-black ${opened ? "-rotate-45 -translate-y-2" : "transform-none"}`}></span>
          </button>
        </div>
      </div>
      <div className={`w-full transition-all duration-300 overflow-hidden ${opened ? "h-48" : "h-0"}`}>
        <div className="flex flex-col h-full text-xl gap-4 xl:gap-10 justify-center items-center">
          {/* <NavOption text="About Us" link="/about" />
          <NavOption text="What We Offer" link="/services" />
          <NavOption text="News & Blogs" link="/blogs" />
          <NavOption text="Contact Us" link="/contact" /> */}
          <NavLink to="/about" className={`border-b-2 border-[#FBBA41]`}>About Us</NavLink>
          <NavLink to="/services" className={`border-b-2 border-[#FBBA41]`}>What we Offer</NavLink>
          <NavLink to="/blogs" className={`border-b-2 border-[#FBBA41]`}>News & Blogs</NavLink>
          <NavLink to="/contact" className={`border-b-2 border-[#FBBA41]`}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}
