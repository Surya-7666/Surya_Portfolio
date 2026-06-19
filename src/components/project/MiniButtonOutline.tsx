import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import { useRef } from "react"

const MiniButtonOutline = ({ tech }: { tech: string }) => {

    const miniButton = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: miniButton.current,
            trigger: miniButton.current,
            distance: 150,
            direction: "up",
            start: "top bottom",
            end: "+=100"
        })
    }, {scope: miniButton})

    return (
        <>
            <span ref={miniButton} className="rounded-full border border-(--border-light) bg-white/40 px-3 py-1 text-xs font-medium text-(--text-secondary) backdrop-blur-sm transition-all duration-300 hover:border-(--avo-primary)/30 hover:bg-(--avo-primary)/10 hover:text-(--avo-primary)">
                {tech}
            </span>
        </>
    )
}

export default MiniButtonOutline