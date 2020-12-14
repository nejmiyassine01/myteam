import React from 'react'
import HomeAbout from './HomeAbout/HomeAbout'
import Landing from './Landing/Landing'
import Ready from './Ready/Ready'
import Testimonials from './Testimonials/Testimonials'

function Home() {
    return (
        <>
            <Landing/>
            <HomeAbout/>
            <Testimonials/>
            <Ready/>
        </>
    )
}

export default Home
