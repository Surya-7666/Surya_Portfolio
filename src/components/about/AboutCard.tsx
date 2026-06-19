import { useRef } from "react"
import type { whatAmIDoingProps } from "../../types/type"
import NormalHeading from "../common/headings/NormalHeading"
import { useGSAP } from "@gsap/react";
import triggerFade from "../../animations/triggerFade";

const AboutCard = ({ title, Icon, description, options }: whatAmIDoingProps) => {

    const aboutCard = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: aboutCard.current,
            trigger: aboutCard.current,
            direction: "down",
            distance: 70,
            start: "top bottom",
            end: "+=250"
        })
    }, )

    return (
        <>
            <div ref={aboutCard} className="aboutCard mx-auto group w-70 my-3 px-2.5 py-7 rounded-sm shadow-(--shadow-md) hover:shadow-(--shadow-sm) transition-all duration-250 hover:scale-[0.99]">
                <div className="h-full w-full flex flex-col flex-wrap justify-center items-center md:justify-between">
                    <div className="h-20 w-20 flex flex-wrap justify-center items-center text-(--avo-primary) group-hover:scale-120 transition-all duration-200 group-hover:drop-shadow-(--shadow-sm)">
                        {
                            Icon && <Icon {...options} />
                        }
                    </div>
                    <div>
                        <NormalHeading title={title} center />
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard