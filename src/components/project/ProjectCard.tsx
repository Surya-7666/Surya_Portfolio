    import { FaEye, FaGithub, FaArrowRight } from "react-icons/fa"
    import type { ProjectCardProps } from "../../types/type"
    import { Link } from "react-router-dom"
    import MiniButtonOutline from "./MiniButtonOutline"
    import { useRef } from "react"
    import { useGSAP } from "@gsap/react"
    import triggerFade from "../../animations/triggerFade"
    import useSlider from "../../hooks/useSlider"

    const statusStyles = {
        Developing: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
        Completed: "bg-blue-500/10 text-blue-600 border-blue-500/20",
        LIVE: "bg-green-200/10 text-green-800 border-green-500/20",
    }

    const ProjectCard = ({ title, description, image, status, techStack, github, live, slug }: ProjectCardProps) => {

        const projectCardRef = useRef(null);

        useGSAP(() => {
            triggerFade({
                target: projectCardRef.current,
                trigger: projectCardRef.current,
                start: "top bottom",
                end: "+=300"
            })
            triggerFade({
                target: ".cardBadge",
                trigger: ".cardBadge",
                distance: 500,
                direction: "left",
                start: "bottom bottom",
                end: "+=200"
            })
            triggerFade({
                target: ".cardImage",
                trigger: ".cardImage",
                distance: 500,
                direction: "right",
                start: "top bottom",
                end: "+=200"
            })
            triggerFade({
                target: ".cardTitle",
                trigger: ".cardTitle",
                distance: 150,
                direction: "right",
                start: "top bottom",
                end: "+=300"
            })
            triggerFade({
                target: ".cardDescription",
                trigger: ".cardDescription",
                distance: 150,
                direction: "left",
                start: "top bottom",
                end: "+=300"
            })
        }, { scope: projectCardRef })

        const context = useSlider()
        if (!context) return null;

        return (
            <div
                ref={projectCardRef}
                className="group relative mx-auto flex h-full w-full max-w-[420px] flex-col overflow-hidden rounded-3xl border border-(--border-light) bg-(--bg-card) shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(132,204,22,0.15)] sm:rounded-[28px]"
            >
                {/* Ambient glow accent */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-(--avo-primary)/10 blur-3xl transition-all duration-500 group-hover:bg-(--avo-primary)/20 sm:-top-20 sm:-right-20 sm:h-52 sm:w-52" />

                {/* Image */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-(--avo-primary)/5 sm:h-48 md:h-52">
                    <img
                        src={image}
                        alt={title}
                        className="cardImage h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-4"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-(--bg-card) via-transparent to-transparent opacity-60" />

                    <div className="absolute left-3 top-3 cardBadge sm:left-4 sm:top-4">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm sm:px-3 sm:text-xs ${statusStyles[status]}`}>
                            {status}
                        </span>
                    </div>

                    {/* Hover / tap actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 transition-all duration-300 md:group-hover:bg-black/20">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="
flex
h-10
w-10
sm:h-11
sm:w-11
items-center
justify-center
rounded-full
border
border-white/50
bg-black/50
text-white
backdrop-blur-md
transition-all
duration-300
hover:scale-110
hover:bg-white
hover:text-black

opacity-100
md:opacity-0
md:group-hover:opacity-100
"
                            >
                                <FaGithub size={16} className="sm:hidden" />
                                <FaGithub size={18} className="hidden sm:block" />
                            </a>
                        )}

                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="
flex
h-10
w-10
sm:h-11
sm:w-11
items-center
justify-center
rounded-full
border
border-white/20
bg-(--avo-primary)
text-white
backdrop-blur-md
transition-all
duration-300
hover:scale-110

opacity-100
md:opacity-0
md:group-hover:opacity-100
"
                            >
                                <FaEye size={16} className="sm:hidden" />
                                <FaEye size={18} className="hidden sm:block" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <Link
                    to={`/projects/${slug}`}
                    onClick={() => context.setSliderStat(true)}
                    className="flex flex-1 flex-col px-4 pt-4 sm:px-6 sm:pt-5"
                >
                    <div className="cardTitle flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold tracking-tight text-(--text-primary) transition-colors duration-200 group-hover:text-(--avo-primary) sm:text-xl">
                            {title}
                        </h3>

                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-(--avo-primary) shadow-[0_0_12px_var(--avo-primary)]" />
                    </div>

                    <p className="cardDescription mt-2 line-clamp-3 text-sm leading-relaxed text-(--text-secondary)">
                        {description}
                    </p>

                    {techStack && techStack.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                            {techStack.map((tech, index) => (
                                <MiniButtonOutline key={index} tech={tech} />
                            ))}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between pt-4 pb-5 sm:pt-5 sm:pb-6">
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-8 rounded-full bg-(--avo-primary) transition-all duration-500 group-hover:w-14 sm:w-10 sm:group-hover:w-16" />
                            <div className="h-0.5 w-8 rounded-full bg-(--border-light) sm:w-10" />
                        </div>

                        <span className="flex items-center gap-1.5 text-sm font-medium text-(--avo-primary) transition-all duration-300 md:opacity-0 md:group-hover:translate-x-0.5 md:group-hover:opacity-100">
                            View
                            <FaArrowRight size={12} />
                        </span>
                    </div>
                </Link>
            </div>
        )
    }

    export default ProjectCard