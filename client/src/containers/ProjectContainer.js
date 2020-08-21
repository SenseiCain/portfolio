import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectList from '../components/ProjectList';
import fetchProjects from '../actions/fetchProjects';
import { Responsive } from 'responsive-react';

class ProjectContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        return (
            <section id="projects">
                <h1>Projects</h1>
                <Responsive
                    displayIn={["Laptop", "Tablet"]}>
                    <ProjectCarousel 
                        project={this.props.projects[this.props.active]}
                        nextProject={this.props.nextProject}
                        prevProject={this.props.prevProject}
                        activeIndex={this.props.active} />
                </Responsive>
                <Responsive
                    displayIn={["Mobile"]}>
                    <ProjectList
                        projects={this.props.projects} />
                </Responsive>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return { projects: state.projects.list, active: state.projects.activeIndex }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        nextProject: () => dispatch({ type: "NEXT_PROJECT" }),
        prevProject: () => dispatch({ type: "PREVIOUS_PROJECT" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);