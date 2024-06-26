import { HexagonPlayButton } from "@/components/HexagonPlayButton"

export const Footer = () => {
  return (
    <footer className="bg-[#353535] w-full p-4">
      <div className="border-b border-white w-full flex flex-col py-4 px-2 gap-4 sm:gap-12 sm:p-10 justify-center">
        
        <div className="flex xl:flex-1 gap-12 flex-col xl:flex-row">
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">FAQs</div>
            <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white text-lg">FAQs</div>
            <div className="flex-1 flex flex-col gap-4 xl:gap-8 text-white">
              <p className="text-xs md:text-base">
                Got questions? We've got answers. Explore our frequently asked questions to find everything you need to know about Elements Learning and our educational offerings. Whether it's about out products, services, or educational philosophy, we're here to provide clarity and support your learning journey. 
              </p>
              <div className="flex flex-col text-sm md:text-bas md:px-4 gap-2 xl:px-8">
                <div className="flex items-center gap-2">
                  <div className="size-10">
                    <HexagonPlayButton outerColor="#FABB41" />
                  </div>
                  <p className="flex items-end py-1 w-full border-b border-white">What is Elements Learning (EL)?</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-10">
                    <HexagonPlayButton outerColor="#FABB41" />
                  </div>
                  <p className="flex items-end py-1 w-full border-b border-white">Are Elements Learning's products suitable for both teachers and parents?</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-10">
                    <HexagonPlayButton outerColor="#FABB41" />
                  </div>
                  <p className="flex items-end py-1 w-full border-b border-white">What educational services does EL offer?</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-10">
                    <HexagonPlayButton outerColor="#FABB41" />
                  </div>
                  <p className="flex items-end py-1 w-full border-b border-white">Are math manipulative tools safe for children to use?</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-10">
                    <HexagonPlayButton outerColor="#FABB41" />
                  </div>
                  <p className="flex items-end py-1 w-full border-b border-white">What sets EL apart from other educational platforms?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">Location</div>
            <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white text-lg">Location</div>
            <div className="flex-1 xl:px-12 flex gap-2 flex-col sm:flex-row xl:gap-8 text-white">
              <div className="flex-1 flex-col text-sm md:text-base flex gap-6">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam quasi quisquam earum exercitationem. Nulla qui, culpa sit eaque cupiditate cumque sapiente, quo quam, odio nobis laborum. Totam, obcaecati velit.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center xl:px-4">
                    <svg className="size-4 xl:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="currentColor"/></svg>
                    <p className="md:text-lg">0300 0000000</p>
                  </div>
                  <div className="flex gap-2 items-center xl:px-4">
                    <svg className="size-4 xl:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" fill="currentColor"/></svg>
                    <p className="md:text-lg">info@elementslearning.com</p>
                  </div>

                </div>

                <div className="flex flex-col gap-4">
                  <div className="sm:hidden flex bg-neutral-700 rounded-2xl h-64">

                  </div>
                  <div className="flex justify-center gap-8">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="currentColor"/></svg>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" fill="currentColor"/></svg>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/></svg>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" fill="currentColor"/></svg>
                  </div>
                </div>
              </div>
              <div className="sm:flex flex-1 hidden bg-neutral-700 rounded-2xl h-64">

              </div>
            </div>
          </div>  
        
        </div>
        
        <div className="flex flex-col-reverse xl:flex-row flex-1 gap-4 xl:gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">Subscribe</div>
            <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Subscribe</div>
            <div className="flex-1 xl:px-12 flex flex-col text-sm md:text-base gap-4 text-white">
              <div className="flex gap-2">
                <img src="/logo-white-text.png" className="h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="">Subscribe to our Newsletters and stuff.</p>
                <div className="flex gap-2">
                  <input type="text" className="flex-1 text-black px-2 min-w-0"/>
                  <button className="bg-[#FBBA41] p-1 sm:text-base text-sm sm:p-2 sm:px-4 font-bold">Submit</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col gap-4">
            <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Links</div>
            <div className="flex-1 grid text-sm md:text-base grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 text-white">
              <div className="flex-1 flex flex-col gap-2 justify-between">
                <h3 className="font-bold text-lg underline">About Us</h3>
                <p>Our Vision</p>
                <p>Our Mission</p>
                <p>Our Goals</p>
                <p>Our Team</p>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-between">
                <h3 className="font-bold text-lg underline">Services</h3>
                <p>Trainings</p>
                <p>Curriculum Review</p>
                <p>Environment Design</p>
                <p className="opacity-0">-</p>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-between">
                <h3 className="font-bold text-lg underline">Products</h3>
                <p>Mathematics</p>
                <p>Maths Lab</p>
                <p>Olympiad</p>
                <p>E Tutor</p>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-between">
                <h3 className="font-bold text-lg underline">Contact Us</h3>
                <p>Details</p>
                <p>Contact Form</p>
                <p>Location</p>
                <p className="opacity-0">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white font-bold flex justify-between py-2 xl:p-4 text-xs sm:text-sm md:text-base xl:text-lg">
        <p>© Elements Learning 2024</p>
        <p>Provicy Policy</p>
      </div>
    </footer>
  )
}
