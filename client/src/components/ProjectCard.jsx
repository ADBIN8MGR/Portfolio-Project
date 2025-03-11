import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ProjectCard';

const ProjectCard = ({ id, title, image, description }) => {
    return (
        <Wrapper>
            <div className="project-img-container">
                <img src={image} alt={title} className="project-img" loading="lazy" />
            </div>
            <div className="project-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <Link to={`/projects/${id}`} className="btn">
                    details
                </Link>
            </div>
        </Wrapper>
    );
};

export default ProjectCard; 