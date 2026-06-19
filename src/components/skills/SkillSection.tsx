import { useRef } from 'react'
import useGSAPHeading from '../../hooks/useGSAPHeading'
import Heading from '../common/headings/Heading'
import SkillCard from './SkillCard'
import type { AllSkillData } from '../../types/type'

const SkillSection = ({title, data}: AllSkillData) => {
    const skills = useRef(null)

    useGSAPHeading(".heading", skills)
    return (
        <div ref={skills} className='my-17'>
            <div className="heading mt-15">
                <Heading title={title} center className="scale-130" />
            </div>
            <div className="flex flex-wrap gap-5 my-15 px-auto md:px-15">
                {
                    data.map((elem, index) => (
                        <SkillCard key={index} title={elem.title} Icon={elem.Icon} options={elem.options} />
                    ))
                }
            </div>
        </div>
    )
}

export default SkillSection