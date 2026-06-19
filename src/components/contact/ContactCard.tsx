import { useGSAP } from '@gsap/react'
import type { previewDataInterface } from '../../types/type'
import IconBtn from '../common/icons/Icon'
import triggerFade from '../../animations/triggerFade'
import { useRef } from 'react'

const ContactCard = ({ Icon, title, data }: previewDataInterface) => {

    const contactCard = useRef(null)

    useGSAP(() => {
        triggerFade({
            target: contactCard.current,
            direction: "up",
            trigger: contactCard.current,
            start: "top bottom",
            end: "+=400"
        })
    }, { scope: contactCard })

    return (
        <>
            <div
                ref={contactCard}
                className="
                    group
                    relative
                    overflow-hidden

                    w-full
                    sm:w-[48%]
                    lg:w-82

                    min-h-30

                    rounded-2xl
                    bg-(--bg-main)

                    shadow-(--shadow-sm)
                    hover:shadow-(--shadow-md)

                    transition-all
                    duration-300

                    px-5
                    py-5

                    flex
                    items-center
                    gap-4

                    border
                    border-[#d9decf]

                    hover:-translate-y-1
                "
            >

                {/* Hover Glow */}
                <div
                    className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    bg-linear-to-r
    from-[#c7ddb0]/20
    to-transparent
    pointer-events-none
"
                />

                {/* Icon Box */}
                <div
                    className="
                        min-w-14
                        min-h-14

                        rounded-xl
                        bg-[#d8e6c3]

                        flex
                        items-center
                        justify-center

                        shadow-inner
                    "
                >
                    {Icon && (
                        <IconBtn
                            Value={Icon}
                            className="scale-150 text-[#557b2f]"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-(--text-secondary)
                        "
                    >
                        {title}
                    </p>

                    <h3
                        className="
                            text-sm
                            md:text-base
                            font-medium
                            text-(--text-primary)
                            break-all
                        "
                    >
                        {data}
                    </h3>

                </div>

            </div>
        </>
    )
}

export default ContactCard