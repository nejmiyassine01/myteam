import React from 'react'
import './AboutClients.scss'
import about4 from '../../../../assets/img/bg-pattern-about-4.svg'
import Brand1 from '../../../../assets/img/logo-the-verge.png'
import Brand2 from '../../../../assets/img/logo-jakarta-post.png'
import Brand3 from '../../../../assets/img/logo-the-guardian.png'
import Brand4 from '../../../../assets/img/logo-tech-radar.png'
import Brand5 from '../../../../assets/img/logo-gadgets-now.png'

function AboutClients() {
    const images = [
        {
            img: Brand1
        },
        {
            img: Brand2
        },
        {
            img: Brand3
        },
        {
            img: Brand4
        },
        {
            img: Brand5
        },
    ]
    
    return (
        <div className="aboutclients">
            <div className="aboutclients_images">
                <img src={about4} alt="img-1" />
            </div>
            <div className="aboutclients_container">
                <h2>Some of our clients</h2>
                <div className="aboutclients_brands">
                    {images.map((item, index) => (
                        <img key={index} src={item.img} alt={`img-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutClients
