import React, { Component } from 'react';
import Mission from '../components/Mission';
import ProjectContainer from './ProjectContainer';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

class HomeContainer extends Component {
    render() {
        return (
            <div className="shadow">
                <Mission />
                <ProjectContainer />
                <Bio />
                <Footer />
            </div>
        )
    }
}

export default HomeContainer;