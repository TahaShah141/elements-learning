import { Link, NavLink } from "react-router-dom"
import "../Styles/links.css"

const navLinkClassName = ({isActive}) => {
  return (isActive ? "text-[#FBBA41]" : "")
}

const tailwindClasses = ["top-0", "right-0", "bottom-0", "left-0"]

const NavOption = ({text, link, children, clamp="left"}) => {
  console.log(children)
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
  return (
    <nav className="flex w-full justify-center py-4 px-20 border-b-2 border-[#FABF23]">
      <div className="container flex justify-between">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.png" className="h-12" alt="" />
        </Link>
        <div className="flex gap-10 items-center navlinks">
          <NavOption text="About Us" link="/about">
            <NavLink to="/about" className={navLinkClassName}>Mission & Vision</NavLink>
            <NavLink to="/about" className={navLinkClassName}>Our Team</NavLink>
          </NavOption>
          <NavOption text="What We Offer" link="/services">
            <NavLink to="/services" className={navLinkClassName}>ECE</NavLink>
            <NavLink to="/services" className={navLinkClassName}>Maths</NavLink>
            <NavLink to="/services" className={navLinkClassName}>Language</NavLink>
            <NavLink to="/services" className={navLinkClassName}>Social Science</NavLink>
            <NavLink to="/services" className={navLinkClassName}>Science</NavLink>
            <NavLink to="/services" className={navLinkClassName}>STEAM</NavLink>
            <NavLink to="/services" className={navLinkClassName}>Ed Tech</NavLink>
          </NavOption>
          <NavOption text="News & Blogs" link="/blogs" />
          <NavOption text="Contact Us" link="/contact" />
        </div>
      </div>
    </nav>
  )
}
