import { NavLink } from "react-router-dom"

const navLinkClassName = ({isActive}) => {
  return (isActive ? "bg-red-400" : "")
}

export const Navbar = () => {
  return (
    <div className="flex p-4 bg-neutral-50 justify-between">
      <div>
        <h1>Elements Learning</h1>
      </div>
      <div className="flex gap-4 items-center">
        <NavLink className={navLinkClassName} to={"/"}>Home</NavLink>
        <NavLink className={navLinkClassName} to={"/contact"}>Contact</NavLink>
        <NavLink className={navLinkClassName} to={"/about"}>About</NavLink>
      </div>
    </div>
  )
}
