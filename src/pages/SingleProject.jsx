import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectsData';
import Wrapper from '../assets/wrappers/SingleProject';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const SingleProject = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return (
            <Wrapper>
                <div className="container">
                    <div className="error-container">
                        <h2>Project Not Found</h2>
                        <p>Sorry, the project you are looking for does not exist.</p>
                        <Link to="/projects" className="btn">
                            back to projects
                        </Link>
                    </div>
                </div>
            </Wrapper>
        );
    }

    const { title, description, image, technologies, github, demo } = project;

    return (
        <Wrapper>
            <div className="container page">
                <Link to="/projects" className="back-link">
                    <FaArrowLeft /> Back to Projects
                </Link>

                <div className="project-header">
                    <h2>{title}</h2>
                    <div className="underline"></div>
                </div>

                <div className="single-project">
                    <div className="project-image">
                        <img src={image} alt={title} loading="lazy" />
                    </div>

                    <div className="project-details">
                        <div className="project-description">
                            <h4>Project Overview</h4>
                            <p>{description}</p>
                        </div>

                        <div className="technologies">
                            <h4>Technologies Used</h4>
                            <div className="tech-list">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="tech-item">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links">
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                                    <FaGithub /> GitHub Repo
                                </a>
                            )}
                            {demo && (
                                <a href={demo} target="_blank" rel="noopener noreferrer" className="btn">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SingleProject; 