import type { ButtonProps } from "../../../types/type"

const ButtonOutline = ({ className, value, type = "button", onClick, Icon, options = {} }: ButtonProps) => {
  return (
    <>
      <button className={`px-3 py-1.5 rounded-full shadow-(--shadow-sm) hover:shadow-(--shadow-md) hover:bg-(--avo-primary) hover:text-white active:bg-(--avo-primary-dark) active:text-white transition-all duration-200 outline-none focus:outline-none ${className}`}
        type={type}
        onClick={onClick}>
        <div className="flex justify-center items-center gap-1.5">
          {value}
          {Icon && <Icon {...options} />}
        </div>
      </button>
    </>
  )
}

export default ButtonOutline