import React from 'react'
import { Animated } from 'react-animated-css'
import './JordyKlein.css'

const JordyKlein = () => {

    return (
            <Animated animationInDuration={800} animationIn='fadeIn'>
        <div className='jordy-klein'>

            <div className='jordy-klein-header'>
            <Animated animationInDuration={1200} animationIn='slideInLeft'>

            <h2>
                Jordy Klein
            </h2>
            </Animated>
            <h4><Animated animationIn='slideInRight'>
            Director of Photography
            </Animated>
            </h4>
            </div>
            <div className='about-jordy-p-container'>
            <Animated animationInDuration={1000} animationIn='slideInUp'>

            <p>
            Jordan “ Jordy Klein Jr. is a legendary aerial and aquatic cinematographer, and owner of Jordan Klein Film & Video and Xcam Aerials Inc. Jordy has worked for years alongside his Academy Award-winning D/P father, Jordan Klein Sr. Jordy has shot numerous movies, commercials, documentaries, and industrial films for clients such as CSI Miami, One Tree Hill, HBO, Netflix, Sea World, Sea-Doo Watercraft, Discovery Channel, and most Hollywood studios. Jordy is an accomplished R/C, and drone pilot and holds a part 107 drone license. Jordy is also a commercial full-sized helicopter and fixed-wing pilot.

Additionally, Jordy is an accomplished Steadicam operator and Underwater cinematographer and holds an advanced mixed-gas scuba license.
            </p>
            </Animated>
            </div>
        </div>
            </Animated>
    )
}
export default JordyKlein