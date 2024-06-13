import { NavLink } from "react-router-dom"
import "../Styles/links.css"

const navLinkClassName = ({isActive}) => {
  return (isActive ? "text-[#E7BA42]" : "")
}

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-center py-4 px-20 border-b-2 border-[#FABF23]">
      <div className="container flex justify-between">
        <div className="flex gap-2">
          <div className="w-12 bg-neutral-100">
            <img src="/logo.png"/>
          </div>
          <div className="flex flex-col font-bold tracking-widest justify-center">
            <p>ELEMENTS</p>
            <p>LEARNING</p>
          </div>
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
