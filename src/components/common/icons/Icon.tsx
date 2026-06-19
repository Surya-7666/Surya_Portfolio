import type { IconProps } from "../../../types/type"

const Icon = ({className, Value, onClick, options, addHover = true}: IconProps) => {
  return (
    <>
        <div className={`rounded-full m-0.5 h-8 w-8 flex justify-center items-center transition-all duration-200 ${onClick ? "cursor-pointer" : ""} ${className} ${addHover ? "hover:scale-105 hover:shadow-(--shadow-sm) hover:bg-(--avo-flesh)  active:bg-(--avo-primary) active:text-white" : ""} `} onClick={onClick}>
            <Value {...options} />
        </div>
    </>
  )
}

export default Icon

//  