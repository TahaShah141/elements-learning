
export const BlogHeader = ({size="BASE", weight="BOLD", text}) => {

  const sizes = {
    "SMALL": "text-base md:text-lg xl:text-xl",
    "BASE": "text-xl md:text-2xl xl:text-4xl",
    "LARGE": "text-2xl md:text-3xl xl:text-5xl",
    "HUGE": "text-3xl md:text-5xl xl:text-7xl",
  }

  const weights = {
    "BOLD": "font-bold"
  }

  return (
    <h3 className={`${sizes[size]} ${weights[weight]}`}>
      {text}
    </h3>
  )
}
