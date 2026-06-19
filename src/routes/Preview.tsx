import { useRef, useState } from "react"
import ButtonOutline from "../components/common/buttons/ButtonOutline"
import SubHeading from "../components/common/headings/SubHeading"
import Icon from "../components/common/icons/Icon"
import MiniButton from "../components/project/MiniButton"
import { links, previewData } from "../data/data"
import fade from "../animations/fade"
import { useGSAP } from "@gsap/react"
import gsap from "../lib/gsap"

const Preview = () => {

    const [viewDetail, setViewDetail] = useState(false)
    const preView = useRef(null);
    const previewBadge = useRef(null);
    const previewSubCard = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {

        const tl = gsap.timeline()

        fade({
            target: previewBadge.current,
            timeline: tl,
            duration: 0.6,
            direction: "down",
            distance: 100
        })

        fade({
            target: ".badgeSubHeading",
            timeline: tl,
            duration: 0.35,
            direction: "up",
            distance: 10,
            position: "-=0.1"
        })

        fade({
            target: ".badgeMiniButton",
            timeline: tl,
            duration: 0.35,
            direction: "down",
            distance: 10,
            position: "-=0.1"
        })

    }, [])

    useGSAP(() => {

        if (window.innerWidth < 768 && !viewDetail) return

        const tl = gsap.timeline()

        fade({
            target: previewSubCard.current,
            timeline: tl,
            direction: "right",
            distance: 70,
            stagger: 0.2,
            position: "-=0.2"
        })

        fade({
            target: ".links a",
            timeline: tl,
            duration: 0.15,
            direction: "down",
            distance: 10,
            stagger: 0.15,
            position: "-=0.2"
        })

    }, { dependencies: [viewDetail], scope: preView })


    return (
        <>
            <section className="pt-25  pb-6 md:px-35" ref={preView}>
                <div className="flex flex-col md:static justify-center items-center gap-5">

                    <div className="relative rounded-xl shadow-(--shadow-sm) hover:shadow-(--shadow-md) transition-all duration-200 mx-auto  max-w-150 flex justify-center md:flex-row flex-col items-center">

                        <div ref={previewBadge} className="md:absolute flex gap-5 -top-10 -left-30 bg-(--bg-main) shadow-(--shadow-md) pl-10 pr-3 py-2 rounded-xl">
                            <div className="flex flex-col gap-2 my-2 text-nowrap">
                                <SubHeading title="Surya " className="font-primary badgeSubHeading text-md" />
                                <div className="badgeMiniButton">
                                    <MiniButton tech="Software Development Engineer" />
                                </div>
                            </div>
                        </div>

                        <div className={` ${viewDetail ? "block" : "hidden"} w-full md:ml-40 px-5 md:px-0 pt-7 pb-3 md:py-2.5 md:flex flex-row justify-center md:flex-col items-center gap-3`}>
                            <div className="flex flex-wrap gap-2.5">
                                {
                                    previewData.map((data, index) => (
                                        <div key={index} ref={(elem) => { previewSubCard.current[index] = elem }} className="mx-auto w-48 shadow-(--shadow-sm) flex items-center my-1.5">
                                            {data.Icon && <Icon Value={data.Icon} addHover={false} />}
                                            <div className="pr-2 pl-0.5">
                                                <p className="text-xs text-(--text-secondary)">{data.title}</p>
                                                <h3 className="text-sm text-(--text-primary)">{data.data}</h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex w-full my-1 mt-3">
                                <div className="flex gap-2.5 mx-auto links">
                                    {
                                        links.map((link, index) => (
                                            <a key={index} href={link.link} target="_blank">{<Icon Value={link.icon} options={{ size: 18 }} />}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <ButtonOutline value=">" onClick={() => setViewDetail(!viewDetail)} className={` ${viewDetail ? "rotate-270" : "rotate-90"} font-medium text-xl transition-all duration-200 block md:hidden`} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Preview