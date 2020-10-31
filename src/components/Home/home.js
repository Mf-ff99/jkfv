import React, { PureComponent } from 'react'
import home from './home.css'
import Logo from '../../images/Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo2 from '../../images/logo_attempt_2_jordy.png'

export default function Home() {


    return (
        <div className="landing-page">
            

            <div className="background-color">

            </div>
            <div className="logo-container">
                <img src={Logo2} alt="company logo" />
            </div>
            <div className="social-links">
                <i class="fab fa-instagram fa-3x"></i>
                <i class="fab fa-facebook-square fa-3x"></i>
                <i class="fab fa-linkedin fa-3x"></i>
                <img src={Logo} alt="Xcam Aerials Logo" className="xcam-img" />
            </div>
            {/* <section className="landing-page-content"> */}
            {/* </div> */}
            <div className="hr-container">
                <div className="content">
                    <p>Jordan Klein Jr. is a legendary award-winning Director of Photography, ace pilot, and an underwater diving expert</p>
                </div>
                </div>

                <div className="hr-container-2">
                <div className="content-2">
                    <p>JKF & V has all the tools your shoot needs to get the job done</p>
                </div>
                </div>

            {/* </section> */}
        </div>
    )

}
