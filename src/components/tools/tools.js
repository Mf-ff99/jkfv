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
        toDisplayPhotoboat: false,
        expandedDrone: false,

        isSticky: false,
    }


    renderCrane = () => {

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
                    {/* <span id="photoboats"></span> */}
                    <Animated animationIn="fadeIn" animationOut="fadeOut">
                        <div className='tool-sections-header'>

                            <h2>Our Tools</h2>

                            <hr style={{ width: '200px', borderBottom: '1px solid black' }} />


                            <p className="tool-description animate__animated animate__backInLeft">
                                In-house we carry a vast array of tools for filmmakers. We take pride in knowing there are few others with the capabilities that our gear provides. You can easily access any one of our equipment categories through the menu on the left-hand side.
                    </p>
                            {/* <hr style={{ width: '200px', border: '1px solid black' }} /> */}
                            {/* <hr className="big-hr"></hr> */}
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
                    {/* <span id="aerials"></span> */}
                    {/* <hr /> */}
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
                    {/* <hr className="big-hr" id="cameracar" /> */}

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

                    {/* <hr className="big-hr" /> */}


                    <div id='lenses' className="photoboats">
                        <h3>Lenses and Cameras</h3>
                        <hr style={{ width: "90px" }} />
                        <div className="photoboat">
                            {/* <div className="tools-image-container">
                           
                            <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/338239605'
                                playing={false}
                                controls={true}
                                width='100%'
                                height='100%'
                            />                                </div> */}
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

                    {/* <span ></span> */}
                    {/* <hr /> */}
                    {/* skunkworks begins here */}
                    <div id='skunkworks' className='photoboats'>
                        <h3>Skunkworks</h3>
                        <hr style={{ width: '90px' }} />
                        <div className='photoboat'>
                            <div className='photoboat-header'>
                                <h4>Winchcam</h4>

                                {/* <Carousel showThumbs={false}  className='tools-carousel' style={{}}>                     */}
                                <div>
                                    <ReactPlayer
                                        className='video-2-player'
                                        url='https://vimeo.com/354491636'
                                        playing={false}
                                        controls={true}
                                        width='100%'
                                    // height='100%'
                                    />
                                </div>
                                {/* </Carousel> */}
                            </div>
                            <div className='header-info'>

                                <p>The Winchcam is a portable 4 point system that allows you to fly your choice of gimbals and most cameras in a 3-dimensional space. The Winchcam is designed to attach to 2, 3, or 4 hardpoints that are above the stage. The maximum space between each attach point can be 100’.</p>

                                <p>The total payload the Winchcam is capable of flying is 25lbs (camera and gimbal) the maximum speed is 25mph. The Winchcam system is controlled wirelessly by an operator that is separate from the gimbal operator. The winch cam attachment points must be approximately twice the height that you would like the payload to fly. (IE: If you want the gimbal to reach a max height of 10’  above the ground, then you will need the attachment point to be 20’ above the ground).</p><p>The entire Winchcam system can be checked as excess baggage on a commercial airline. The Winchcam can operate on 4 normal 20 amp outlets. It can also run on 4 x Honda 2000 watt generators. Check out the video.</p>
                            </div>
                        </div>
                        <div className='photoboat'>
                            <div className='photoboat-header'>
                                <h4>Railrunner</h4>

                                <Carousel infiniteLoop showThumbs={false} className='tools-carousel' style={{}}>
                                    <div>
                                        <ReactPlayer
                                            className='video-2-player'
                                            url='https://vimeo.com/474164076'
                                            playing={false}
                                            controls={true}
                                            width='100%'
                                        // height='100%'
                                        />
                                    </div>
                                    <div>
                                        <ReactPlayer
                                            className='video-2-player'
                                            url='https://vimeo.com/421026841'
                                            playing={false}
                                            controls={true}
                                            width='100%'
                                        // height='100%'
                                        />
                                    </div>
                                </Carousel>
                            </div>
                            <div className='header-info'>

                                <p>The RailRunner dolly system was designed to allow the user to quickly attach the device to any tubular pipe that is 1 1/2” thru 2” in outside diameter. (IE: Speedrail or PVC pipe.) We can build the Railrunner in any variation of speed and torque.

We presently have systems that can carry up to 30lbs and travel at speeds of 30mph. We have recently been asked to design a RailRunner to reach speeds of 100mph in 1/4 mile. </p>

                                <p>The RailRunner Can be configured to operate as a 2 person or single person system. (IE: One person can operate the camera gimbal and one person can operate the RailRunner or one person can operate both functions.)

Let us know what your requirements are, and we will do our best to accomidate your request.</p>
                            </div>
                        </div>
                        <div className='photoboat'>
                            <div className='photoboat-header'>
                                <h4>Railcam</h4>

                                {/* <Carousel showThumbs={false} className='tools-carousel' style={{}}>                     */}
                                <div>
                                    <ReactPlayer
                                        className='video-2-player'
                                        url='https://vimeo.com/372484162'
                                        playing={false}
                                        controls={true}
                                        width='100%'
                                    // height='100%'
                                    />
                                </div>
                                {/* </Carousel> */}
                            </div>
                            <div className='header-info'>

                                <p>The railcam was originally developed to shoot the AKC dog shows. We needed a device that could transport a camera and gimbal up to 20mph at “dog height” for about 120’ the Railcam is designed to run on a speed rail that is linked together with internal links that are spaced about 18” apart. we have since modified the Railcam to track Olympic class runners at various track and field events. and like the Railrunner, the Railcam can be modified to travel an almost any speed with almost any camera payload. Let us know your requirements and we will do our best to accommodate you.
</p>
                            </div>
                        </div>
                        <div className='photoboat'>
                            <div className='photoboat-header'>
                                <h3>Underwater Dolly</h3>

                                <Carousel infiniteLoop showThumbs={false} className='tools-carousel' style={{}}>
                                    <div>
                                        <ReactPlayer
                                            className='video-2-player'
                                            url='https://vimeo.com/385683363'
                                            playing={false}
                                            controls={true}
                                            width='100%'
                                        // height='100%'
                                        />
                                    </div>
                                    <div>
                                        <ReactPlayer
                                            className='video-2-player'
                                            url='https://vimeo.com/375096250'
                                            playing={false}
                                            controls={true}
                                            width='100%'
                                        // height='100%'
                                        />
                                    </div>
                                </Carousel>
                            </div>
                            <div className='header-info'>

                                <p>Our high speed underwater Dolly was designed to track Olympic class swimmers from an underwater view. We wanted the Underwater dolly to be completely remote controlled from the surface. We also wanted to be able to attach a large cinema camera to the dolly so that it can be used for any application. The Underwater dolly can travel at speeds of 1-10mph.</p>
                            </div>
                        </div>
                    </div>
                    {/* <hr className='big-hr' /> */}
                    <div className='tools-footer'>

                        <h3>Need more information?</h3>
                        <h6>Contact <Link to='/contact'>Jordy</Link> for more information regarding his equipement and team.</h6>
                    </div>
                </div>
            </>
        )
    }
}