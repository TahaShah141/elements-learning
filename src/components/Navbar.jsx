import { NavLink } from "react-router-dom"
import "../Styles/links.css"

const navLinkClassName = ({isActive}) => {
  return (isActive ? "text-[#FBBA41]" : "")
}

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-center py-4 px-20 border-b-2 border-[#FABF23]">
      <div className="container flex justify-between">
        <div className="flex gap-2">
          <img src="/logo.png" className="h-12" alt="" />
        </div>
        <div className="flex gap-10 items-center navlinks">
          <NavLink to="/" className={navLinkClassName}>About Us</NavLink>
          <NavLink to="/services" className={navLinkClassName}>Services</NavLink>
          <NavLink to="/products" className={navLinkClassName}>Products</NavLink>
          <NavLink to="/blogs" className={navLinkClassName}>News & Blogs</NavLink>
          <NavLink to="/contact" className={navLinkClassName}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  )
}
