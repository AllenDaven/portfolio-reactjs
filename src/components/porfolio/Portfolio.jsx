import React, { useState } from 'react';
import "./portfolio.css";
import UsedCar from "../../assets/usedcar.png";
import Dobu from "../../assets/dobu.png";
import Enomy from "../../assets/enomy.png";
import Judo from "../../assets/judo.png";
import MerryMeals from "../../assets/merrymeals.png";

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Most Recent Projects</span>

            <div className="portfolio__container container grid">
                <div className="portfolio__content">
                    <div>
                        <img src={Dobu} alt="" className="portfolio__img" />
                        <h3 className="portfolio__title">Dobu Martial Arts</h3>
                    </div>

                    <span className="portfolio__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right 
                    portfolio__button-icon"></i></span>

                    <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                        <div className="portfolio__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            portfolio__modal-close"></i>
                            <h3 className="portfolio__modal-title">Dobu Martial Arts</h3>
                            <p className="portfolio__modal-description">This project aims to create a dynamic and user-friendly website for DoBu Martial Arts, a renowned martial arts training facility in the UK. The website showcases detailed information about martial arts disciplines, class schedules, membership options, and more. It is designed to be both visually appealing and technically robust, meeting the unique needs of DoBu Martial Arts.</p>

                            <ul className="portfolio__modal-portfolio grid">
                                <li className="portfolio__modal-portfolio">

                                    <p className="portfolio__modal-info">Technologies : HTML, CSS, and JavaScript</p>

                                    <a href="https://github.com/AllenDaven/dubomartialarts-website.github.io" className="portfolio__modal-language" target="_blank">SOURCE CODE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="portfolio__content">
                    <div>
                        <img src={Enomy} alt="" className="portfolio__img" />
                        <h3 className="portfolio__title">Enomy-Finances</h3>
                    </div>

                    <span className="portfolio__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right 
                    portfolio__button-icon"></i></span>

                    <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                        <div className="portfolio__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            portfolio__modal-close"></i>
                            <h3 className="portfolio__modal-title">Enomy-Finances</h3>
                            <p className="portfolio__modal-description">This project aims to design and implement a new computer system for Enomy-Finances, a financial services organization specializing in mortgages, savings, and investments. The new system will support both staff and clients, with a potential transition from a networked application to a web-based solution.</p>

                            <ul className="portfolio__modal-portfolio grid">
                                <li className="portfolio__modal-portfolio">

                                    <p className="portfolio__modal-info">Technologies : HTML, CSS, JavaScript, Bootstrap, Spring MVC, Spring Security, and MySQL</p>

                                    <a href="https://github.com/AllenDaven/Enomy-Finances" className="portfolio__modal-language" target="_blank">SOURCE CODE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="portfolio__content">
                    <div>
                        <img src={UsedCar} alt="" className="portfolio__img" />
                        <h3 className="portfolio__title">ABC Car Portal</h3>
                    </div>

                    <span className="portfolio__button" onClick={() => toggleTab(4)}>View More <i className="uil uil-arrow-right 
                    portfolio__button-icon"></i></span>

                    <div className={toggleState === 4 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                        <div className="portfolio__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            portfolio__modal-close"></i>
                            <h3 className="portfolio__modal-title">ABC Cars Portal</h3>
                            <p className="portfolio__modal-description">A used car sales portal where users are allowed to register, search for a car by its brand, model, manufacturing and registration data, and price range. Users ar also allowed to post a car for saler and bid for a car. Made using Spring tool Suite uses Spring Security for user authentication.</p>

                            <ul className="portfolio__modal-portfolio grid">
                                <li className="portfolio__modal-portfolio">

                                    <p className="portfolio__modal-info">Technologies : HTML, CSS, JavaScript, Bootstrap, Java, Spring Boot, Spring Security and  MySQL,</p>

                                    <a href="https://github.com/AllenDaven/Used-Car-Sales-Portal" className="portfolio__modal-language" target="_blank">SOURCE CODE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="portfolio__content">
                    <div>
                        <img src={MerryMeals} alt="" className="portfolio__img" />
                        <h3 className="portfolio__title">ABC Car Portal</h3>
                    </div>

                    <span className="portfolio__button" onClick={() => toggleTab(5)}>View More <i className="uil uil-arrow-right 
                    portfolio__button-icon"></i></span>

                    <div className={toggleState === 5 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                        <div className="portfolio__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            portfolio__modal-close"></i>
                            <h3 className="portfolio__modal-title">Wheels on Meals</h3>
                            <p className="portfolio__modal-description">A charity-driven online food delivery service for adults unable to cook due to age, illness, or disability. This solution will streamline the entire process from member and caregiver registration to meal delivery management, ensuring efficient operation and enhanced service delivery.</p>

                            <ul className="portfolio__modal-portfolio grid">
                                <li className="portfolio__modal-portfolio">

                                    <p className="portfolio__modal-info">Technologies : PHP, Laravel, Blade, and  phpMyAdmin</p>

                                    <a href="https://github.com/AllenDaven/merrymeals-meals-on-wheels" className="portfolio__modal-language" target="_blank">SOURCE CODE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio