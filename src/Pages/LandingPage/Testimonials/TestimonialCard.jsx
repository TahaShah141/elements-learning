export const TestimonialCard = ({quote, person}) => {

  return (
    <div className="bg-[#F3EEE8] flex flex-col justify-center px-6 sm:px-10 lg:px-16 gap-2 rounded-xl md:rounded-3xl md:rounded-bl-none rounded-bl-none text-xs md:text-base lg:text-lg md:max-w-[400px] lg:max-w-[600px] py-4 xs:py-2 min-h-72 xs:min-h-64 min-[550px]:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
      <svg className="size-4 lg:size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-open</title><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor"/></svg>
      <div className="flex flex-col gap-4 lg:gap-8 text-xs md:text-sm lg:text-base">
        <p>{quote}</p>
        <p className="font-bold">{person}</p>
      </div>
    </div>
  )
}