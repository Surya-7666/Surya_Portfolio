import type { gsapTriggerFadeProps } from "../types/animations";
import gsap from "../lib/gsap"

const triggerFade = ({ target, delay = 0, duration = 0.6, direction = "up", distance = 40, start, end, scrub = true }: gsapTriggerFadeProps) => {

    const elems = gsap.utils.toArray<HTMLElement>(target as gsap.DOMTarget)

    const x = direction === "left" ? -distance : direction === "right" ? distance : 0
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0


    const animations = elems.map((elem) =>
        gsap.from(elem, {
            x,
            y,
            opacity: 0,
            delay,
            duration,
            ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start,
                end,
                scrub
            }
        })
    )

    return () => {
        animations.forEach(anim => {
            anim.scrollTrigger?.kill();
            anim.kill();
        });
    };

}

export default triggerFade