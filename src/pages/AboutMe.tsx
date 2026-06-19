import { useRef } from "react"
import About from "../components/about/About"
import MyDescription from "../components/about/MyDescription"
import Heading from "../components/common/headings/Heading"
import { useGSAP } from "@gsap/react"
import triggerFade from "../animations/triggerFade"

const AboutMe = () => {

    const about = useRef(null)

    useGSAP(() => {
        triggerFade({
            target: ".AboutHeading",
            trigger: ".AboutHeading",
            start: "top bottom",
            end: "+=200",
            
        })
    }, {scope: about})

    return (
        <>
            <section ref={about} id="about" className="mx-7 pt-20">
                <Heading title="About Me" center className="scale-130 AboutHeading" />
                <MyDescription />
                <About />
            </section>
        </>
    )
}

export default AboutMe