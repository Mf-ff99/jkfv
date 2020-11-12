import React, { PureComponent } from 'react'
import './home.css'
import Logo from '../../images/Logo.png'
import ArrowLogo from '../../images/down-arrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo2 from '../../images/logo_attempt_2_jordy.png'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'


export default function Home() {
    return (
        <section className="landing">
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
            </div>
           <img src={ArrowLogo} alt='arrow for scrolling' />
           <div className='about-work'>
               <div className='about-work-header'>
                   <span className='about-header-words'>A few examples</span>
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
                   <div className='video video-3'>example video goes here</div>
               </div>
           </div>
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
