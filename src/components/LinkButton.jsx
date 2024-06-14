
export const LinkButton = ({text, bgColor, textColor}) => {
  return (
    <button className="p-4 text-xl font-bold flex items-center group" style={{backgroundColor: bgColor, color: textColor}}>
      <p>{text}</p>
      <svg className="w-0 group-hover:w-8 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" fill="currentColor"/></svg>
    </button>
  )
}
