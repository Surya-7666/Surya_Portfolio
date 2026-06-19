import { useRef } from "react"
import Heading from "../components/common/headings/Heading"
import ProjectCard from "../components/project/ProjectCard"
import { projectsData } from "../data/data"
import useGSAPHeading from "../hooks/useGSAPHeading"

const Project = () => {

  
    const projects = useRef(null);

    useGSAPHeading(".projectHeading", projects)

    return (
    <>
        <section ref={projects} className="md:px-17 pt-20">
            <div className="projectHeading">
                <Heading title="Projects" center className="scale-130" />
            </div>
            <div className="grid grid-cols-1 gap-6 px-4 my-15 sm:grid-cols-2 sm:gap-7 sm:px-6 md:px-0 lg:grid-cols-3 lg:gap-8">
                {
                    projectsData.map((project, index) => (
                        <ProjectCard key={index} description={project.description} status={project.status} slug={project.slug} title={project.title} image={project.image} techStack={project.techStack} github={project.github} live={project.live} />
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Project