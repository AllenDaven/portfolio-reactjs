import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i class='bx bxs-cake about__icon'></i>

                <h3 className="about__title">Birthday:</h3>
                <span className="about__subtitle">December 22, 2004</span>
            </div>

            <div className="about__box">
            <i class='bx bxs-flag-alt about__icon'></i>
            
                <h3 className="about__title">Languages:</h3>
                <span className="about__subtitle">English, Tagalog, & Cebuano</span>
            </div>

            <div className="about__box">
            <i class='bx bx-desktop about__icon'></i>

                <h3 className="about__title">Interests:</h3>
                <span className="about__subtitle">Codding, Reading, & Music</span>
            </div>
            
        </div>
    )
}

export default Info