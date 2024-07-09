
export const BlogParagraph = ({size="BASE", text, className=""}) => {

  const sizes = {
    "SMALL": "text-sm md:text-base xl:text-lg",
    "BASE": "text-base md:text-lg xl:text-xl",
    "LARGE": "text-lg md:text-xl xl:text-2xl",
  }

  return (
    <p className={`${sizes[size]} ${className}`}>
      {text}
    </p>
  )
}
