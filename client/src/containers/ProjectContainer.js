import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCarousel from '../components/ProjectCarousel';
import fetchProjects from '../actions/fetchProjects';

class ProjectContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        return (
            <div>
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-main">
                    <ProjectCarousel 
                        project={this.props.projects[this.props.active]}
                        nextProject={this.props.nextProject}
                        prevProject={this.props.prevProject}
                        activeIndex={this.props.active} />
                </div>
            </div>
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