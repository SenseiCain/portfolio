import React from 'react';
import MobileMac from './MobileMac';
import { ReactComponent as GithubSVG } from '../images/github.svg';
import { ReactComponent as YoutubeSVG } from '../images/youtube.svg';
import { ReactComponent as WebsiteSVG } from '../images/world-wide-web.svg'

const ProjectList = ({projects}) => {

    const githubLink = github => <a href={github} target="_blank" rel="noopener noreferrer" ><GithubSVG className="mobile-svg" /></a>;
    const websiteLink = link => <a href={link} target="_blank" rel="noopener noreferrer" ><WebsiteSVG className="mobile-svg" /></a>;
    const youtubeLink = youtube => <a href={youtube} target="_blank" rel="noopener noreferrer" ><YoutubeSVG className="mobile-svg" /></a>;
    

    const generateTechnologies = technologies => {
        return technologies.map((t,i) => {
            return <div key={i} className="technology">{t.title}</div>
        })
    }

    const generateProject = ({title, description, img, github, link, youtube, technologies}, i) => {
        return (
            <div key={i} className="project-card">
                <MobileMac 
                    className="svg"
                    src={img ? img : "" }  />
                <div className="project-card-title">
                    <h2>{title ? title : "Loading"}</h2>
                    {link ? websiteLink(link) : ""}
                    {github ? githubLink(github) : ""}
                    {youtube ? youtubeLink(youtube) : ""}
                </div>
                <p>{description}</p>
                <div className="technologies">
                    {generateTechnologies(technologies)}
                </div>
            </div>
        )
    }

    const conditionalRender = projects => {

        if (!!projects.length) {
            return projects.map((p,i) => generateProject(p, i))
        } else {
            return (
                <div className="project-card">
                <MobileMac 
                    className="svg"
                    src=""  />
                <div className="project-card-title">
                    <h2>Loading...</h2>
                </div>
                <p>Loading...</p>
                <div className="technologies">
                </div>
            </div>
            )
        }
    }

    return (
        <div id="project-list">
            {conditionalRender(projects)}
        </div>
    )
}

export default ProjectList;