import React, { useState } from 'react';
import "./skills.css";
import HTMLIcon from "../../assets/html.png";
import CSSIcon from "../../assets/css.png";
import JSIcon from "../../assets/javascript.png";
import JAVAIcon from "../../assets/java.png";
import MYSQLIcon from "../../assets/mysql.png";
import BPIcon from "../../assets/bootstrap.png";
import SBIcon from "../../assets/springboot.png";
import SMVCIcon from "../../assets/springmvc.png";
import RJSIcon from "../../assets/reactjs.png";
import RAPIIcon from "../../assets/restapi.png";
import TSCRIPTIcon from "../../assets/typescript.png";
import ARPIcon from "../../assets/axure.png";
import FIGMAIcon from "../../assets/figma.png";
import LIFERAYIcon from "../../assets/liferay.png";
import PHPIcon from "../../assets/php.png";
import LARAVELIcon from "../../assets/laravel.png";
import HUBSPOTIcon from "../../assets/hubspot.png";
import POSTMANIcon from "../../assets/postman.png";
import POWERBIIcon from "../../assets/powerBi.png";
import POWERAUTOMATEIcon from "../../assets/powerAutomate.png";
import COPILOTSTUDIOIcon from "../../assets/copilotStudio.png";

const skills = [
    { icon: HTMLIcon, name: "HTML", percentage: 95, category: "Front-End" },
    { icon: CSSIcon, name: "CSS", percentage: 90, category: "Front-End" },
    { icon: JSIcon, name: "JAVASCRIPT", percentage: 75, category: "Language" },
    { icon: JAVAIcon, name: "JAVA", percentage: 85, category: "Language" },
    { icon: PHPIcon, name: "PHP", percentage: 80, category: "Language" },
    { icon: MYSQLIcon, name: "MYSQL", percentage: 90, category: "Back-End" },
    { icon: BPIcon, name: "BOOTSTRAP", percentage: 60, category: "Front-End" },
    { icon: LARAVELIcon, name: "LARAVEL", percentage: 75, category: "Back-End" },
    { icon: SBIcon, name: "SPRING BOOT", percentage: 85, category: "Back-End" },
    { icon: SMVCIcon, name: "SPRING MVC", percentage: 80, category: "Back-End" },
    { icon: RJSIcon, name: "REACT JS", percentage: 70, category: "Front-End" },
    { icon: RAPIIcon, name: "REST API", percentage: 85, category: "Back-End" },
    { icon: ARPIcon, name: "AXURE RP", percentage: 80, category: "Tools" },
    { icon: HUBSPOTIcon, name: "HUBSPOT", percentage: 75, category: "Tools" },
    { icon: POSTMANIcon, name: "POSTMAN", percentage: 65, category: "Tools" },
    { icon: POWERBIIcon, name: "POWER BI", percentage: 60, category: "Tools" },
    { icon: POWERAUTOMATEIcon, name: "AUTOMATE", percentage: 75, category: "Tools" },
    { icon: COPILOTSTUDIOIcon, name: "COPILOT", percentage: 80, category: "Tools" },
];

const softSkills = [
    'Time Management',
    'Adaptability',
    'Creativity',
    'Leadership',
    'Communication',
    'Problem Solving',
    'Teamwork',
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("Language");

    const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Tech Stack & Soft Skills</span>

            <div className="category-buttons">
                <button onClick={() => setActiveCategory("Language")} className={`category-button ${activeCategory === "Language" ? "active" : ""}`}>Language</button>
                <button onClick={() => setActiveCategory("Back-End")} className={`category-button ${activeCategory === "Back-End" ? "active" : ""}`}>Back-End</button>
                <button onClick={() => setActiveCategory("Front-End")} className={`category-button ${activeCategory === "Front-End" ? "active" : ""}`}>Front-End</button>
                <button onClick={() => setActiveCategory("Tools")} className={`category-button ${activeCategory === "Tools" ? "active" : ""}`}>Tools</button>
            </div>

            <div className="buttons">
                {filteredSkills.map(skill => (
                    <button className="neumorphic" key={skill.name}>
                        <div className="icon-container">
                            <img src={skill.icon} alt={`${skill.name} Icon`} className="skill-icon" />
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <div className="progress-circle" style={{ '--percentage': skill.percentage }}></div>
                                    <div className="progress-text">{skill.percentage}%</div>
                                </div>
                            </div>
                        </div>
                        <span>{skill.name}</span>
                    </button>
                ))}
            </div>

            {/* Soft Skills Section */}
            <div className="soft-skills-container">
            <div className="soft-skills-slider">
                {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill">
                    {skill}
                </div>
                ))}
                {softSkills.map((skill, index) => (
                <div key={index + softSkills.length} className="soft-skill">
                    {skill}
                </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Skills;
