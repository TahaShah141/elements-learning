import { Footer } from "../components/Footer"

export const ContactPage = () => {
  return (
    <div className="flex flex-col grid-cols-2">
      <section className="bg-[#F3EEE8] w-full p-4">
        <div className="flex grid-cols-1">
          <h1 className="text-8xl font-bold py-36 px-28">Contact <br /> US </h1>
          <div className="bg-gray-300 w-[600px] h-[550px] ml-10"></div>
        </div>
      </section>
      <section className="w-full p-4 ">
        <h1 className="text-center text-2xl p-3 font-bold text-[#FBBA41]">Get In touch</h1>
        <p className="text-center text-lg px-44 py-1">Got question or feedback? We're here to help! Reach out to us through the contact form below, and our team will get back to you as soon as possible</p>
        <div className="bg-gray-300 w-full h-96 p-32"></div>
      </section>
      <Footer />
    </div>
  )
}
