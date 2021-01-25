import React from 'react'
import { Animated } from 'react-animated-css'
import './JordyKlein.css'

const JordyKlein = () => {

    return (
            <Animated animationInDuration={800} animationIn='fadeIn'>
        <div className='jordy-klein'>

            <div className='jordy-klein-header'>
            <Animated animationInDuration={1200} animationIn='fadeIn'>

            <h2>
                Jordy Klein
            </h2>
            </Animated>
            <h4><Animated animationIn='fadeIn'>
            Director of Photography
            </Animated>
            </h4>
            </div>
            <div className='about-jordy-p-container'>
            <Animated animationInDuration={1000} animationIn='slideInUp'>

            <p>
            Jordan "Jordy" Klein Jr. is a legendary aerial and aquatic cinematographer, and owner of Jordan Klein Film & Video and XCam Aerials Inc. He has worked for years alongside his Academy Award-Winning D/P and father, Jordan Klein Sr. Jordy has shot numerous movies, commercials, documentaries, and industrial films for clients such as CSI Miami, One Tree Hill, HBO, Netflix, Sea World, Sea-Doo Watercraft, Discovery Channel, and most Hollywood studios. He is an commercial full-sized helicopter and fixed-wing pilot, an accomplished R/C and drone pilot, and holds a part 107 drone license. Additionally, Jordy is a master Steadicam operator, Underwater cinematographer, and holds his advanced mixed-gas scuba license.
            </p>
            </Animated>
            </div>
        </div>
            </Animated>
    )
}
export default JordyKlein