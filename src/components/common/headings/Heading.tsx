import type { headingProps } from "../../../types/type";

const Heading = ({ title, center = false, className }: headingProps) => {
    return (
        <div className={`${center ? "text-center" : ""}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--avo-primary)/30 border border-(--avo-primary)/20 ${className}`}>
                <span className="h-2 w-2 rounded-full bg-(--avo-primary-dark) animate-pulse "></span>
                <h3 className="text-lg md:text-xl font-semibold text-(--text-primary) ">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default Heading;