import React from 'react'
import { Link } from 'react-router-dom'
import './Ready.scss'
import home6 from '../../../../assets/img/bg-pattern-home-6-about-5.svg'

function Ready() {
    return (
        <div className="ready">
            <div className="ready_container">
                <h2>Ready to get started?</h2>
                <Link to='/contact'>
                    contact us
                </Link>
                <img src={home6} alt="img-6" />
            </div>
        </div>
    )
}

export default Ready
