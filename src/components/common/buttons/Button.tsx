import type { ButtonProps } from "../../../types/type"

const Button = ({ className, value, type = "button", onClick, Icon, options ={} }: ButtonProps) => {
  return (
    <>
      <button className={`px-3 py-1.5 rounded-full bg-(--avo-primary) hover:shadow-(--shadow-lg) text-white hover:bg-(--avo-primary-light) hover:text-black/60 active:bg-(--avo-primary-dark) active:text-white transition-all duration-200 outline-none focus:outline-none ${className}`}
        type={type}
        onClick={onClick}>
        <div className="flex justify-center items-center gap-2">
          {value}
          {Icon && <Icon {...options} />}
        </div>
      </button>
    </>
  )
}

export default Button