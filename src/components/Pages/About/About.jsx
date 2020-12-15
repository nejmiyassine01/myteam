import React from 'react'
import Ready from '../Home/Ready/Ready'
import AboutCards from './AboutCards/AboutCards'
import AboutClients from './AboutClients/AboutClients'
import AboutLanding from './AboutLanding/AboutLanding'

function About() {
    return (
        <>
            <AboutLanding/>
            <AboutCards/>
            <AboutClients/>
            <Ready/>
        </>
    )
}

export default About
