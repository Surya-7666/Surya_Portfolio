import type { gsapFadeProps } from "../types/animations";
import gsap from "../lib/gsap"

const fade = ({ target, timeline, delay = 0, duration = 0.6, stagger = 0, direction = "up", distance = 40, position = "" }: gsapFadeProps) => {

    const x = direction === "left" ? -distance : direction === "right" ? distance : 0
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0

    if (timeline) return timeline.from(target, { x, y, opacity: 0, delay, duration, stagger, ease: "power3.out" }, position);

    return gsap.from(target, { x, y, opacity: 0, delay, duration, stagger, ease: "power3.out" });
}

export default fade