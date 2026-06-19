
export interface gsapFadeProps {
    target: gsap.TweenTarget ,
    delay?: number
    duration?: number
    stagger?: number,
    direction?: "up" | "down" | "left" | "right"
    distance?: number,
    timeline?: gsap.core.Timeline,
    position?: string
}

export interface gsapTriggerFadeProps extends gsapFadeProps{
    trigger?: gsap.DOMTarget | string,
    start: string,
    end: string,
    scrub?: boolean,
}