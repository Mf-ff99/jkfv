import React from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Animated } from 'react-animated-css'
import './tools.css'
import GearBurger from './GearBurger'
import ReactPlayer from 'react-player/lazy'
import images from '../../images/BarreledImages'
import MFD from '../../images/RED-MFD-5000.jpg'
import { HashLink } from 'react-router-hash-link'
import Images from '../../images/BarreledImages'
import ToolsArrays from './ToolsArrays'
import ToolItems from './RenderToolItems'

export default class Tools extends React.Component {

    state = {
        toDisplay: false,
        isSticky: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            thePosition: scrolled,
        })
        this.addStickyClassToolsNav(this.state.thePosition)
    }

    addStickyClassToolsNav = (scrollPos) => {
        if (scrollPos >= .011023821591485048) {
            this.setState({ isSticky: true })
        } else if (scrollPos <= .011023821591485048) {
            this.setState({ isSticky: false })
        }
        return;
    }

    render() {
        return (
            <>
                <section id='tools' className='tools'>
                    <div className={`${this.state.isSticky ? "tools-sidebar" : "sticky-sidebar"}`}>
                        <h5>Menu</h5>
                        <GearBurger />
                    </div>
                </section>
                <div className="tool-sections" >
                    <Animated animationIn="fadeIn" animationOut="fadeOut">
                        <div className='tool-sections-header'>
                            <h2>Our Tools</h2>
                            <hr style={{ width: '200px', borderBottom: '1px solid black' }} />
                            <p className="tool-description animate__animated animate__backInLeft">
                                In-house we carry a vast array of tools for filmmakers. We take pride in knowing there are few others with the capabilities that our gear provides. You can easily access any one of our equipment categories through the menu on the left-hand side.
                    </p>
                            <div className='tools-pointer'>
                                <Animated animationIn='fadeIn' animationInDuration={1200}>
                                    <h6>Explore Our Tools Below</h6>
                                    <HashLink smooth to='#photoboats'><img className='work-scroll-arrow' src={Images.DownArrow} alt='scroll-down arrow' /></HashLink>
                                </Animated>
                            </div>
                        </div>
                    </Animated>
                    <div className="photoboats" id='photoboats'>
                        <h3 style={{ paddingTop: '40px' }}>Photoboats</h3>
                        <hr style={{ width: "90px" }} />
                        <br />
                           <ToolItems toolArray={ToolsArrays.PhotoboatArray}/> 
                    </div>

                    <div className="photoboats" id="cranes">
                        <h3 className="crane-header">Cranes</h3>
                        <hr style={{ width: "90px" }} />
                           <ToolItems toolArray={ToolsArrays.CraneArray}/> 

                        {/* crane ends here */}
                    </div>
                    {/* aerials begin here */}
                    <div className="aerials" id="aerials">
                        <h3>Aerials</h3>
                        <hr style={{ width: "90px" }} />
                        <a href='http://xcamaerials.com/' target='_blank' rel='noopener noreferrer'>
                            <Carousel showStatus={false} renderIndicator={false} showThumbs={false} className='big-baller-carousel aerials' style={{}}>
                                {/* <Carousel.Item> */}


                                <div>
                                    {/* <a href='https://xcamaerials.com' target='_blank' rel='noopener noreferrer'> */}
                                    <img className="mfd-image" src={MFD} alt='MFD 5000 Drone with RED camera and Ronin 2 gimbal' />
                                    {/* </a> */}
                                </div>


                            </Carousel>
                        </a>
                        <h6>Our Aerials are solely operated by our sister company XCam Aerials. Click the link to visit the <a href="http://xcamaerials.com/" target="_blank" rel="noopener noreferrer">XCam Aerials</a> website.</h6>

                    </div>
                    <div className="photoboats" id='cameracar'>
                        <h3>Camera Car and Process Trailer</h3>
                        <hr style={{ width: "90px" }} />
                        <div className="photoboat">

                            <Carousel id="cameracar-carousel"
                                showThumbs={false} className='tools-carousel' infiniteLoop style={{ minHeight: '250px' }}>

                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/361505272'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>

                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/338239605'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/395798138'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.ProcessTrailer} alt='process trailer' />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.PT2} alt='process trailer' />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.PT3} alt='process trailer' />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.PT4} alt='process trailer' />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.PT5} alt='process trailer' />
                                </div>
                            </Carousel>

                            <div className="header-info">

                                <p>Jordan Klein Film and Video is one of a few companies in the Southeast United States that own and operate an insert car and process trailer. The camera car is actually a camera truck. It is based on a Dodge 2500 chassis and has a full air ride suspension. The camera car can also accommodate up to 7 people in the back and 6 people in the front.</p><p>The camera car can also hold our 22’ Robotic-arm as well as our 30’ telescopic crane with a choice of stabilized heads (see the telescopic crane and 22’ robotic crane arm).</p><p>
                                    Our process trailer can support vehicles as large as a Ford Excursion and has two fold-out platforms that can support lighting or even dolly track.</p><p>Additionally we have a tow dolly that can accommodate most cars and trucks. This is a great option when you are attempting to get high shots shooting straight down on the tow vehicle and do not want to see the process trailer.</p> <p><h5>Process trailer dimensions
