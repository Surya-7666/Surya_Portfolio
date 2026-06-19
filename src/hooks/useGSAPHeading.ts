import { useGSAP } from "@gsap/react"
import triggerFade from "../animations/triggerFade"
import type React from "react"

const useGSAPHeading = (heading: string, scope: React.RefObject<null | HTMLFormElement>) => {
    useGSAP(() => {
        triggerFade({
            target: heading,
            trigger: heading,
            start: "top bottom",
            end: "+=200",
            
        })
    }, { scope })
}

export default useGSAPHeading