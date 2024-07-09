
export const BlogImage = ({src, caption=""}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={src} alt="" className="w-full" />
      {caption && <p className="italic">{caption}</p>}
    </div>
  )
}
