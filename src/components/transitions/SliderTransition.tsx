import { useRef } from "react"
import video from "../../assets/videos/Loading Files.webm"
import { useGSAP } from "@gsap/react"
import gsap from "../../lib/gsap"
import useScrollToTop from "../../hooks/useScrollToTop"

const SliderTransition = () => {

    useScrollToTop();
    
    const sliderTransition = useRef(null)

    useGSAP(() => {

        gsap.set(sliderTransition.current, {
            xPercent: -100
        })

        const tl = gsap.timeline()

        tl.to(sliderTransition.current, {
            xPercent: 0,
            duration: .5,
            ease: "power3.out"
        })

        tl.to(sliderTransition.current, {
            xPercent: 100,
            duration: .5,
            ease: "power3.out"
        }, "+=.9")

    }, { scope: sliderTransition })


    return (
        <>
            <section className="h-screen w-full" ref={sliderTransition}>
                <div className='flex flex-col justify-center items-center py-30'>
                    <video src={video} width={'500px'} className='opacity-70 scale-[1.2]' autoPlay loop muted playsInline></video>
                    <p className="text-(--text-muted) mb-4 capitalize mt-10">Loading...</p>
                </div>
            </section>
        </>
    )
}

export default SliderTransition