import type { IconBaseProps, IconType } from "react-icons"

export interface navLinksData {
    title: string
    path: string
}

export interface ButtonProps {
    className?: string
    value: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    Icon?: IconType
    options?: IconBaseProps
}

export interface ViewProps {
    path: string
    content?: string
    className?: string
}

export interface IconProps {
    className?: string
    Value: IconType
    onClick?: () => void
    options?: IconBaseProps
    addHover?: boolean
}

export interface LinkType {
    icon: IconType
    link: string
}

export interface headingProps {
    title: string
    center?: boolean
    className?: string
}

export interface whatAmIDoingProps {
    Icon?: IconType
    options?: IconBaseProps
    title: string
    description: string
}


export interface SkillCardProps {
    Icon?: IconType
    options?: IconBaseProps
    title: string
}

export interface AllSkillData {
    title: string,
    data: SkillCardProps[]
}


export interface ProjectCardProps {
    title: string
    slug: string
    description: string
    image: string
    status: "Developing" | "Completed" | "LIVE"
    techStack: string[],
    github?: string
    live?: string
    productDetail?: productDetailProps
}

export interface productDetailProps {
    description: string[]
    techStack: {
        title: string,
        data: string[]
    }[]
    detail: {
        title: string
        data: projectCardDetailProps[]
    }[]
}

export interface projectCardDetailProps {
    title: string
    description: string
}

export interface previewDataInterface {
    Icon?: IconType
    options?: IconBaseProps
    title: string
    data: string
}
export interface inputProps {
    label: string
    name: string
    type?: string
    required?: boolean,
}

export interface verticalTimelineProps {
    Icon?: IconType
    options?: IconBaseProps
    title: string
    card: {
        cardTitle: string
        cardSubTitle: string
        cardDescription: string
    }[]
}

export interface ProjectDetailDataProps {
    title: string
    data: {
        title: string
        description: string
    }[]
}