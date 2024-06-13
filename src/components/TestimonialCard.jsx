
export const TestimonialCard = ({quote, person}) => {
  return (
    <div className="bg-[#F3EEE8] p-16 flex flex-col justify-center gap-2 rounded-3xl rounded-bl-none text-lg max-w-[600px]">
      {/* <p className="font-bold scale-[3] w-fit">&quot;</p> */}
      <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-open</title><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor"/></svg>
      <div className="flex flex-col gap-8">
        <p>{quote}</p>
        <p className="font-bold">{person}</p>
      </div>
    </div>
  )
}
