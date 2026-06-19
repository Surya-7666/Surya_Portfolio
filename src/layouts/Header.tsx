import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../data/data"
import { useGSAP } from "@gsap/react"
import fade from "../animations/fade"
import useSlider from "../hooks/useSlider"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const activeNavLink = useLocation();

    useGSAP(() => {
        fade({
            target: ".logo",
            duration: 1,
            direction: "left"
        })
        fade({
            target: ".navLinks",
            stagger: .25,
            distance: 30,
            direction: "down"
        })

        fade({
            target: ".Menu",
            stagger: .25,
            distance: 30,
            direction: "right"
        })
    })

    useGSAP(() => {
        if (isOpen) fade({
            target: ".navLinksMobile",
            stagger: .15,
            distance: 10,
            direction: "left"
        })
    }, { dependencies: [isOpen] })

    const context = useSlider()
    if (!context) return null;

    const { setSliderStat } = context;


    return (
        <>
            <header className="w-full sticky top-5 left-0 z-50 mt-7">

                <div className="max-w-350 mx-auto px-4 md:px-10">

                    <div className="bg-(--bg-glass) backdrop-blur-xl border border-(--border-light) rounded-full px-5 md:px-10 py-3 flex justify-between items-center shadow-(--shadow-sm)">

                        <div className="logo">
                            <Link to="/" className=" font-display text-2xl font-bold text-(--avo-primary-dark)">
                                Sur<span className="text-(--avo-primary)">ya</span>
                            </Link>
                        </div>

                        <nav>

                            <div className="hidden md:block">

                                <div className="flex items-center gap-4">

                                    {
                                        navLinks.map((link, index) => (
                                            <Link key={index} to={link.path} onClick={() => setSliderStat(true)} className={`navLinks font-primary text-[15px] font-medium text-(--text-secondary) hover:text-(--avo-primary-dark) px-1 ${activeNavLink.pathname == link.path ? "border-b-2" : ""} `} >{link.title}</Link>
                                        ))
                                    }

                                </div>

                            </div>

                            <div className="block md:hidden">

                                <button onClick={() => setIsOpen(!isOpen)} className="Menu text-3xl text-(--avo-primary-dark)">
                                    {isOpen ? "✕" : "☰"}
                                </button>

                            </div>

                        </nav>

                    </div>

                    {
                        isOpen && (

                            <div className="mt-4 bg-(--bg-card) border border-(--border-light) rounded-3xl p-6 shadow-(--shadow-md) md:hidden">

                                <div className="flex flex-col gap-5">

                                    {
                                        navLinks.map((link, index) => (
                                            <Link key={index} onClick={() => {
                                                setSliderStat(true)
                                                setIsOpen(!isOpen)
                                            }} to={link.path} className="navLinksMobile font-primary text-[16px] font-medium text-(--text-secondary)">{link.title}</Link>
                                        ))
                                    }

                                </div>

                            </div>

                        )
                    }

                </div>

            </header>
        </>
    )
}

export default Header