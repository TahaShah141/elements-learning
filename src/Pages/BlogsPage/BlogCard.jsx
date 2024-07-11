import { Link } from "react-router-dom"

export const BlogCard = ({id, title, author, date, summary}) => {
  return (
    <Link to={`/blogs/${id}`} className="flex-1 group min-w-64 md:min-w-96 shadow-lg rounded-md border flex flex-col gap-4 p-6 transition-shadow duration-300 hover:shadow-[#FBBA41]">
      <div className="flex flex-col">
        <p className="font-bold text-lg md:text-2xl">{title}</p>
        <p className="italic text-sm md:text-base">{author}</p>
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <p className="text-xs md:text-sm transition-colors text-neutral-400 group-hover:text-light-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae vitae praesentium ea dolorem fugiat atque tempore itaque fugit possimus, laudantium saepe. Recusandae harum saepe odit, cupiditate repudiandae alias eum pariatur temporibus ab voluptatem voluptas? Iusto laudantium ad culpa doloribus.
      </p>
    </Link>
  )
}
