import { FadeIn } from "../components/FadeIn"
import { Footer } from "../components/Footer"
import { SlidingDiv } from "../components/SlidingDiv"
import { StaggeredHeaders } from "../components/StaggeredHeaders"


export const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center ">
        <StaggeredHeaders headers={["Contact", "Us."]} containerClass="text-2xl  hidden min-[400px]:flex flex-col min-[400px]:text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <StaggeredHeaders headers={["Contact Us."]} containerClass="min-[400px]:hidden text-3xl font-bold" direction="left" />
        <div className="max-w-[400px] sm:max-w-[600px]">
          <img src="/contactpage/contactus.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col md:gap-4">
        <SlidingDiv direction={"top"} className="flex flex-col p-8 sm gap-2 justify-center">
          <h3 className="text-[#FBBB40] font-bold text-2xl md:text-4xl text-center">Get in touch</h3>
          <p className="text-center text-xs sm:text-sm md:text-xl md:px-5 lg:px-20">Got questions or feedback? We're here to help! Reach out to us through the contact form below and our team will get back to you as soon as possible.</p>
        </SlidingDiv>

        <FadeIn className="w-full h-[200px] md:h-[220px] lg:h-[400px] bg-neutral-300" />

        <div className="flex flex-col sm:flex-row p-16 lg:px-32 xl:px-40 px-4 gap-4 justify-center">
          <SlidingDiv direction={"left"} className="flex flex-col flex-[2_0_0] gap-4">
          <h1 className=" font-bold text-3xl text-center sm:hidden">Fill out the Form</h1>
            <input type="text" placeholder="Your Name" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base w-full"/>
            <input type="text" placeholder="Enter Your Email" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base  w-full"/>
            <textarea type="text" placeholder="Your Message" className="md:flex-1 bg-[#F3EEE8] rounded-md p-3 sm:p-4 h-32 text-xs sm:text-base  w-full"/>
            <button className="bg-[#FBBA41] rounded-md p-2 sm:text-base text-sm sm:p-4 font-bold">Submit</button>
          </SlidingDiv>
          <SlidingDiv direction={"right"} className="flex-[1.5_0_0] flex flex-col gap-4">
          <h1 className=" font-bold text-3xl text-center sm:hidden">Info</h1>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" fill="currentColor"/></svg>
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Address</p>
                <p className="text-sm md:text-base">IAEC, NUST H-12 Islamabad</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" fill="currentColor"/></svg>
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Mail Us</p>
                <p className="text-sm md:text-base">info@elements-learning.com</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="currentColor"/></svg>
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Telephone</p>
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
