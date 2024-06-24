import { Footer } from "../components/Footer"

export const ContactPage = () => {
  return (
    <div className="flex flex-col grid-cols-2">
      <section className="bg-[#F3EEE8] w-full p-4">
        <div className="flex grid-cols-1">
          <h1 className="sm:text-4xl md:text-6xl lg:text-8xl font-bold py-36 px-20 md:px-28">Contact <br /> US </h1>
          <div className="bg-gray-300 w-[600px] h-[75vh] pl-10"></div>
        </div>
      </section>
      <section className="w-full p-12 ">
        <div>
        <h1 className="text-center text-2xl p-3 font-bold text-[#FBBA41]">Get In touch</h1>
        <p className="text-center text-lg px-44 py-1">Got question or feedback? We're here to help! Reach out to us through the contact form below, and our team will get back to you as soon as possible</p>
        <div className="bg-gray-300 w-full h-96 p-32"></div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-16 px-36">
          <div className="space-y-4 col-span-1">
            <form action="">
              <div className="grid grid-cols-1 gap-6">
                <input type="text" placeholder="Your Name" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:border-[#FBBA41] block w-full p-3" />
                <input type="email" placeholder="Enter Your Email" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:border-[#FBBA41] block w-full p-3" />
                <textarea name="comments" id="comments" placeholder="Your Message" rows="6" className="bg-[#F3EEE8] border boeder-gray-300 text-sm rounded focus:ring-0  focus:border-[#FBBA41] block w-full p-3"></textarea>
                <button className="bg-[#FBBA41] rounded p-3">Submit</button>
              </div>
             </form>
          </div>
          <div className="col-span-1">
            <div className="bg-[#F3EEE8] rounded mb-6 p-2.5">
            <svg className="h-8 w-12 pt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <h1 className="text-xl font-bold px-8">Address</h1>
            <p className="px-8 ">IAEC, NUST, H-12, Islamabad</p>
            </div>
            <div className="bg-[#F3EEE8] rounded mb-6 p-2.5">
            <svg className="h-8 w-12 pt-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="#fbba41" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            <h1 className="text-xl font-bold px-8">Mail US</h1>
            <p className="px-8 ">Info@Elements-learning.com</p>
            </div>
            <div className="bg-[#F3EEE8] rounded p-2.5">
            <svg className="h-8 w-12 pt-4" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#fbba41" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
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
