import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import fade from "../../animations/fade"

const ChildTransition = ({ children }: { children: ReactNode }) => {

    const childSec = useRef(null);

    useGSAP(() => {

        fade({
            target: childSec.current,
            direction: "up",
            distance: 100,
            delay: .1
        })

    }, { scope: childSec })


    return (
        <>
            <section ref={childSec}>
                {children}
            </section>
        </>
    )
}

export default ChildTransition