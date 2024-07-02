import { Link } from "react-router-dom"

export const NotFound = () => {

  return (
    <div className="size-screen flex flex-col justify-center items-center p-16">
      <img src="/404/404.jpg" alt="" className="w-full"/>
      <Link to={"/"} className="p-4 bg-light-black text-white font-bold text-2xl rounded-md">Go Home</Link>
    </div>
  )
}
