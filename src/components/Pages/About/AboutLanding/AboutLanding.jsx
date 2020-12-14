import React from 'react'
import home1 from '../../../../assets/img/bg-pattern-about-1-mobile-nav-1.svg'
import './AboutLanding.scss'

function AboutLanding() {
    return (
        <div className="aboutlanding">
            <div className="aboutlanding_container">
                <div className="aboutlanding_title">
                    <h2>About</h2>
                </div>
                <div className="aboutlanding_paragraph">
                    <p>
                    We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
                    </p>
                </div>
            </div>
            <div className="aboutlanding_images">
                <img src={home1} alt="home-1" className="aboutlanding_images--1" />
            </div>
        </div>
    )
}

export default AboutLanding
