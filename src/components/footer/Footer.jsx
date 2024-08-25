import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Allen Daven</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>


                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/allen_daven/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/allen.daven?mibextid=ZbWKwL" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/allen-daven-argallon-68a12729b/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/AllenDaven" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">Allen Daven Argallon | 2024</span>
            </div>
        </footer>
    );
};

export default Footer