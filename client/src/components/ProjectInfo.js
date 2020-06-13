import React from 'react';
import { ReactComponent as GithubSVG } from '../images/github.svg';

const generateTechnologies = tech => {
    return tech.map((t, i) => {
        return (
            <li key={i} >
                <span className="technology">{t}</span>
            </li>
        )
    })
}

const ProjectInfo = props => {
    const project = props.project;

    return (
        <div id="carousel-info">
            <div id="carousel-links">
                <a href={project.links.heroku} target="_blank">
                    <h1>{project.title}</h1>
                </a>
                <a href={project.links.github} target="_blank" >
                    <GithubSVG id="svg-github" />
                </a>
            </div>
            <p>{project.description}</p>
            <div id="carousel-technologies">
                <ul>
                    {generateTechnologies(project.tech)}
                </ul>
            </div>
        </div>
    )
}

export default ProjectInfo;