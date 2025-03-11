import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../pages/projectsData';
import Wrapper from '../assets/wrappers/Porjects';

const Projects = () => {
    return (
        <Wrapper>
            <div className="container page">
                <div className="projects-header">
                    <h2>My Projects</h2>
                    <div className="underline"></div>
                    <p>
                        Here are some of my recent projects. Each project showcases different skills and technologies.
                        Click on a project to learn more about it.
                    </p>
                </div>
                <div className="projects-container">
                    {projects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />;
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

export default Projects; 