import { useGSAP } from "@gsap/react";
import triggerFade from "../animations/triggerFade";

const useGSAPMultiHeading = (
    headings: string[],
    scope: React.RefObject<HTMLElement | null>
) => {

    useGSAP(() => {

        headings.forEach((heading) => {

            triggerFade({
                target: heading,
                trigger: heading,
                start: "top bottom",
                end: "+=300",
                
            })          
        });

    }, { scope });

};

export default useGSAPMultiHeading