import type { headingProps } from "../../../types/type"

const SubHeading = ({ title, className, center }: headingProps) => {
    return (
        <>

            <div className={`${center ? "w-full text-center" : "w-auto"}`}>
                <div className={`relative inline-flex items-center text-(--text-primary) ${center ? "mx-auto" : ""}  ${className}`}>
                    <span className="h-6 w-1 rounded-full bg-(--avo-primary-dark) shadow-(--shadow-sm)"></span>

                    <h2 className="mx-2 text-xl md:text-2xl font-semibold tracking-tight text-(--text-primary)">
                        {title}
                    </h2>
                </div>
                <div className={`my-1 h-1 w-12 bg-(--border-dark) ${center ? "mx-auto" : ""}`}></div>
            </div>

        </>
    )
}

export default SubHeading