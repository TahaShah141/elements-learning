import { Link } from "react-router-dom"

export const LinksSection = () => {

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Links</div>
      <div className="flex-1 grid text-sm md:text-base grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 text-white">
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <Link to={"/about"} className="font-bold text-lg underline">About Us</Link>
          <Link to={"/about#vision"}>Our Vision</Link>
          <Link to={"/about#missions"}>Our Mission</Link>
          <Link to={"/about#goals"}>Our Goals</Link>
          <Link to={"/about#team"}>Our Team</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <Link  to={"/services"} className="font-bold text-lg underline">Services</Link>
          <Link  to={"/services"}>Trainings</Link>
          <Link  to={"/services"}>Curriculum Review</Link>
          <Link  to={"/services"}>Environment Design</Link>
          <Link className="opacity-0">-</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <Link to={"https://elemaths.shop/products/"} target="_blank" className="font-bold text-lg underline">Products</Link>
          <Link to={"https://elemaths.shop/products/"} target="_blank">Mathematics</Link>
          <Link to={"https://elemaths.shop/product-category/maths-lab/"}>Maths Lab</Link>
          <Link to={"https://elemaths.shop/"} target="_blank">Olympiad</Link>
          <Link to={"https://elemaths.shop/"} target="_blank">E Tutor</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <Link to={"/contact"} className="font-bold text-lg underline">Contact Us</Link>
          <Link to={"/contact#info"}>Details</Link>
          <Link to={"/contact#form"}>Contact Form</Link>
          <Link to={"/contact#location"}>Location</Link>
          <Link className="opacity-0">-</Link>
        </div>
      </div>
    </div>
  )
}
