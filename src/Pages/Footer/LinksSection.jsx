import { HashLink } from "react-router-hash-link"

export const LinksSection = () => {

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Links</div>
      <div className="flex-1 grid text-sm md:text-base grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 text-white">
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"/about"} className="font-bold text-lg underline">About Us</HashLink>
          <HashLink to={"/about#prospects"}>Our Vision</HashLink>
          <HashLink to={"/about#prospects"}>Our Mission</HashLink>
          <HashLink to={"/about#goals"}>Our Goals</HashLink>
          <HashLink to={"/about#team"}>Our Team</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink  to={"/services"} className="font-bold text-lg underline">Services</HashLink>
          <HashLink  to={"/services"}>Trainings</HashLink>
          <HashLink  to={"/services"}>Curriculum Review</HashLink>
          <HashLink  to={"/services"}>Environment Design</HashLink>
          <HashLink className="opacity-0">-</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"https://elemaths.shop/products/"} target="_blank" className="font-bold text-lg underline">Products</HashLink>
          <HashLink to={"https://elemaths.shop/products/"} target="_blank">Mathematics</HashLink>
          <HashLink to={"https://elemaths.shop/product-category/maths-lab/"}>Maths Lab</HashLink>
          <HashLink to={"https://elemaths.shop/"} target="_blank">Olympiad</HashLink>
          <HashLink to={"https://elemaths.shop/"} target="_blank">E Tutor</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"/contact"} className="font-bold text-lg underline">Contact Us</HashLink>
          <HashLink to={"/contact#info"}>Details</HashLink>
          <HashLink to={"/contact#form"}>Contact Form</HashLink>
          <HashLink to={"/contact#location"}>Location</HashLink>
          <HashLink className="opacity-0">-</HashLink>
        </div>
      </div>
    </div>
  )
}
