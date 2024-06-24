import { Footer } from "../components/Footer"


export const ContactPage = () => {
  return (
    <div className="flex flex-col grid-cols-2">
      <section className="bg-[#F3EEE8] w-full p-4">
        <div className="flex grid-cols-1">
          <h1 className="sm:text-4xl md:text-6xl lg:text-8xl font-bold py-36 px-20 md:px-28">Contact <br /> Us </h1>
          <div className="bg-gray-300 w-[600px] h-[75vh] pl-10"></div>
        </div>
      </section>
      <section className="w-full p-12 ">
        <div>
        <h1 className="text-center text-2xl p-3 font-bold text-[#FBBA41]">Get In touch</h1>
        <p className="text-center text-lg px-44 py-1">Got question or feedback? We're here to help! Reach out to us through the contact form below, and our team will get back to you as soon as possible</p>
        <div className="bg-gray-300 w-full h-96 p-32"></div>
        </div>
        <div className="flex py-16 px-36 space-x-6">
          <div className=" w-1/2 space-y-4">
            <form action="">
              <div className="flex flex-col gap-6">
                <input type="text" placeholder="Your Name" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:outline-[#FBBA41] block w-full p-3" />
                <input type="email" placeholder="Enter Your Email" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:outline-[#FBBA41] block w-full p-3" />
                <textarea name="comments" id="comments" placeholder="Your Message" rows="6" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:outline-[#FBBA41] block w-full p-3"></textarea>
                <button className="bg-[#FBBA41] rounded p-3">Submit</button>
              </div>
             </form>
          </div>
          <div className="grid pt-5">
            <div className="w-12">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            </div>
            <div className="w-12">
            <svg version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"/></g></svg>
            </div>
            <div className="w-12 ">
            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M22.19,15.3,19.3,12.42a2,2,0,0,0-1.73-.56,2,2,0,0,0-1.42,1l-.62.8a.53.53,0,0,1-.38.2.5.5,0,0,1-.39-.15L10.32,9.24a.54.54,0,0,1-.15-.4.53.53,0,0,1,.2-.37l.8-.62a2,2,0,0,0,1-1.42,2,2,0,0,0-.56-1.74L8.7,1.81a2.85,2.85,0,0,0-3.93,0L1.66,4.93c-.87.86-.88,2.33,0,4.38a12.2,12.2,0,0,0,2.21,3.6l7.26,7.26a12.2,12.2,0,0,0,3.6,2.21,7.17,7.17,0,0,0,2.6.62,2.38,2.38,0,0,0,1.78-.66l3.12-3.11A2.79,2.79,0,0,0,22.19,15.3Zm-1.45,2.48-3.12,3.11c-.59.43-3.88-1-5.08-2.17L5.28,11.46C4.08,10.25,2.68,7,3.11,6.38L6.22,3.26a.74.74,0,0,1,1,0L10.1,6.09l-1,.76a2.62,2.62,0,0,0-1,1.87,2.59,2.59,0,0,0,.75,2l4.44,4.44a2.55,2.55,0,0,0,2,.75,2.62,2.62,0,0,0,1.87-1l.67-.86V14l0-.09,2.89,2.88A.74.74,0,0,1,20.74,17.78Z"/></svg>
            </div>
          </div>
          <div className="w-2/5 space-y-6">
            <div className="bg-[#F3EEE8] rounded mb-6 p-6 ">
            <h1 className="text-xl font-bold px-8">Address</h1>
            <p className="px-8 ">IAEC, NUST, H-12, Islamabad</p>
            </div>
            <div className="bg-[#F3EEE8] rounded mb-6 p-6 ">
            <h1 className="text-xl font-bold px-8">Mail Us</h1>
            <p className="px-8 ">Info@Elements-learning.com</p>
            </div>
            <div className="bg-[#F3EEE8] rounded p-6 ">
            <h1 className="text-xl font-bold px-8">Telephone</h1>
            <p className="px-8">+92 327 8898770</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
