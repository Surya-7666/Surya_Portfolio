import { useRef } from "react"
import NormalHeading from "../common/headings/NormalHeading"
import MiniButton from "./MiniButton"
import { useGSAP } from "@gsap/react";
import triggerFade from "../../animations/triggerFade";

const ProjectDetailCard = ({ data, title }: { data: string[], title: string }) => {

    const projectDetailCard = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: ".projectDetailCardHeading",
            trigger: ".projectDetailCardHeading",
            direction: "left",
            start: "top bottom",
            end: "+=300",
            
        })
    }, { scope: projectDetailCard })

    return (
        <>
            <div ref={projectDetailCard} className="p-6 rounded-2xl border border-(--border-light) shadow-(--shadow-sm)">
                <h3 className="text-xl font-semibold mb-4 projectDetailCardHeading">
                    <NormalHeading title={title} className="my-4" />
                </h3>

                <div className="flex flex-wrap gap-3">
                    {
                        data.map((item, index) => (
                            <MiniButton key={index} tech={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectDetailCard