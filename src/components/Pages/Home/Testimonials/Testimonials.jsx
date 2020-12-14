import React from 'react'
import home4 from '../../../../assets/img/bg-pattern-home-4-about-3.svg'
import home5 from '../../../../assets/img/bg-pattern-home-5.svg'
import quotes from '../../../../assets/img/icon-quotes.svg'
import './Testimonials.scss'
import TestimonialsData from './TestimonialsData'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials_img">
                <img src={home4} alt="img-5" className="testimonials_img--1" />
                <img src={home5} alt="img-6" className="testimonials_img--2" />
            </div>

            <div className="testimonials_container">
                <div className="testimonials_title">
                    <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                </div>
                <div className="testimonials_boxes">
                    {TestimonialsData.map((item, index) => (
                        <div className="testimonials_box" key={index}>
                            <img src={quotes} alt="Quotes" className="testimonials_box--quote" />
                            <p>
                            &ldquo;{item.text}&rdquo;
                            </p>
                            <h3>{item.author}</h3>
                            <h4>{item.job}</h4>
                            <img src={item.img} alt="kady" className="testimonials_box--author" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
