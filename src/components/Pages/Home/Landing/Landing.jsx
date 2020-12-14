import React from 'react'
import home1 from '../../../../assets/img/bg-pattern-home-1.svg'
import home2 from '../../../../assets/img/bg-pattern-home-2.svg'
import './Landing.scss'

function Landing() {
    return (
        <div className="landing">
            <div className="landing_container">
                <div className="landing_title">
                    <h2>Find the best <span>talent</span></h2>
                </div>
                <div className="landing_paragraph">
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>
            <div className="landing_images">
                <img src={home1} alt="home-1" className="landing_images--1" />
                <img src={home2} alt="home-2" className="landing_images--2" />
            </div>
        </div>
    )
}

export default Landing
