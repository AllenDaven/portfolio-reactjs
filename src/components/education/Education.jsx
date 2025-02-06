import React, { useState } from "react";
import "./education.css";
import Lithan_logo from "../../assets/lithan_logo.png";
import EduClaaS_logo from "../../assets/educlaas_logo.png";
import UC_logo from "../../assets/uc_logo.png";
import Talamban_logo from "../../assets/talamban_logo.png";

const Education = () => {
    const [toggleState, setToggleState] = useState(1);
            
        const toggleTab = (index) => {
            setToggleState(index);
            };
    
    return (
        <section className="education section" id="education">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="education__container container">
                <div className="education__tabs">
                    <div className={toggleState === 1 ? 
                        "education__button education__active button--flex" 
                        : "education__button button--flex"} 
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap 
                            education__icon"></i>
                            Education
                    </div>
                    <div className={toggleState === 2 ? 
                        "education__button education__active button--flex" 
                        : "education__button button--flex"} 
                        onClick={() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt 
                            education__icon"></i>
                            Experience
                    </div>
                </div>

                <div className="education__sections">
                    <div className={toggleState === 1 ? "education__content education__content-active" : "education__content"}>
                        <div className="education__data">
                            <div>
                                <a href="https://www.lithan.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={Lithan_logo} className="education__school-logo" alt="Lithan Academy Logo" />
                                </a>

                                <h2 className="education__subtitle">College</h2>

                                <h3 className="education__title">LITHAN ACADEMY SINGAPORE</h3>

                                <span className="education__subtitle">Applied Degree in Software Engineering</span>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="education__rounder"></span>

                                <span className="education__line"></span>
                            </div>
                        </div>

                        <div className="education__data">
                            <div></div>

                            <div>
                                <span className="education__rounder"></span>

                                <span className="education__line"></span>
                            </div>

                            <div>
                                <a href="https://www.universityofcebu.net/" target="_blank" rel="noopener noreferrer">
                                    <img src={UC_logo} className="education__school-logo" alt="University of Cebu Logo" />
                                </a>

                                <h2 className="education__subtitle">College</h2>

                                <h3 className="education__title">UNIVERSITY OF CEBU - BANILAD CAMPUS</h3>

                                <span className="education__subtitle">Bachelor of Science in Information Technology</span>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className="education__data">
                            <div>
                                <a href="https://www.universityofcebu.net/" target="_blank" rel="noopener noreferrer">
                                    <img src={UC_logo} className="education__school-logo" alt="University of Cebu Logo" />
                                </a>

                                <h2 className="education__subtitle">Senior High School</h2>

                                <h3 className="education__title">UNIVERSITY OF CEBU - BANILAD CAMPUS</h3>

                                <span className="education__subtitle">Accountancy, Business and Management (ABM Strand)</span>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="education__rounder"></span>

                                <span className="education__line"></span>
                            </div>
                        </div>

                        <div className="education__data">
                            <div></div>

                            <div>
                                <span className="education__rounder"></span>

                                <span className="education__line"></span>
                            </div>

                            <div>
                                <img src={Talamban_logo} className="education__school-logo" alt="University of Cebu Logo" />

                                <h2 className="education__subtitle">Junior High School</h2>

                                <h3 className="education__title">TALAMBAN NATIONAL HIGH SCHOOL</h3>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "education__content education__content-active" : "education__content"}>
                        <div className="education__data">
                            <div></div>

                            <div>
                                <span className="education__rounder"></span>

                                <span className="education__line"></span>
                            </div>

                            <div>
                                <a href="https://www.lithan.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={EduClaaS_logo} className="education__school-logo" alt="EduClaaS Pte Ltd Logo" />
                                </a>

                                <h2 className="education__subtitle">Apprenticeship</h2>

                                <h3 className="education__title">Technology Associate</h3>

                                <span className="education__subtitle">eduCLaaS Pte Ltd | Remote (Singapore)</span>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i> September 2024 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education