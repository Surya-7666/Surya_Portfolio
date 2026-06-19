import SubHeading from '../common/headings/SubHeading'
import NormalHeading from '../common/headings/NormalHeading'
import Heading from '../common/headings/Heading'
import type { verticalTimelineProps } from '../../types/type'
import { useGSAP } from '@gsap/react'
import triggerFade from '../../animations/triggerFade'
import { useRef } from 'react'
import gsap from 'gsap'

const VerticalTimeline = ({ Icon, options, title, card }: verticalTimelineProps) => {

    const verticalTimelineDiv = useRef(null);

    useGSAP(() => {

        triggerFade({
            target: verticalTimelineDiv.current,
            trigger: verticalTimelineDiv.current,
            start: "top bottom",
            end: "+=450"
        });

        gsap.utils.toArray(".timelineCard").forEach((card) => {

            triggerFade({
                target: card as gsap.TweenTarget,
                trigger: card as gsap.DOMTarget,
                direction: "right",
                start: "top bottom",
                end: "+=250",
                distance: 40,
            });

        });

    }, { scope: verticalTimelineDiv });

    return (
        <>
            <div ref={verticalTimelineDiv} className="timelineDiv md:px-5 md:pl-40 py-5 flex gap-2 flex-col items-start my-10">
                <div className="flex justify-center items-center gap-6">
                    <div className="border max-size-10 p-2 flex justify-center items-center rounded-full">
                        {
                            Icon && <Icon {...options} />
                        }
                    </div>
                    <div>
                        <SubHeading title={title} />
                    </div>
                </div>

                <div className="border-l-2 h-full ml-5 -mt-2 " >
                    {
                        card.map((data, index) => (
                            <div key={index} className="timelineCard group bg-(--bg-secondary)/50 hover:bg-(--bg-secondary)/80 shadow-(--shadow-sm) hover:shadow-(--shadow-md) transition-all duration-200 rounded-xl px-4 mt-10 relative pl-10 text-start flex flex-col gap-2 py-1.5">
                                <div className="size-4 rounded-full border-3 border-(--avo-primary-dark) absolute top-0 left-0 -ml-2 -mt-2 bg-(--avo-primary) group-hover:scale-[1.5] transition-all duration-400" />
                                <NormalHeading title={data.cardTitle} />
                                <Heading title={data.cardSubTitle} className="scale-[0.8] -ml-3.5" />
                                <p className="text-(--text-muted) max-w-100">{data.cardDescription}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default VerticalTimeline