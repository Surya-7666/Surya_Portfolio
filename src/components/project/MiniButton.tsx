import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import triggerFade from "../../animations/triggerFade";

const MiniButton = ({ tech }: { tech: string }) => {

    const miniBtn = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: miniBtn.current,
            trigger: miniBtn.current,
            start: "top bottom",
            end: "+=250",
        })
    }, { scope: miniBtn })

    return (
        <>
            <span ref={miniBtn} className="px-2.5 py-1.5 rounded-full bg-(--avo-primary)/20 hover:bg-(--avo-primary)/30 border border-(--avo-primary) transition-all duration-200 text-sm">
                {tech}
            </span>
        </>
    )
}

export default MiniButton