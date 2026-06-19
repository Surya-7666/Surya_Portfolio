import { Route, Routes } from "react-router-dom"
import Header from "../layouts/Header"
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import Skills from "../pages/Skills"
import Project from "../pages/Project"
import ProjectDetail from "../components/project/ProjectDetail"
import NotFound from "../errors/NotFound"
import Footer from "../layouts/Footer"
import Contact from "../pages/Contact"
import Slider from "../layouts/Slider"

const Portfolio = () => {
    return (
        <>
            <main>
                <Header />
                <Slider >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/projects/:slug" element={<ProjectDetail />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound message="page not found" />} />
                    </Routes>
                </Slider>
                <Footer />
            </main>
        </>
    )
}

export default Portfolio