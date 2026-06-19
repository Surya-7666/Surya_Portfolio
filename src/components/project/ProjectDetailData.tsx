import { useGSAP } from "@gsap/react"
import type { ProjectDetailDataProps } from "../../types/type"
import NormalHeading from "../common/headings/NormalHeading"
import SubHeading from "../common/headings/SubHeading"
import triggerFade from "../../animations/triggerFade"
import { useRef } from "react"
import useGSAPHeading from "../../hooks/useGSAPHeading"

const ProjectDetailData = ({ title, data }: ProjectDetailDataProps) => {

    const projectDetailData = useRef(null);

    useGSAPHeading(".projectDetailDataHeading", projectDetailData)

    useGSAP(() => {
        triggerFade({
            target: ".projectDetailDataHeading-2",
            trigger: ".projectDetailDataHeading-2",
            direction: "left",
            start: "top bottom",
            end: "+=300",
            
        })
        triggerFade({
            target: ".projectDetailDataPera",
            trigger: ".projectDetailDataPera",
            direction: "down",
            start: "top bottom",
            end: "+=500",
            
        })
    }, { scope: projectDetailData })

    return (
        <>
            <div ref={projectDetailData}>
                
                <div className="projectDetailDataHeading">
                    <SubHeading title={title} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {
                        data.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-(--border-light) shadow-(--shadow-sm) hover:shadow-(--shadow-primary) transition-all duration-300">
                                <h3 className="text-xl font-semibold text-(--text-primary) projectDetailDataHeading-2">
                                    <NormalHeading title={feature.title} />
                                </h3>

                                <p className="mt-3 leading-relaxed text-(--text-secondary) projectDetailDataPera">
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default ProjectDetailData