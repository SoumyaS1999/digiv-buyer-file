import { projectsOneData } from '@/db/projectsOneData'
import React from 'react'
import ProjectsUseCase from '../projectsUseCase'
import { Link } from 'react-router-dom'
import SlideDown from '@/utils/animations/slideDown'
import SlideUp from '@/utils/animations/slideUp'

const ProjectsOne = ({ isProjectUseCaseShow }) => {
    return (
        <section className="projects py__130">
            <div className="container">
                {/* title Start */}
                <SlideDown className="d-lg-flex justify-content-between align-items-center projects__title">
                    <h1 className="title">Our latest work for our best customer</h1>
                    <Link to="/projects" className="circle mt-5 mt-lg-0">
                        <i className="fa-solid fa-arrow-right"></i>
                        <span>View All Project</span>
                    </Link>
                </SlideDown>
                {/* title End */}
                <div className="projects__wapper">
                    {
                        projectsOneData.map(({ categories, id, imgSrc, title }) => {
                            return (
                                <SlideUp delay={id} key={id} className="projects__wapper_card">
                                    <Link to="/project-details"><img src={imgSrc} alt /></Link>
                                    <div>
                                        <Link to="/project-details" className="prj__title t__28">{title}</Link>
                                        <p className="project__group">{categories}</p>
                                    </div>
                                </SlideUp>
                            )
                        })
                    }

                </div>
                {
                    isProjectUseCaseShow &&
                    <ProjectsUseCase />
                }
            </div>
        </section>

    )
}

export default ProjectsOne