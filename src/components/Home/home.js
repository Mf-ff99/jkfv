import React from 'react'
import './home.css'
import logos from '../../images/logos/logos'
import Logo2 from '../../images/logo_attempt_2_jordy.png'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import ShotcallRunning from '../../images/shotcalla-running.jpg'
import XCamLogo from '../../images/Logo.png'
import { Animated } from 'react-animated-css'

export default function Home() {
    return (
        <div className="home">
            <div className="background-video-container">
                <ReactPlayer
                    url="https://video.wixstatic.com/video/b52317_a47aed43aa94462db9e7e268c0c41e41/1080p/mp4/file.mp4"
                    playing={true}
                    controls={false}
                    volume={0}
                    width='100%'
                    height='100%'
                    loop={true}
                    muted={true}
                    playsinline={true}
                /> 
        
            </div>
                <div className="landing-container">
                    <Animated animationInDelay={400} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1100}>
                        <div className="logo-container">
                            <img className='jordy-logo' src={Logo2} alt="company logo" />
                        </div>
                    </Animated>
                    <div className="social-links">
                        <Animated animationInDelay={500} animationIn="fadeIn" animationInDuration={1500} animationOut="fadeOut">
                            <a href="https://www.facebook.com/JKFandV" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-square fa-2x"></i></a>
                        </Animated>
                        <Animated animationInDelay={500} animationIn='fadeIn' animationInDuration={1500} animationOut='fadeOut'>
                            <a href="https://www.instagram.com/jordankleinfilmandvideo/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram-square fa-2x"></i></a>
                        </Animated>
                        <Animated animationInDelay={500} animationIn="fadeIn" animationInDuration={1500} animationOut="fadeOut">
                            <a href="https://vimeo.com/user1974921" target="_blank" rel="noopener noreferrer" ><i className="fab fa-vimeo-square fa-2x"></i></a>
                        </Animated>
                    </div>
                </div>
                <section className="landing">
                    <div className="landing-page">
                    </div>
                    <div className='about-work' id="about-work-view">
                        <div className='about-work-header'>
                            <h3><Link to='/work'>Our Work</Link></h3>
                            <hr style={{ width: "90px", backgroundColor: "black" }} />
                        </div>
                        <div className='about-work-examples'>
                            <div className='video-desc'>
                                <h4>AT&T Audience Sports</h4>
                                <div className='video video-1'>
                                    <ReactPlayer
                                        className='video-1-player'
                                        url='https://vimeo.com/458941481'
                                        playing={false}
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                        light={true}
                                    />
                                </div>
                            </div>
                            <div className='video-desc'>
                                <h4>Cadillac Racing</h4>
                                <div className='video video-2'>
                                    <ReactPlayer
                                        className='video-2-player'
                                        url='https://vimeo.com/474146943'
                                        playing={false}
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                        light={true}
                                    />

                                </div>
                            </div>
                            <div className='video-desc'>
                                <h4>Estée Lauder</h4>
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
                                        light={true}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='black-div contact-jordy'>
                        <h4><Link to='/contact'>Get a Quote from Jordy</Link></h4>
                        <h5>352-427-2560</h5>
                    </section>
                    <section className='jordys-aerials'>
                        <section className="clients">
                            <h2>Our Clients</h2>
                            <hr style={{ width: "90px", backgroundColor: "black" }} />
                            <ul className='client-logos'>
                                <li className='client-logo'><img src={logos.NFL} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Redbull} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.SpaceX} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Discovery} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Nike} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Nissan} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.NatGeo} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Publix} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Nasa} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Malibu} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.AE} alt="NFL logo" /></li>
                                <li className='client-logo'><img src={logos.Travel} alt="NFL logo" /></li>
                            </ul>
                        </section>


                    </section>
                    <section className='jordys-specialties'>
                        <Link to='/tools'><h3>Tools of the Trade</h3></Link>
                        <hr style={{ width: "90px", backgroundColor: "white" }} />
                        <div className="lower-section">

                            <div className='span-holder'>
                                <span className="tools-of-the-trade">From photoboats to camera cars, our vehicles and teams are capable of taking on any and every shot.
                        </span>
                                <Link to='/tools'><button type='click'>Our Tools</button></Link>
                            </div>

                            <div className='photoboat-running-shot'>
                                <ReactPlayer
                                    className='video-2-player'
                                    url='https://vimeo.com/445579276'
                                    width='300px'
                                    height='250px'
                                    // volume={.1}
                                    playing={true}
                                    muted={true}
                                    // controls={true}
                                    loop={true}

                                />
                            </div>
                        </div>
                    </section>
                    <div className='margin-divider xcam-section'>
                        <div className='xcam-logo-container'>
                            <a href='http://xcamaerials.com' rel='noopener noreferrer' target='_blank'>

                                <img className='xcam-logo' src={XCamLogo} alt='XCam Aerials Logo' />
                            </a>
                        </div>
                        <div className='span-holder'>
                            <span>
                                Our drone division and sister company, XCam Aerials, is only a click away. Feel free to visit <a href='http://xcamaerials.com/' target="_blank" rel="noopener noreferrer">XCamAerials.com</a> for more information.                        </span>                        </div>
                    </div>
                    <section className='tools-block'>
                        <Link to='/contact'><h3>Our Expertise is a Phone Call Away</h3></Link>
                        <hr style={{ width: "90px", backgroundColor: "white" }} />
                        <div className="lower-section info-section">

                            <div className='photoboat-running-picture'>
                                <img src={ShotcallRunning} alt="Photoboat running chasing jetski" />
                            </div>
                            <div className='span-holder'>
                                <span className="photoboat-tool-text">Drones, camera cars, photoboats, and cranes of various sizes, our equipment is custom-built for smooth shooting and intense gigs. Our teams can be ready to deploy at a moments notice. Contact Jordy for more information.</span>
                                <Link to='/contact'><button type='click'>Request a Quote</button></Link>
                            </div>
                        </div>
                    </section>
                </section>

            </div>
    )

}
