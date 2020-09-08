import React, { Component } from 'react';
import Mission from '../components/Mission';
import ProjectContainer from './ProjectContainer';
import SkillsContainer from './SkillsContainer';
import { Responsive } from 'responsive-react';

class HomeContainer extends Component {
    render() {
        return (
            <section className="page-inner">
                <div className="grow">
                    <Mission />
                    <ProjectContainer />
                    <Responsive
                        displayIn={["Laptop", "Tablet"]}>
                        <SkillsContainer />
                    </Responsive>
                </div>
            </section>
        )
    }
}

export default HomeContainer;