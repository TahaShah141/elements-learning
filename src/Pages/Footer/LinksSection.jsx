import { HashLink } from "react-router-hash-link"

export const LinksSection = () => {

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Links</div>
      <div className="flex-1 grid text-sm md:text-base px-10   bg-red-5 grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 text-white">
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"/about"} className="font-bold text-lg sm:pb-6 hover:underline">About Us</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/about#prospects"}>Our Vision</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/about#prospects"}>Our Mission</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/about#goals"}>Our Goals</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/about#team"}>Our Team</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink  to={"/services"} className="font-bold text-lg sm:pb-6 hover:underline">Services</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}   to={"/services"}>Trainings</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}  to={"/services"}>Curriculum Review</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}  to={"/services"}>Environment Design</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight opacity-0"} >-</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"https://elemaths.shop/products/"} target="_blank" className="font-bold text-lg sm:pb-6 hover:underline">Products</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"https://elemaths.shop/products/"} target="_blank">Mathematics</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"https://elemaths.shop/product-category/maths-lab/"}>Maths Lab</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"https://elemaths.shop/"} target="_blank">Olympiad</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"https://elemaths.shop/"} target="_blank">E Tutor</HashLink>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <HashLink to={"/contact"} className="font-bold text-lg sm:pb-6 hover:underline">Contact Us</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/contact#info"}>Details</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/contact#form"}>Contact Form</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} to={"/contact#location"}>Location</HashLink>
          <HashLink className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight opacity-0"} >-</HashLink>
        </div>
      </div>
    </div>
  )
}
