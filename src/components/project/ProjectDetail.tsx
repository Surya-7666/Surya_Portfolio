import { useParams } from "react-router-dom"
import { projectsData } from "../../data/data"
import MiniButton from "./MiniButton"
import SubHeading from "../common/headings/SubHeading"
import ProjectDetailCard from "./ProjectDetailCard"
import ProjectDetailData from "./ProjectDetailData"
import NotFound from "../../errors/NotFound"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import ViewButton from "../common/buttons/ViewButton"
import useGSAPMultiHeading from "../../hooks/useGsapMultiHeading"

const ProjectDetail = () => {


  const { slug } = useParams()
  const projectDetail = useRef(null);
  const project = projectsData.find(item => item.slug === slug)
  const headings = [".techHeading", ".heading-1", ".AboutProjectHeading", ".DetailedTechStack"]

  useGSAPMultiHeading(headings, projectDetail)

  useGSAP(() => {
    if (!project || !projectDetail.current) return;


    triggerFade({
      target: ".image",
      direction: "right",
      distance: 500,
      trigger: ".image",
      start: "top bottom",
      end: "+=400"
    })
    triggerFade({
      target: ".status",
      direction: "left",
      distance: 150,
      trigger: ".status",
      start: "top bottom",
      end: "+=300"
    })
    triggerFade({
      target: ".description",
      direction: "right",
      distance: 1350,
      trigger: ".description",
      start: "top bottom",
      end: "+=300"
    })
    triggerFade({
      target: ".viewBtn",
      trigger: ".viewBtn",
      start: "top bottom",
      end: "+=300"
    })
    triggerFade({
      target: ".AboutProjectPera",
      direction: "right",
      distance: 1000,
      trigger: ".AboutProjectPera",
      start: "top bottom",
      end: "+=200"
    })
  }, { scope: projectDetail })

  if (!project) {
    return (
      <NotFound message="project not found" />
    )
  }

  return (
    <section className="pt-35 px-5 pb-20" ref={projectDetail}>
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <img src={project.image} alt={project.title} className="image rounded-3xl w-full max-h-70 object-contain drop-shadow-(--shadow-lg) hover:scale-[1.01] transition-all duration-300" />

        <div className="mt-10">

          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-(--text-primary) heading-1">
              {project.title}
            </h1>

            <span className="status px-4 py-1.5 rounded-full text-sm font-medium border border-(--border-light) bg-green-100 text-green-700">
              {project.status}
            </span>
          </div>

          <p className="description mt-6 text-lg leading-relaxed text-(--text-secondary)">
            {project.description}
          </p>

          <div className="mt-6 flex gap-4 flex-wrap viewBtn">

            {
              project.github && (
                <ViewButton path={project.github} content="GitHub🔗" />
              )
            }

            {
              project.live && (
                <ViewButton path={project.live} content="LIVE🔗" />
              )
            }

          </div>

          <div className="mt-10">
            <div className="techHeading">
              <SubHeading title={"Tech Stack"} />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">

              {
                project.techStack.map((tech, index) => (
                  <MiniButton key={index} tech={tech} />
                ))
              }

            </div>
          </div>

        </div>

        {
          project.productDetail && (
            <div className="mt-18 space-y-18 py-2">

              <div>
                <div className="AboutProjectHeading">
                  <SubHeading title="About Project" />
                </div>

                <div className="mt-6 space-y-5">
                  {
                    project.productDetail.description.map((item, index) => (
                      <p key={index} className="AboutProjectPera text-lg leading-relaxed text-(--text-secondary)">{item}</p>
                    ))
                  }
                </div>
              </div>

              <div>
                <div className="DetailedTechStack">
                  <SubHeading title="Detailed Tech Stack" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {
                    project.productDetail.techStack.map((stack, index) => (
                      <ProjectDetailCard key={index} data={stack.data} title={stack.title} />
                    ))
                  }
                </div>
              </div>

              {
                project.productDetail.detail.map((det, index) => (
                  <ProjectDetailData key={index} data={det.data} title={det.title} />
                ))
              }

            </div>
          )
        }

      </div>
    </section>
  )
}

export default ProjectDetail