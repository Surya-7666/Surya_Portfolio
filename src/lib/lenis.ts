import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "./gsap"

const LenisLib = () => {
    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    })

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    return lenis
}

export default LenisLib