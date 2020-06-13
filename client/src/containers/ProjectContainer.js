import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCarousel from '../components/ProjectCarousel';

class ProjectContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-main">
                    <ProjectCarousel 
                        projects={this.props.projects}
                        nextProject={this.props.nextProject}
                        prevProject={this.props.prevProject}
                        activeIndex={this.props.active} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { projects: state.projects, active: state.activeIndex }
}

const mapDispatchToProps = dispatch => {
    return {
        nextProject: () => dispatch({ type: "NEXT_PROJECT" }),
        prevProject: () => dispatch({ type: "PREVIOUS_PROJECT" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);