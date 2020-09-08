import React, { Component } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectList from '../components/ProjectList';
import { Responsive } from 'responsive-react';

import projectData from '../projects.json';

class ProjectContainer extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            activeIndex: 0
        }
    }

    componentDidMount() {
        this.setState({
            projects: projectData.projects
        });
    }

    nextProject = () => {
        if ( this.state.activeIndex === this.state.projects.length - 1) {
            this.setState({
                activeIndex: 0
            });
            
        } else {
            this.setState(prevState => ({
                activeIndex: prevState.activeIndex + 1
            }));
        }
    }

    prevProject = () => {
        if ( this.state.activeIndex === 0 ) {
            this.setState({
                activeIndex: this.state.projects.length - 1
            });
        } else {
            this.setState(prevState => ({
                activeIndex: prevState.activeIndex - 1
            }));
        }
    }

    render() {
        return (
            <section id="projects">
                <h1>Projects</h1>
                <Responsive
                    displayIn={["Laptop", "Tablet"]}>
                    <ProjectCarousel 
                        project={this.state.projects[this.state.activeIndex]}
                        nextProject={this.nextProject}
                        prevProject={this.prevProject}
                        activeIndex={this.state.activeIndex} />
                </Responsive>
                <Responsive
                    displayIn={["Mobile"]}>
                    <ProjectList
                        projects={this.state.projects} />
                </Responsive>
            </section>
        )
    }
}

export default ProjectContainer;