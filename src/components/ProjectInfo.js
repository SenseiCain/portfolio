import React, { Fragment } from 'react';
import { ReactComponent as GithubSVG } from '../images/github.svg';
import { ReactComponent as YoutubeSVG } from '../images/youtube.svg';
import { ReactComponent as WebsiteSVG } from '../images/world-wide-web.svg'

const generateTechnologies = technologies => {
    return ((technologies) ? technologies : [{title: "Loading"}]).map((t, i) => {
        return (
            <li key={i} >
                <span key={i} className="technology">{t.title}</span>
            </li>
        )
    })
}

const generateLinks = ({github, link, youtube}) => {
    const githubLink = () => <a href={github} target="_blank" rel="noopener noreferrer" ><GithubSVG className="svg-link" /></a>;
    const websiteLink = () => <a href={link} target="_blank" rel="noopener noreferrer" ><WebsiteSVG className="svg-link" /></a>;
    const youtubeLink = () => <a href={youtube} target="_blank" rel="noopener noreferrer" ><YoutubeSVG className="svg-link" /></a>;

    return (
        <Fragment>
            <li>{link ? websiteLink() : ""}</li>
            <li>{github ? githubLink() : ""}</li>
            <li>{youtube ? youtubeLink() : ""}</li>
        </Fragment>
    )
}

const ProjectInfo = ({project}) => {

    return (
        <div id="carousel-info-inside">
            <div id="carousel-title">
                <h2>{(project) ? project.title : "Loading..."}</h2>
                {project ? generateLinks(project) : ""}
            </div>
            <p>{(project) ? project.description : "Loading..."}</p>
            <div id="carousel-technologies">
                <ul>
                    {project ? generateTechnologies(project.technologies) : ""}
                </ul>
            </div>
        </div>
    )
}

export default ProjectInfo;