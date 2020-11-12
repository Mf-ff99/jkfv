import React, { PureComponent } from 'react'
import './home.css'
import Logo from '../../images/Logo.png'
import ArrowLogo from '../../images/down-arrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo2 from '../../images/logo_attempt_2_jordy.png'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import PhotoBoat from '../../images/photoboat.jpg'
import MFD5000 from '../../images/RED-MFD-5000.jpg'


export default function Home() {
    return (
        <section className="landing">
            <div className="landing-page">

                <div className="background-color">

                </div>
                <div className="logo-container">
                    <img className='jordy-logo' src={Logo2} alt="company logo" />
                </div>
                <div className="social-links">
                    <i class="fab fa-instagram-square fa-3x"></i>
                    <i class="fab fa-facebook-square fa-3x"></i>
                    <i class="fab fa-linkedin fa-3x"></i>
                    <img src={Logo} alt="Xcam Aerials Logo" className="xcam-img" />
                    <i class="fab fa-vimeo-v fa-3x"></i>
                </div>
            </div>
            <div className='arrow'>

                <span className='fancy-text-pointer'></span>
                <img className='arrow-pointer' src={ArrowLogo} alt='arrow for scrolling' />
            </div>
            <br />
            <br />
            <div className='about-work'>
                {/* <span className='about-header-words'> Jordy's team has the tools and industry knowledge to get any shot a director could possibly want </span> */}
                <div className='about-work-header'>
                </div>
                <div className='about-work-examples'>
                    <div className='video video-1'>
                        <ReactPlayer
                            className='video-1-player'
                            url='https://vimeo.com/458941481'
                            playing={false}
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='video video-2'>
                        <ReactPlayer
                            className='video-2-player'
                            url='https://vimeo.com/474146943'
                            playing={false}
                            controls={true}
                            width='100%'
                            height='100%'
                        />

                    </div>
                    <div className='video video-3'>
                        <ReactPlayer
                            className='video-2-player'
                            url='https://vimeo.com/331116301'
                            playing={false}
                            width='100%'
                            height='100%'
                            // volume={.1}
                            // playing={true}
                            // muted={true}
                            controls={true}

                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <section className='jordys-specialties'>
                <div className='span-holder'>

                    <span>Our custom equipment is one of a kind and second to none</span>
                </div>

                <div className='video photoboat'>

                    <img src={PhotoBoat} className='img photoboat-img' />
                </div>
            </section>
            <br />
            <section className='jordys-aerials'>
                 {/* <ReactPlayer
                            className='video-2-player'
                            url='https://vimeo.com/445579276'
                            playing={false}
                            width='100%'
                            height='100%'
                            // volume={.1}
                            playing={true}
                            muted={true}
                            // controls={true}
                            loop={true}
                            
                        />  */}
                <div className='margin-divider'>

                <div className='mfd-5000-drone'>
                    <img src={MFD5000} className='img mfd-5000' alt='MFD 5000 heavy lift drone'/>
                    </div>
                <div className='span-holder'>
                    <span>
                        Photoboats, heavy-lift drones, robotic cranes? The real question is: what can't we do?
                        </span>
                </div>
                </div>
            </section>
            <div className="hr-container" id="hr-container-about">
                <div className="content">
                    <p>Jordan Klein Jr. is a legendary award-winning Director of Photography, ace pilot, and an underwater diving expert</p>
                </div>
            </div>
            {/* <div className="hr-container-2">
                <div className="content-2">
                    <p>JKF & V has all the tools your shoot needs to get the job done</p>
                </div>
            </div> */}
        </section>
    )

}
