
export const IconButton = ({icon, text, className}) => {
  
  return (
    <button className={`group ${className}`}>
      <div className="flex items-center gap-2">
        <p>{text}</p>
        <div className="w-0 transition-all duration-500 sm:group-hover:w-6 lg:group-hover:w-8 overflow-hidden">
          {icon}
        </div>
      </div>
    </button>
  )
}
