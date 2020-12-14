import React from 'react'
import './HomeAbout.scss'
import Person from '../../../../assets/img/icon-person.svg'
import Cog from '../../../../assets/img/icon-cog.svg'
import Chart from '../../../../assets/img/icon-chart.svg'
import home3 from '../../../../assets/img/bg-pattern-home-3.svg'

function HomeAbout() {
    return (
        <div className="homeabout">
            <div className="homeabout_container">
                <div className="homeabout_title">
                    <h2>Build & manage distributed teams like no one else.</h2>
                </div>
                
                <div className="homeabout_services">
                    <div className="homeabout_box">
                        <img src={Person} alt="img-1" />
                        <div className="homeabout_features">
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>

                    <div className="homeabout_box">
                        <img src={Cog} alt="img-2" />
                        <div className="homeabout_features">
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>

                    <div className="homeabout_box">
                        <img src={Chart} alt="img-3" />
                        <div className="homeabout_features">
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>

                <div className="homeabout_img">
                    <img src={home3} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
