import { useGSAP } from "@gsap/react";
import type { SkillCardProps } from "../../types/type";
import triggerFade from "../../animations/triggerFade";
import { useRef } from "react";

const SkillCard = ({ title, Icon, options }: SkillCardProps) => {

    const skillCard = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: skillCard.current,
            trigger: skillCard.current,
            direction: "down",
            start: "top bottom",
            end: "+=100"
        })
    })
    return (
        <div ref={skillCard} className="card w-60 mx-auto text-center shrink-0 group relative overflow-hidden rounded-3xl border border-(--border-light) bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(132,204,22,0.18)]">

            {Icon && (
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl border border-(--border-light) bg-(--bg-card) shadow-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 mx-auto">
                    <Icon
                        {...options}
                        className="text-(--avo-primary)"
                    />
                </div>
            )}

            <div className="relative z-10 mt-5">
                <h3 className="text-2xl font-bold text-(--text-primary) tracking-tight">
                    {title}
                </h3>

            </div>

            <div style={{ background: `linear-gradient(to right, ${options?.color}20 ,${options?.color}, ${options?.color}20` }} className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full`} />
        </div>
    );
};

export default SkillCard;