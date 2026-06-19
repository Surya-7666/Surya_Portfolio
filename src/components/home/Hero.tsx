import { MdOutlineFileDownload } from "react-icons/md"
import Button from "../common/buttons/Button"
import ButtonOutline from "../common/buttons/ButtonOutline"
import { links } from "../../data/data"
import Icon from "../common/icons/Icon"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import { useRef } from "react"
import myImage from "../../assets/images/my.png"
import { Link } from "react-router-dom"
import useSlider from "../../hooks/useSlider"

const Hero = () => {

    const hero = useRef(null);

    useGSAP(() => {

        triggerFade({
            target: ".hero-div",
            trigger: ".hero-div",
            start: "top bottom",
            end: "+=500",
        })

        triggerFade({
            target: ".text-gsap",
            trigger: ".text-gsap",
            direction: "left",
            start: "top bottom",
            end: "+=300",
        })

        triggerFade({
            target: ".btn-gsap",
            trigger: ".btn-gsap",
            direction: "up",
            distance: 20,
            start: "top bottom",
            end: "+=150",
        })

        triggerFade({
            target: ".links a",
            distance: 30,
            stagger: .2,
            trigger: ".links a",
            start: "top bottom",
            end: "+=80",
        })

    }, { scope: hero })

    const context = useSlider()

    if (!context) return null;

    const { setSliderStat } = context;

    return (
        <>
            <section
    className="
        w-full
        px-4
        md:px-8
        lg:px-12
        pt-2
        md:pt-10
        pb-10
    "
    ref={hero}
>

                <div
                    className="
                        flex
                        justify-center
                        items-center
                        flex-wrap
                        gap-10
                        max-w-7xl
                        mx-auto
                    "
                >

                    {/* LEFT CONTENT */}
                    <div className="w-full md:w-[48%] px-2">

                        <div className="flex flex-col justify-center gap-4 hero-div">

                            <h2 className="text-2xl text-(--avo-primary) font-secondary text-gsap">
                                Hello , I'm
                            </h2>

                            <h1 className="text-4xl md:text-6xl leading-tight text-(--avo-primary-dark) font-primary text-gsap">
                                Surya Perumal Jeyapandi.
                            </h1>

                            <h3 className="text-lg text-(--text-secondary) text-gsap">
                                I design & build professional websites.
                            </h3>

                            <p className="text-(--text-muted) leading-8 text-gsap">
                                Full Stack Developer specializing in React, Next.js,
                                Node.js, Express.js, and MongoDB. I build responsive,
                                scalable, and user-focused web applications with clean
                                architecture and modern technologies.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap gap-4 my-4">

                                <div className="btn-gsap">
                                    <Link
                                        to="projects"
                                        onClick={() => setSliderStat(true)}
                                    >
                                        <Button value="View Projects" />
                                    </Link>
                                </div>

                                <div className="btn-gsap">
                                    <a
                                        href="/Surya_Resume.pdf"
                                        download={true}
                                    >
                                        <ButtonOutline
                                            value="Download CV"
                                            Icon={MdOutlineFileDownload}
                                        />
                                    </a>
                                </div>

                            </div>

                            {/* SOCIAL LINKS */}
                            <div className="flex gap-5 flex-wrap links">

                                {
                                    links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon
                                                Value={link.icon}
                                                options={{ size: 20 }}
                                            />
                                        </a>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full md:w-[45%] hero-div flex justify-center items-center">

                        <div
                            className="
                                h-80
w-80
md:h-96
md:w-96

                                rounded-[40px]
                                overflow-hidden

                                shadow-(--shadow-primary)

                                transition-all
                                duration-300

                                hover:shadow-(--shadow-primary-hover)
                                hover:-translate-y-2
                            "
                        >

                            <img
                                src={myImage}
                                alt="my image"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    scale-[1.08]
                                "
                            />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Hero