import React from 'react'
import './HomeAbout.scss'
import home3 from '../../../../assets/img/bg-pattern-home-3.svg'
import HomeAboutData from './HomeAboutData'

function HomeAbout() {
    return (
        <div className="homeabout">
            <div className="homeabout_container">
                <div className="homeabout_title">
                    <h2>Build & manage distributed teams like no one else.</h2>
                </div>
                
                <div className="homeabout_services">
                    {HomeAboutData.map((item, index) => (
                        <div className="homeabout_box" key={index}>
                            <img src={item.img} alt="img-1" />
                            <div className="homeabout_features">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="homeabout_img">
                    <img src={home3} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
