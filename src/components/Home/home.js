import React, { PureComponent } from 'react'
import './home.css'
import Logo from '../../images/Logo.png'
import ArrowLogo from '../../images/down-arrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo2 from '../../images/logo_attempt_2_jordy.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import ReactPlayer from 'react-player/lazy'
import PhotoBoat from '../../images/photoboat.jpg'
import YS2 from '../../images/Yard-Sale_2.mp4'
import MFD5000 from '../../images/RED-MFD-5000.jpg'
import Clients from '../../images/clients.png'
const PhotoboatDemo = "https://vimeo.com/460494916"
const YardSale = "https://secureservercdn.net/198.71.233.44/23d.ff1.myftpupload.com/wp-content/uploads/2019/10/Yard-Sale_2.mp4"
const MFD = "https://secureservercdn.net/198.71.233.44/23d.ff1.myftpupload.com/wp-content/uploads/2019/11/MFD_1.mp4"
export default function Home() {
    return (
        <>
            <div className="background-video-container">
                <video loop="loop" autoPlay playsInline muted >
                    <source type="video/mp4" src={YS2} />

                </video>
                {/* <ReactPlayer
                    url="https://vimeo.com/203179504"
                    playing={true}
                    controls={false}
                    volume={0}
                    width='100%'
                    height='100%'
                    loop={true}
                    /> */}
            </div>
            <section className="landing">
                <div className="landing-page">

                    {/* <div className="background-video"> */}
                    <div className="landing-container">
                        <div className="logo-container">
                            <img className='jordy-logo' src={Logo2} alt="company logo" />
                        </div>
                        <div className="social-links">
                            <i className="fab fa-linkedin fa-3x"></i>
                            <i className="fab fa-facebook-square fa-3x"></i>
                            <i className="fab fa-instagram-square fa-3x"></i>
                            {/* <img src={Logo} alt="Xcam Aerials Logo" className="xcam-img" /> */}
                            <i className="fab fa-vimeo-square fa-3x"></i>
                        </div>
                    </div>
                    <div className='arrow'>

                        <span className='fancy-text-pointer'></span>
                        <HashLink smooth to="#about-work-view">
                            <img className='arrow-pointer' src={ArrowLogo} alt='arrow for scrolling' />
                        </HashLink>
                    </div>
                </div>
               
                <div className='about-work' id="about-work-view">

                    {/* <span className='about-header-words'> Jordy's team has the tools and industry knowledge to get any shot a director could possibly want </span> */}
                    <div className='about-work-header'>
                       <h3>Our Work</h3>
                       <hr style={{width: "90px", backgroundColor: "white"}} /> 
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
                {/* <br />
                <br /> */}

                <section className="clients">
                    <h3>Our Clients</h3>
                    <hr style={{width: "90px", backgroundColor: "black"}} />
                    <img src={Clients} alt="client logos"></img>
                </section>
                <section className='jordys-specialties'>
                     <h3>Tools of the Trade</h3>
                     <hr style={{width: "90px", backgroundColor: "black"}} />
                    <div className="lower-section">

                    <div className='span-holder'>

                        <span>From photoboats to camera cars of various sizes, our vehicles are capable of carrying any one of our robotic cranes. For more details, check out our tools <Link to="/tools">here</Link></span>
                    </div>

                    <div className=''>
                    <ReactPlayer
                            className='video-2-player'
                            url='https://vimeo.com/445579276'
                            playing={false}
                            width='440px'
                            height='300px'
                            // volume={.1}
                            playing={true}
                            muted={true}
                            // controls={true}
                            loop={true}
                            
                        />
                    </div>
                    </div>
                </section>
                {/* <br /> */}
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
                        <video loop="loop" autoPlay playsInline muted>
                    <source type="video/mp4" src={MFD} />

                </video>
                        </div>
                        <div className='span-holder'>
                            <span>
                           Our heavylift drones are built with all-day operations in mind. Feel free to <Link to='/contact'>contact us</Link> for pricing and more information.                        </span>
                        </div>
                    </div>
                </section>
                {/* <section className=''>
                </section> */}
                {/* <div className="hr-container" id="hr-container-about">
                <div className="content">
                    <p>Jordan Klein Jr. is a legendary award-winning Director of Photography, ace pilot, and an underwater diving expert</p>
                </div>
            </div> */}
                {/* <div className="hr-container-2">
                <div className="content-2">
                    <p>JKF & V has all the tools your shoot needs to get the job done</p>
                </div>
            </div> */}
            </section>
        </>
    )

}
