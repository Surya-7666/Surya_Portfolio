import type { ViewProps } from '../../../types/type'

const ViewButton = ({path, content = "View All", className = ""}: ViewProps) => {
    return (
        <>
            <a href={path} target='_blank' className={`underline text-(--color-primary) hover:text-(--color-primary-dark) hover:text-shadow-2xs transition-all duration-200 ${className}`}>
                {content}
            </a>
        </>
    )
}

export default ViewButton