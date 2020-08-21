import React from 'react';

const SkillsContainer = () => {
    const skills = {
        "Front End": ["JavaScript", "React & Redux", "jQuery", "RESTful APIs"],
        "Back End": ["Ruby", "Rails", "MVC", "OOP"],
        "Stay Classy": ["Illustrator", "3D Modeling", "Bootstrap"],
    }

    const generateSkills = () => {
        return Object.keys(skills).map((k, i) => {
            return (
                <div key={i} className="skill-card">
                    <h2>{k}</h2>
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
            <div id="skills-border" className="wrapper"></div>
        </section>
    )
}

export default SkillsContainer;