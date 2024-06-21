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
        <div>
        <h1 className="text-center text-2xl p-3 font-bold text-[#FBBA41]">Get In touch</h1>
        <p className="text-center text-lg px-44 py-1">Got question or feedback? We're here to help! Reach out to us through the contact form below, and our team will get back to you as soon as possible</p>
        <div className="bg-gray-300 w-full h-96 p-32"></div>
        </div>
        <div className="flex justify-between col-span-2  px-64 w-full" >
          <div className=" py-8">
            <form action="">
              <div className="mt-5">
                <input  type="email" placeholder="Your Name" autocomplete="email" class="block w-[280%]  rounded-md py-2 justify-between text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200" /> 
              </div>
              <div className="mt-5">
              <input  type="email" placeholder="Enter Yout Email" autocomplete="email" class="block w-[280%]  rounded-md py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200" />
              </div>
              <div className="mt-5">
              <textarea  type="email" placeholder="Message" autocomplete="email" class="block w-[280%]  rounded-md py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200" />  
              </div>
              <div>
                <button className="mt-5 bg-[#FBBA41] w-[280%] rounded-md p-2">Submit</button>
              </div>
            </form>
          </div>
          <div className="grid-cols-2 py-10">
          <div className="bg-gray-200 rounded-md ">
              <svg height="28" viewBox="0 0 48 48" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /><path d="M0 0h48v48h-48z" fill="none"/></svg>
              <h1 className="text-2xl px-12 font-bold">Address</h1>
              <p className="px-12">IAEC, Nust, H-12 Islamabad</p>
            </div>
          <div className="bg-gray-200 mt-4 rounded-md">
          <svg class="feather feather-mail" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <h1 className="text-2xl px-12 font-bold">Mail US</h1>
              <p className="px-12">Info@elements-learning.com</p>
            </div>
            <div className="bg-gray-200 mt-4 rounded-md">
            <svg enable-background="new 0 0 26 26" height="28px" width="38" id="Слой_1" version="1.1" viewBox="0 0 26 26" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.4970703,19.2363281c-0.4033203-0.6582031-1.0292969-1.4248047-1.7646484-2.1591797  c-0.5322266-0.5322266-2.359375-2.2675781-3.5341797-2.2675781c-0.3769531,0-0.6162109,0.1611328-0.75,0.2949219  l-1.5644531,1.5634766c-0.0263672,0.0263672-0.1103516,0.0566406-0.2617188,0.0566406  c-0.8681641,0-2.7089844-0.9609375-4.5478516-2.7988281c-2.4521484-2.453125-3.0419922-4.5097656-2.7421875-4.8095703  l1.5625-1.5634766c0.1347656-0.1347656,0.2958984-0.3740234,0.2958984-0.75  c0.0009766-1.1757813-1.7353516-3.0029297-2.2675781-3.5351563C8.3916016,2.7353516,6.5654297,1,5.3886719,1  c-0.3759766,0-0.6152344,0.1601563-0.75,0.2949219L1.5107422,4.4228516  C0.5869141,5.3457031,0.9238281,7.1513672,2.5126953,9.7890625C3.8916016,12.078125,6.0742188,14.7617188,8.65625,17.34375  C13.2363281,21.9238281,17.8740234,25.0009766,20.1962891,25c0.578125,0,1.0419922-0.171875,1.3808594-0.5107422  l3.1279297-3.1279297C25.3818359,20.6845703,24.7158203,19.5947266,24.4970703,19.2363281z M20.5166016,23.4287109  C20.4814453,23.4628906,20.3798828,23.5,20.1962891,23.5c-1.5810547,0-5.7910156-2.5292969-10.4794922-7.2167969  c-2.4990234-2.4990234-4.6005859-5.0800781-5.9189453-7.2685547C2.3125,6.5498047,2.4521484,5.6025391,2.5712891,5.4833984  L5.515625,2.5390625C5.8994141,2.6875,6.7890625,3.2539063,7.8623047,4.328125s1.640625,1.9628906,1.7890625,2.3466797  L8.2714844,8.0556641c-1.4384766,1.4384766,0.4130859,4.6005859,2.7421875,6.9306641  c1.9980469,1.9980469,4.1474609,3.2382813,5.6083984,3.2382813c0.6826172,0,1.0957031-0.2695313,1.3222656-0.4960938  l1.3808594-1.3798828c0.3837891,0.1484375,1.2724609,0.7158203,2.3466797,1.7890625  c1.0732422,1.0732422,1.640625,1.9628906,1.7890625,2.3466797L20.5166016,23.4287109z" fill="#1D1D1B"/></svg>
              <h1 className="text-2xl px-12 font-bold">Contact</h1>
              <p className="px-12">+92 327 8896770</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
