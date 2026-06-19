import type { headingProps } from '../../../types/type'

const NormalHeading = ({ title, className, center }: headingProps) => {
    return (
        <>
            <div className={center ? "w-full text-center" : "w-auto"}>

                <div className={`inline-flex items-center my-2 gap-3 ${center ? "mx-auto" : ""}`}>

                    <span className="h-8 w-1.5 rounded-full bg-(--avo-primary) shadow-(--shadow-sm)"></span>

                    <h3 className={`text-xl font-semibold tracking-tight text-(--text-primary) ${className}`}>
                        {title}
                    </h3>

                </div>

            </div>
        </>
    )
}

export default NormalHeading