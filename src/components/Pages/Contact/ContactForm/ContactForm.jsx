import React from 'react'
import Person from '../../../../assets/img/icon-person.svg'
import Cog from '../../../../assets/img/icon-cog.svg'
import Chart from '../../../../assets/img/icon-chart.svg'
import contact1 from '../../../../assets/img/bg-pattern-about-2-contact-1.svg'
import contact2 from '../../../../assets/img/bg-pattern-contact-2.svg'
import './ContactForm.scss'

function ContactForm() {
    return (
        <div className="contact">
            <div className="contact_images">
                <img src={contact1} alt="img-1" className="contact_images--1" />
                <img src={contact2} alt="img-2" className="contact_images--2" />
            </div>

            <div className="contact_container">
                <div className="contact_ask">
                    <div className="contact_title">
                        <h2>Contact</h2>
                        <h3>Ask us about</h3>
                    </div>

                    <div className="contact_about">
                        <div className="contact_character">
                            <img src={Person} alt="person"/>
                            <h3>The quality of our talent network</h3>
                        </div>
    
                        <div className="contact_character">
                            <img src={Cog} alt="person"/>
                            <h3>Usage & implementation of our software</h3>
                        </div>
                                
                        <div className="contact_character">
                            <img src={Chart} alt="person"/>
                            <h3>How we help drive innovation</h3>
                        </div>
                    </div>
                </div>
                
                <div className="contact_form">
                    <form className="contact_inputs">
                        <input placeholder="Name" name="name" required />
                        <input placeholder="Email Adress" name="email" required />
                        <input placeholder="Company Name" name="company" />
                        <input placeholder="Title" name="title" />
                        <textarea placeholder="Message" name="message" required />
                    </form>
                    <button className="contact_button" type="submit">submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
