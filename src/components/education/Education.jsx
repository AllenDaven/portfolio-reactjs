import React from 'react';
import "./education.css";
import Lithan_logo from "../../assets/lithan_logo.png";
import UC_logo from "../../assets/uc_logo.png";
import Talamban_logo from "../../assets/talamban_logo.png";

const Education = () => {
    return (
        <section className="education section" id="education">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My Educational Timeline</span>

            <div className="education__container container">
                <div className="education__tabs">
                    <div className="education__button 
                        education__active button--flex">
                        <i className="uil uil-graduation-cap 
                        education__icon"></i>Education
                    </div>
                </div>

                <div className="education__sections">
                    <div className="education__content">
                        <div className="education__data">
                            <div>
                                <img src={Lithan_logo} className="education__school-logo" alt="Lithan Academy Logo" />

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
                                <img src={UC_logo} className="education__school-logo" alt="University of Cebu Logo" />

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
                                <img src={UC_logo} className="education__school-logo" alt="University of Cebu Logo" />

                                <h2 className="education__subtitle">Senior High School</h2>

                                <h3 className="education__title">UNIVERSITY OF CEBU - BANILAD CAMPUS</h3>

                                <span className="education__subtitle">Major in Accountancy, Business and Management (ABM Strand)</span>

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
                </div>
            </div>
        </section>
    )
}

export default Education