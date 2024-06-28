import { HexagonPlayButton } from "@/components/HexagonPlayButton"

export const BulletList = ({list, contentClass="text-lg"}) => {
  return (
    <div className="flex flex-col gap-4">
      {list.map(({title, content}) => 
        <div className="flex gap-2 items-start">
          <div className="size-8 mt-1">
            <HexagonPlayButton outerColor="#FCBA42" />
          </div>
          <p className={contentClass+ " py-1 flex gap-2 w-full"} style={{borderBottomColor: "#FCBA42", borderBottomWidth: "2px"}}>
            <span className="font-bold break-keep">{title+":"}</span>
            {content}
          </p>
        </div>
      )}
    </div>
  )
}
