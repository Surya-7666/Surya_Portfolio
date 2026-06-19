import { useRef } from 'react'
import { whatAmIDoing } from '../../data/data'
import SubHeading from '../common/headings/SubHeading'
import AboutCard from './AboutCard'
import useGSAPHeading from '../../hooks/useGSAPHeading'

const About = () => {

  const about = useRef(null)

  useGSAPHeading(".aboutHeading", about)

  return (
    <>
      <div ref={about}>
        <div className='aboutHeading'>
          <SubHeading title='What Am I Doing?' center />
        </div>
        <div className='flex gap-5 flex-wrap my-15'>
          {
            whatAmIDoing.map((item, index) => (
              <AboutCard key={index} title=     {item.title} description={item.description} Icon={item.Icon} options={{ size: 50 }} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default About