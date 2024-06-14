
export const EventCard = ({title, date, content}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-8 p-12 rounded-2xl max-w-5xl bg-neutral-200 ">
        <div className="bg-neutral-300 w-96 h-96">

        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex justify-between items-end">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p>{date}</p>
          </div>
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
