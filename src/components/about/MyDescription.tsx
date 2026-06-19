import { useRef } from "react"
import { AboutMeDescription, verticalTimelineData } from "../../data/data"
import VerticalTimeline from "./VerticalTimeline"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"


const MyDescription = () => {

    const myDescription = useRef(null)

    useGSAP(() => {
        triggerFade({
            target: ".myDescriptionPera",
            trigger: ".myDescriptionPera",
            start: "top bottom",
            end: "+=200"
        })
    }, { scope: myDescription })

    return (
        <>
            <div className="my-15" ref={myDescription}>

                <div className="my-5 flex flex-wrap justify-center items-center">
                    <div className="text-center">

                        <p className="myDescriptionPera px-1 md:px-20 text-(--text-primary) leading-relaxed text-base md:text-lg">
                            <span className="bg-bottom-left bg-linear-to-r from-(--avo-primary-light) to-(--avo-primary-dark) bg-size-[0%_2px] bg-no-repeat hover:bg-size-[100%_2px] transition-all duration-300">
                                {AboutMeDescription}
                            </span>
                        </p>

                        <br />
                        <br />

                        <div>
                            {
                                verticalTimelineData.map((data, index) => (
                                    <VerticalTimeline key={index} Icon={data.Icon} title={data.title} card={data.card} options={{size: 26}} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDescription