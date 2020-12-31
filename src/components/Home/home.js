import React from 'react'
import './home.css'
import logos from '../../images/logos/logos'
import ArrowLogo from '../../images/down-arrow.png'
import Logo2 from '../../images/logo_attempt_2_jordy.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import ReactPlayer from 'react-player/lazy'
import YS2 from '../../images/Yard-Sale_2.mp4'
import ShotcallRunning from '../../images/shotcalla-running.jpg'
import XCamLogo from '../../images/Logo.png'
const MFD = "https://secureservercdn.net/198.71.233.44/23d.ff1.myftpupload.com/wp-content/uploads/2019/11/MFD_1.mp4"

export default function Home() {
    return (
        <div className="home">
            <div className="background-video-container">
                {/* <video loop="loop" autoPlay playsInline muted >
                    <source type="video/mp4" src={YS2} />

                </video> */}
                <ReactPlayer
                    url="https://video.wixstatic.com/video/b52317_a47aed43aa94462db9e7e268c0c41e41/1080p/mp4/file.mp4"
                    playing={true}
                    controls={false}
                    volume={0}
                    width='100%'
                    height='100%'
                    loop={true}
                    />
            </div>
                    <div className="landing-container">
                        <div className="logo-container">
                            <img className='jordy-logo' src={Logo2} alt="company logo" />
                        </div>
                        <div className="social-links">
                            {/* <a href="https://www.linkedin.com/in/jordy-klein-9697775/" target='_blank' rel="noopener noreferrer" > <i className="fab fa-linkedin fa-3x"></i></a> */}
                            <a href="https://www.facebook.com/JKFandV" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href="https://www.instagram.com/jordankleinfilmandvideo/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram-square fa-2x"></i></a>
                            {/*  <img src={Logo} alt="Xcam Aerials Logo" className="xcam-img" /> */}
                            <a href="https://vimeo.com/user1974921" target="_blank" rel="noopener noreferrer" ><i className="fab fa-vimeo-square fa-2x"></i></a>
                        </div>
                  
                    </div>
            <section className="landing">
                <div className="landing-page">
                </div>

                    {/* <div className="background-video"> */}
               
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
                    {/* <img src={Clients} alt="client logos"></img> */}
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
                    </ul>
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
                    <div className='margin-divider xcam-section'>
                        <div className='xcam-logo-container'>
                        <img className='xcam-logo' src={XCamLogo} alt='XCam Aerials Logo' />
                        </div>
                        <div className='span-holder'>
                            <span>
                           Our drone division, XCam Aerials, is only a click away. Feel free to visit <a href='http://xcamaerials.com/' target="_blank" rel="noopener noreferrer">XCamAerials.com</a> for more information.                        </span>                        </div>
                    </div>
                </section>
                <section className='jordys-specialties'>
                     <h3>Tools of the Trade</h3>
                     <hr style={{width: "90px", backgroundColor: "black"}} />
                    <div className="lower-section">

                    <div className='span-holder'>

                        <span className="tools-of-the-trade">From photoboats to camera cars of various sizes, our vehicles and teams are capable to take on any and every shot. For more details, you can check out our tools <Link to="/tools">here</Link></span>
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
                            <section className='tools-block'>
                     <h3>Our Expertise is a Phone Call Away</h3>
                     <hr style={{width: "90px", backgroundColor: "white"}} />
                    <div className="lower-section info-section">

                    <div className='photoboat-running-picture'>
                    <img src={ShotcallRunning} alt="Photoboat running chasing jetski" />
                    </div>
                    <div className='span-holder'>

                        <span className="photoboat-tool-text">Drones, camera cars, photoboats, and cranes of various sizes, our equipment is custom-built for smooth shooting and intense gigs. For more details on our equipment specifications, you can check out our tools of the trade <Link to="/tools" className='to-tools-link'>here</Link>.</span>
                        <span className="photoboat-tool-text"> Contact Jordy for more information on our <Link to="/contact">contact page</Link></span>
                    </div>

                    </div>
                </section>
            </section>
            
        </div>
    )

}
