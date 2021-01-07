import React from 'react'
import { Animated } from 'react-animated-css'
import JordyLogo from '../../images/logo_attempt_2_jordy.png'
import './about.css'

export default function About() {
    return (
        <>

          <Animated animationIn="fadeIn" animationOut="fadeOut">
        <section className="about-page">

            <img src={JordyLogo} alt="Jordan Klein Logo"></img>
            <div className="about-page-container">
                <div className='about-page-upper'>
                    <div className="p-2">
                    <h2>The Klein Family</h2>
                    
                    <p>The Klein Family has been in the motion picture industry for over 60 years. Jordan Klein Sr. experience in the industry began in the 1950s never looked back. Over the course of his career, he accumulated innumerable credits and cinched two academy awards along the way. Klein sr is now retired and living in Central Florida to be with his family.</p>
                    </div>
                    <div className='p-2'>

                    {/* <h2>Jordy Klein</h2>
                    <h5>Director of Photography</h5>
                    <p>
                    Jordan “ Jordy  Klein Jr. is a legendary aerial and aquatic cinematographer, and owner of Jordan Klein Film & Video and Xcam Aerials Inc. Jordy has worked for years alongside his Academy Award-winning D/P father, Jordan Klein Sr. Jordy has shot numerous movies, commercials, documentaries, and industrial films for clients such as CSI Miami, One Tree Hill, HBO, Netflix, Sea World, Sea-Doo Watercraft, Discovery Channel, and most Hollywood studios. Jordy is an accomplished R/C, and drone pilot and holds a part 107 drone license. Jordy is also a commercial full-sized helicopter and fixed-wing pilot.</p><p> 

Additionally, Jordy is an accomplished Steadicam operator and Underwater cinematographer and holds an advanced mixed-gas scuba license. 
                    </p> */}
                    <div className="p-2">
                    <h2>About Jordy</h2>
                    <p>Jordan Klein Jr., “Jordy” as he is known throughout the industry, started Jordan Klein Film & Video in the mid 80s. After years of working with his dad, Jordy wanted to continue the family heritage:  providing knowledge and equipment to get the shot, no matter how big or small. “We like to hear creative ideas from directors and D/Ps that require us to figure out the best way to accomplish them”. If you are looking to shoot a basic “talking head” interview, Jordy probably isn't the best place to call. (although he does appreciate a simple job every now and again..)</p>
                    
                    </div>
                    </div>


                    
                    <div className="p-3">
                    <h2>A Note to the Clients</h2>
                    <p>     A note to potential clients from JKF&V President, Jordy Klein:
                        <br /> I hate being nickel and dimed! Over the years I have hired many industry professionals. I have managed to weed out the ones that have a tendency to complain and overcharge after a set rate is agreed upon.

When I give a rate for myself, My crew and my gear, That is “the rate”. I will never attempt to go back and “renegotiate”. I realize things happen on a set that are out of our hands, especially when working on exterior locations. I always try to be more than fair when a situation like this arises. I feel fortunate that I have amassed a large inventory of equipment that allows me to afford the luxury of offering very competitive rates on gear and crew.</p>
                    </div>
                </div>
            </div>
        </section>
        </Animated>
    </>
    )
}