import React from 'react'
import logo from '../../assets/img/logo.svg'
import twitter from '../../assets/img/icon-twitter.svg'
import pinterest from '../../assets/img/icon-pinterest.svg'
import facebook from '../../assets/img/icon-facebook.svg'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_informations">
                    <div className="footer_about">
                        <img src={logo} alt="footer-logo" />
                        <div className="footer_link">
                            <Link to='/home'>
                                Home
                            </Link>
                            <Link to='/about'>
                                About
                            </Link>
                        </div>
                    </div>

                    <div className="footer_city">
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us: 949-833-7432</p>
                    </div>
                </div>
                <div className="footer_informations">
                    <div className="footer_about">
                        <div className="footer_socialLink">
                            <Link to='/home'>
                                <img src={twitter} alt="footer-logo" />
                            </Link>
                            <Link to='/about'>
                                <img src={pinterest} alt="footer-logo" />
                            </Link>
                            <Link to='/about'>
                                <img src={facebook} alt="footer-logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="footer_city">
                        <p>Copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
