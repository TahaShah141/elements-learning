
export const BlogParagraph = ({size="BASE", weight="NONE", style="NONE", text, indented=false, className=""}) => {

  const sizes = {
    "XS": "text-xs md:text-sm xl:text-base",
    "SMALL": "text-sm md:text-base xl:text-lg",
    "BASE": "text-base md:text-lg xl:text-xl",
    "LARGE": "text-lg md:text-xl xl:text-2xl",
  }
  
  const weights = {
    "NONE": "",
    "SEMI": "font-semibold",
    "BOLD": "font-bold"
  }

  const styles = {
    "NONE": "",
    "ITALIC": "italic"
  }

  return (
    <p className={`${sizes[size]} ${weights[weight]} ${className} ${styles[style]} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      {text}
    </p>
  )
}
