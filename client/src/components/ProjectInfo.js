import React from 'react';
import { ReactComponent as GithubSVG } from '../images/github.svg';

const generateTechnologies = project => {
    return ((project) ? project.technologies : [{title: "Loading"}]).map((t, i) => {
        return (
            <li key={i} >
                <span key={i} className="technology">{t.title}</span>
            </li>
        )
    })
}

const ProjectInfo = props => {
    const project = props.project;

    return (
        <div id="carousel-info-inside">
            <div id="carousel-links">
                <h2>{(project) ? project.title : ""}</h2>
                <a href={(project) ? project.github : ""} target="_blank" rel="noopener noreferrer" >
                    <GithubSVG id="svg-github" />
                </a>
            </div>
            <p>{(project) ? project.description : ""}</p>
            <div id="carousel-technologies">
                <ul>
                    {generateTechnologies(project)}
                </ul>
            </div>
        </div>
    )
}

export default ProjectInfo;