</h5>
                                    <ul>
                                        <li>overall length: 25’ 8”</li>
                                        <li>overall width: 103”
</li>
                                        <li>Inside width: 81”</li>
                                        <li>Inside length: 21'</li>
                                        <li>Vehicle height above ground while in tow: 7” to 8” respectively.</li>
                                        <li>Trailer fender height above floor of trailer is approximately 11”</li>
                                        <li>Fold out platform dimensions:  38” and 26” x 7’ long. Safety rails are included with the trailer but must be assembled on-location.</li>
                                        <li>Trailer is equipped with 1 1/4” speedrail fittings.</li>
                                        <li>Max vehicle weight capacity 5700lbs</li>
                                    </ul>
                                    <h5>Camera Truck
</h5>
                                    <ul>
                                        <li>Capable of running with our 22' Robotic Arm</li>
                                        <li>Capable of running with our 30' telescopic crane</li>
                                        <li>Carries Ronin 2, Movi XL</li>
                                        <li>Payload of an ARRI Alexa Mini or RED</li>
                                        <li>Capable of lifting any lens</li>
                                        <li>Speeds of up to 65mph with robotic arm</li>
                                        <li>Onset charging for all-day operations</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        {/* end of camera car */}
                        <div id='towdolly' className="photoboat">
                            <h3>Tow Dolly</h3>
                            <hr style={{ width: "90px" }} />

                            <Carousel id="cameracar-carousel" className='tow-dolly-carousel'
                                showThumbs={false} infiniteLoop style={{ minHeight: '250px' }}>


                                <div className='process-trailer'>
                                    <img src={images.TowDolly2} alt='tow dolly' />
                                </div>
                                <div className='process-trailer'>
                                    <img src={images.TowDolly} alt='tow dolly hard at work' />
                                </div>

                            </Carousel>

                            <div className="header-info">

                                <p>JKF&V can also provide a Tow Dolly. The Tow Dolly allows you to achieve vertical, or “straight down” shots without seeing the trailer in the shot.The tow dolly is usually best used with our telescopic crane on the camera car.</p>
                            </div>
                        </div>

                    </div>
                    <div id='lenses' className="photoboats">
                        <h3>Lenses and Cameras</h3>
                        <hr style={{ width: "90px" }} />
                        <div className="photoboat">
                            <div className="header-info">
                                <p>Jordan Klein Film and Video has always maintained a large inventory of the latest cameras and lenses. That being said, We do not want to give people the wrong impression when it comes to our gear. We are not a rental house. If you require some gear we will send out one of our camera packages with a minimum of a tech or 2nd A/C. we primarily use all of our gear on our own productions. In other words…." We are not a rental house, just a production company that has a lot of gear"</p>
                                <div className="cameras-lenses">
                                    <div className="cameras__ul">
                                        <div>
                                            <h4>Lenses</h4>
                                            <p>
                                                <ul>
                                                    <li>2x sets of Ziess Superspeed MKIII</li>
                                                    <li>Nikon prime lens set</li>
                                                    <li>Ziess 25-250 f3.2 zoom</li>
                                                    <li>9.8 Tegea</li>
                                                    <li>14mm Optar</li>
                                                    <li>Ziess 21-100mm f2.8</li>
                                                    <li> Sigma 18-35mm f2.8 </li>
                                                    <li>Sigma 28-70mm f2.8 </li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Cameras</h4>
                                            <p>

                                                <ul>
                                                    <li>Red Epic Dragon</li>
                                                    <li>Red Scarlet</li>
                                                    <li>Arri Amira</li>
                                                    <li>Freefly Wave</li>
                                                    <li>Arri Alexa Mini</li>
                                                    <li>Sony Venice</li>
                                                    <li>Panasonic GH5</li>
                                                    <li>Black Magic Pocket Cinema Camera</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end of lenses */}
                    </div>
                    <div id="underwater" className="photoboats">
                        <h3>Underwater</h3>
                        <hr style={{ width: "90px" }} />
                        <ToolItems toolArray={ToolsArrays.UnderwaterArray} />
                    </div>
                    {/* crew begins here */}
                    <div id='crew' className='photoboats'>
                        <h3>The Crew</h3>
                        <hr style={{ width: '90px' }} />
                        <div className='photoboat'>
                            <h6>JKF&V, in addition to being a provider of all types of specialty production gear and cameras can also provide the crew needed to operate the specialty equipment. We have staff sound mixers, lighting, grip, and camera department crew available on staff. Let us know what you need!</h6>
                        </div>
                    </div>
                    <div id='3D' className="photoboats threeD">
                        <h3>3D & Virtual Reality Cinematography</h3>
                        <hr style={{ width: '90px' }} />
                        <ToolItems toolArray={ToolsArrays.ThreeD} />
                    </div>
                    {/* skunkworks begins here */}
                    <div id='skunkworks' className='photoboats'>
                        <h3>Skunkworks</h3>
                        <hr style={{ width: '90px' }} />
                        <ToolItems toolArray={ToolsArrays.SkunkworksArray} />
                    </div>
                    <div className='tools-footer'>
                        <h3>Need more information?</h3>
                        <h6>Contact <Link to='/contact'>Jordy</Link> for more information regarding his equipement and team.</h6>
                    </div>
                </div>
            </>
        )
    }
}