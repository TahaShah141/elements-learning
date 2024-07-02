import { Footer } from "@/Pages/Footer/Footer"
import { FadeIn } from "@/components/FadeIn"
import { SlidingDiv } from "@/components/SlidingDiv"
import { StaggeredHeaders } from "@/components/StaggeredHeaders"
import { Mail, MapPin, Smartphone } from "lucide-react"


export const ContactPage = () => {

  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["Contact Us"]} containerClass="text-3xl min-[400px] text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <img src="/contactpage/contactus.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col md:gap-4">
        <SlidingDiv direction={"top"} className="flex flex-col p-8 sm gap-2 justify-center">
          <h3 id="location" className="text-[#FBBB40] font-bold text-2xl md:text-4xl text-center">Get in touch</h3>
          <p className="text-center text-xs sm:text-sm md:text-xl md:px-5 lg:px-20">Got questions or feedback? We're here to help! Reach out to us through the contact form below and our team will get back to you as soon as possible.</p>
        </SlidingDiv>

        <FadeIn className="w-full h-[200px] md:h-[220px] lg:h-[400px] bg-neutral-300" />

        <div className="flex flex-col sm:flex-row p-16 lg:px-32 xl:px-40 px-4 gap-4 justify-center">
          <SlidingDiv direction={"left"} className="flex flex-col flex-[2_0_0] gap-4">
          <h1 id="form" className=" font-bold text-3xl text-center sm:hidden">Fill out the Form</h1>
            <input type="text" placeholder="Your Name" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base w-full"/>
            <input type="text" placeholder="Enter Your Email" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base  w-full"/>
            <textarea type="text" placeholder="Your Message" className="sm:flex-1 bg-[#F3EEE8] rounded-md p-3 sm:p-4 h-32 text-xs sm:text-base  w-full"/>
            <button className="bg-[#FBBA41] rounded-md p-2 sm:text-base text-sm sm:p-4 font-bold">Submit</button>
          </SlidingDiv>
          <SlidingDiv direction={"right"} className="flex-[1.5_0_0] flex flex-col gap-4">
          <h1 className=" font-bold text-3xl text-center sm:hidden">Our Info</h1>
            <div id="info" className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <MapPin className="size-8 text-[#FBBB40]" /> 
              <div  className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Address</p>
                <p className="text-sm md:text-base">IAEC, NUST H-12 Islamabad</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <Mail className="size-8 text-[#FBBB40]" /> 
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Mail Us</p>
                <p className="text-sm md:text-base">info@elements-learning.com</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <Smartphone className="size-8 text-[#FBBB40]" />
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Number</p>
                <p className="text-sm md:text-base">+92 327 8698770</p>
              </div>
            </div>
          </SlidingDiv>
        </div>
      </section>
      <Footer />
    </div>
  )
}
