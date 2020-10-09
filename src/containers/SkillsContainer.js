import React from 'react';

const SkillsContainer = () => {
    const skills = {
        "Front End": ["JavaScript", "React & Redux", "jQuery", "RESTful APIs", "GraphQL"],
        "Back End": ["Ruby", "Rails", "MVC", "OOP"],
        "Stay Classy": ["Illustrator", "3D Modeling", "Bootstrap"],
    }

    const generateSkills = () => {
        return Object.keys(skills).map((k, i) => {
            return (
                <div key={i} className="skill-card">
                    <div className="skill-title">
                        <h2>{k}</h2>
                        <div className="skill-wave">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <ul>
                        {skills[k].map((el, i) => <li key={i}>{el}</li>)}
                    </ul>
                </div>
            )
        })
    }

    return (
        <section id="skills">
            <div id="skills-inside" className="wrapper-inside">
                <h1>Skills</h1>
                <div id="skill-cards">
                    {generateSkills()}
                </div>
            </div>
        </section>
    )
}

export default SkillsContainer;