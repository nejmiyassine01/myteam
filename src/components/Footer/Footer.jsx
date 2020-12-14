import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_informations">
                    <div className="footer_about">
                        <img src={logo} alt="footer-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
