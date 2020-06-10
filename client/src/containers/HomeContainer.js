import React, { Component } from 'react';
import Mission from '../components/Mission';
import ProjectContainer from './ProjectContainer';
import Bio from '../components/Bio';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Mission />
                <ProjectContainer />
                <Bio />
            </div>
        )
    }
}

export default HomeContainer;