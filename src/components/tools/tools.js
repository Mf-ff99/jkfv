import React from 'react'
import Photoboat from '../../images/photoboat.png'
import PBJ from '../../images/pbj.png'
import Pontoon from '../../images/pontoon.png'
import TelescopicCrane from '../../images/telescopic-crane.png'
import RoboticArm from '../../images/camera-car-arm.png'
import TritonArm from '../../images/triton-arm.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './tools.css'
import GearBurger from './GearBurger'
import ReactPlayer from 'react-player/lazy'
import images from '../../images/BarreledImages'
// import Carousel from 'react-bootstrap/Carousel'


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
                <section className='tools'>
                    <div className={`${this.state.isSticky ? "tools-sidebar" : "sticky-sidebar"}`}>
                        {this.state.isSticky ? "" : <h3>Menu</h3>}
                        <GearBurger />
                        {/* <ul>
                            <li><HashLink smooth to="#photoboats" >
                                Photoboats</HashLink></li>
                            <li><HashLink smooth to="#cranes">Cranes</HashLink></li>
                            <li><HashLink smooth to="#aerials">Aerials</HashLink></li>
                            <li><HashLink smooth to="#cameracar">Camera Car</HashLink></li>
                            <li><HashLink smooth to="#lenses">Lenses</HashLink></li>
                            <li><HashLink smooth to="#lenses">Cameras</HashLink></li>
                        </ul>   */}
                    </div>

                </section>
                <span id="photoboats"></span>
                <div className="tool-sections">
                    <h2>Our Tools</h2>
                    <hr style={{ width: '200px', border: '1px solid black' }} />
                    <p className="tool-description">
                        In house we carry a vast array of tools for filmmakers. We take pride in knowing there are few others with the capabilities that our gear provides. You can easily access any one of our equipment categories through the menu on the left-hand side.
                    </p>
                    <hr style={{ width: '200px', border: '1px solid black' }} />
                    <h3>Photoboats</h3>
                    <div className="photoboats">
                        <br />


                        {/* <div id="photoboats" className="photoboat-container"> */}

                        <div className="photoboat">
                            <h3>
                                The Shotcalla
</h3>
                            <div className='container-fluid'>

                                <Carousel infiniteLoop className='tools-carousel' style={{}}>
                                    {/* <Carousel.Item> */}

                                    <div>
                                        <ReactPlayer
                                            className='video-3-player'
                                            url='https://vimeo.com/460494916'
                                            playing={false}
                                            controls={true}
                                            width='100%'

                                        />
                                    </div>
                                    {/* </Carousel.Item> */}
                                    {/* <Carousel.Item> */}

                                    <div>
                                        <img src={Photoboat} alt='the shotcalla' />
                                        {/* <p className="legend">Legend 1</p>  */}

                                    </div>
                                    {/* </Carousel.Item> */}
                                    {/* <Carousel.Item> */}

                                    <div>
                                        <img src={images.BeachedShotcalla} alt='the shotcalla beached at sunset' />
                                        {/* <p className="legend">Legend 2</p> */}

                                    </div>
                                    {/* </Carousel.Item> */}
                                </Carousel>
                            </div>
                            <div className="header-info">







                                <p>Jordan Klein Film and Video’s 31’ offshore catamaran is unlike any other photoboat in the world. It is truly a modern marvel. Besides being a 65mph super stable offshore catamaran, it can also be equipped with our 22’ fully robotic, stabilized camera crane and stabilized remote head. We can show up to location with this as a complete turn-key package!</p>
                                <ul>
                                    <li>31' Long</li>
                                    <li>65 MPH </li>
                                    <li>22' Stabilized Robotic Crane</li>
                                    <li>Stablized Remote Head</li>
                                    <li>12' Wings</li>
                                </ul>
                            </div>
                        </div>

                        <div className="photoboat">
                            <div className="header-info">

                                <div className="tools-image-container">
                                    <img className="shotcalla" style={{ width: '100%' }} src={PBJ} alt='the PBJ photoboat' />
                                </div>
                                <h4>
                                    The PBJ
                            </h4>
                                <p>The PBJ is an 18’ Catamaran that is just like its big sister (“Shotcalla”). Except it is 12’ shorter. The PBJ is great for shooting stills (It has a 8’ tower) and and is great for transporting crew back and forth to shore. It is also great for smaller venues where a larger photoboat is not required. The PBJ has a top speed of 33mph.
</p>
                                <ul>
                                    <li>18' Long</li>
                                    <li>33 MPH </li>
                                    <li>8' Tower</li>
                                    <li>Outboard Motor</li>

                                </ul>
                            </div>
                        </div>

                        <div className="photoboat">
                            <div className="tools-image-container">
                                <img className="bigballer-image" style={{ width: '100%', height: '100%', minWidth: '300px' }} src={Pontoon} alt='the shotcalla' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    The Big Baller
                            </h4>
                                <p>Our 30’ Pontoon boat is equipped to carry up to 17 people comfortably. It has 20’ of shaded area so clients stay cool all day, It can also be equipped with long range wireless video so clients can watch in comfort. Additionally, the upholstery can be removed and the boat can be used to carry support equipment such as lighting and grip gear or even a large production generator!</p>
                                <ul>
                                    <li>30' Long</li>
                                    <li>17 Person Capacity</li>
                                    <li>24 MPH Top Speed</li>
                                    <li>Loading Ramp</li>
                                    <li>Space for camera carts, crafty, and clients!</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <span id="cranes"></span>
                    <hr className="big-hr">

                    </hr>
                    <h3 className="crane-header">Cranes</h3>
                    <hr style={{ width: "90px" }} />
                    <div className="cranes">

                        <h4>
                            30' Telescopic Crane
                            </h4>
                        <div className="photoboat">
                            <div className='container-fluid'>

                                <Carousel className='tools-carousel' infiniteLoop style={{ minHeight: '250px' }}>
                                    {/* <Carousel.Item> */}

                                    <div className=''>
                                        <img className="d-block w-100 crane-pic-1" src={TelescopicCrane} alt='Telescopic Crane' />
                                        {/* <p className="legend">Legend 1</p>  */}

                                    </div>
                                    {/* </Carousel.Item> */}
                                    {/* <Carousel.Item> */}

                                    <div className='d-block w-100'>
                                        <ReactPlayer
                                            className='video-3-player'
                                            url='https://vimeo.com/495539470'
                                            playing={false}
                                            controls={true}
                                            width='100%'

                                        />
                                    </div>
                                    {/* </Carousel.Item> */}
                                </Carousel>
                            </div>
                            <div className="header-info">

                                <p>Our Telescopic crane arm can accommodate any number of stabilized and Unstabilized remote heads (any head that uses a Mitchel type mount). The heads that we can offer “in house” for the telescopic crane are The Movi XL, The DJI Ronin 2, and the non-stabilized head that comes standard with the crane. The arm has a max reach of 30’ and a minimum reach of 15’ the weight when fully assembled with the camera is about 1750lbs respectively. The base is electric powered and has a max speed of 4 miles per hour. The max camera/gimbal weight that can be accommodated is 70lbs. The crane and all of its accessories are transported in a customized 24’ enclosed trailer. We can provide a complete crew for the operation of this crane including delivery to set. Additionally, we can provide this crane with a turn-key camera and lens package with FIZ, and wireless video transmitter. Just let us know what you need!</p>
                                <ul>
                                    <li>Reach: 30'</li>
                                    <li>Min-Reach: 15'</li>
                                    <li>4 MPH Base Top Speed</li>
                                    <li>Weight: 1750lbs</li>
                                    <li>Max Camera/Gimbal weight: 75lbs</li>
                                    <li>Mitchel Mount</li>
                                    <li>Complete Onsite crew can be provided</li>
                                    <li>Full FIZ control</li>
                                    <li>Wireless Video</li>

                                </ul>
                            </div>

                        </div>
                        {/* crane starts here */}
                        <div className="photoboat">
                                <h4>
                                    Triton Arm
                            </h4>
                            <div className='container-fluid'>

                                <Carousel className='tools-carousel' infiniteLoop style={{ minHeight: '250px' }}>
                                    {/* <Carousel.Item> */}

                                    <div className=''>
                                        <img className="d-block w-100 crane-pic-1" src={TritonArm} alt='Triton Arm' />
                                        {/* <p className="legend">Legend 1</p>  */}

                                    </div>
                                    {/* </Carousel.Item> */}
                                    {/* <Carousel.Item> */}

                                    <div className='d-block w-100'>
                                        <ReactPlayer
                                            className='video-3-player'
                                            url='https://vimeo.com/495539470'
                                            playing={false}
                                            controls={true}
                                            width='100%'

                                        />
                                    </div>
                                    {/* </Carousel.Item> */}
                                </Carousel>
                            </div>
                            <div className="header-info">

                                <p>The Triton arm is a lightweight crane that can be mounted to almost anything. The Triton is fully robotically controlled via a wireless transmitter. It can accommodate our Movi Pro or DJI Ronin 2 stabilized heads. The Triton can be built in 2 lengths, 6’ and 11’. The max camera package that the Triton can accommodate is 25lbs. The total weight of the Triton with a camera and the remote head is approximately 170lbs respectively. The Triton can be mounted to a standard Reese trailer hitch on any vehicle or anything Mitchell mount configuration. Also see our custom electric ATV that holds the Triton arm.</p>
                                <ul>
                                    <li>Reach: 11'</li>
                                    <li>Min-Reach: 6'</li>
                                    <li>Weight: 145lbs</li>
                                    <li>Weight with Max-Package: 170lbs</li>
                                    <li>Max Camera/Gimbal weight: 25lbs</li>
                                    <li>Mitchell Mount</li>
                                    <li>Full FIZ control</li>
                                    <li>Wireless Video</li>
                                    <li>Wireless crane control</li>
                                    <li>Wireless gimbal control</li>

                                </ul>
                            </div>
                        </div>

                        <div className="photoboat">
                            <div className="tools-image-container">
                                <img className="triton-arm-image" src={RoboticArm} alt='30 foot telescopic crane' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    22' Robotic Arm
                            </h4>
                                <p>This arm was a custom build by JKF&V in our Machine shop and fabrication facility. This crane is fully wirelessly controlled in its pan and tilt axis has a max lens reach of 22’ from the fulcrum and has a total length of 27’ the crane has a max weight of 1850lbs with a camera and head attached. This Robotic arm can be provided with either of our 2 in house stabilized heads (The Movi XL  or the Ronin 2 stabilized head). It can also accept any stabilized head that uses a Mitchell mounting system. The crane can be mounted to any vehicle or structure that can accommodate the weight. (see camera car and Photoboat).</p>
                                <ul>
                                    <li>Lens-reach: 22'</li>
                                    <li>Length: 27'</li>
                                    <li>Weight: 1850lbs</li>
                                    <li>Max Camera/Gimbal weight: 75lbs</li>
                                    <li>Mitchell Mount</li>
                                    <li>Full FIZ control</li>
                                    <li>Wireless Video</li>
                                    <li>Wireless crane control</li>
                                    <li>Wireless gimbal control</li>
                                    <li>Max speed: 60mph</li>
                                </ul>
                            </div>
                        </div>

                        <div className="photoboat">
                            <div className="tools-image-container">
                                <div className='video jib-video'>
                                    <ReactPlayer
                                        className='video-2-player'
                                        url='https://vimeo.com/450546354'
                                        playing={false}
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                    />

                                </div>
                            </div>
                            <div className="header-info">

                                <h4>
                                    CamMate Jib
                            </h4>
                                <p>The world-famous CamMate Travel Series is a more economical version that consists of four-foot sections packed in durable hard cases for frequent location traveling. In addition to our strong aerospace design, the Travel series features 15 minutes set up times; configuration changes in 10 minutes, and electronic head inversions in less than 30 seconds. All of these design features make your job on location faster and easier.</p>
                                <ul>
                                    <li>Lens-height: 25'</li>
                                    <li>Reach: 21'</li>
                                    <li>Length: 15'5"</li>
                                    <li>Ballast: 247lbs</li>
                                    <li>Weight: 126lbs</li>
                                </ul>
                            </div>
                        </div>


                        {/* crane ends here */}
                    </div>
                    <span id="aerials"></span>
                    <hr />
                    {/* aerials begin here */}
                    <h3>Aerials</h3>
                    <hr style={{ width: "90px" }} />
                    <div className="photoboat" >
                        <div className="drone">
                            <h6>Our Aerials are solely operated through XCam Aerials</h6>
                            {/* <div className="tools-image-container">

                                <img className="pbj-image" src={Inspire} alt='Inspire 2' />
                            </div>
                            <div className="header-info">

                                <h4>Inspire 2</h4>
                                <p>In house we have two Inspire 2s available, each equipped with the X7 gimbal and a complete set of prime lenses. The I2 is a sturdy workhorse, and our drone crew is second to none. The pair of Inspires we currenly use have been used on the sets of The Right Stuff, the music video Twerk by City Girls, and many more.</p>
                                <ul>
                                    <li>Lenses: 16, 24, 35, 50</li>
                                    <li>X7 Camera Gimbal</li>
                                    <li>6K CDNG, Prores, Prores RAW</li>
                                    <li>Easy to match with Arri, Red footage</li>
                                    <li>Dual operator capable</li>
                                    <li>Cendence Controller for SDI output</li>
                                </ul>
                            </div>
                        </div> */}

                            {/* <div className="drone">
                            <div className="tools-image-container">

                                <img className="pbj-image" src={MFD} alt='MFD 5000' />
                            </div>
                            <div className="header-info">

                                <h4>Watt's Innovations MFD 5000</h4>
                                <p>The MFD 5000 is our heavylift drone. Capable of lifting almost any payload and boasting a 12-15 minute flight-time, the MFD is a powerful tool for filmmakers. Flying a full-size camera package with FIZ control, gimbal control, and a wireless video feed has never been easier.</p>
                                <p>You can find out more about our Aerials by visiting <a href="http://xcamaerials.com/" rel="noopener noreferrer">XcamAerials.com</a></p>
                                <ul>
                                    <li>Heavy Lift UAS</li>
                                    <li>Carries Ronin 2</li>
                                    <li>Payload of an ARRI Alexa Mini or RED</li>
                                    <li>Capable of lifting almost any lens</li>
                                    <li>Speeds of up to 45mph</li>
                                    <li>12-15 Minute flight time depending on payload</li>
                                    <li>Onset charging for all-day shoots</li>
                                </ul>
                            </div>
                        */}
                        </div>
                        {/* drone ends here */}


                        {/* drones section div */}
                    </div>
                    <hr className="big-hr" id="cameracar" />
                    <h3>Camera Cars/Trailers</h3>
                    <hr style={{ width: "90px" }} />
                    <div className="lenses">

                        <div className="photoboat">
                            <div className="tools-image-container">

                                <ReactPlayer
                                    className='video-2-player'
                                    url='https://vimeo.com/338239605'
                                    playing={false}
                                    controls={true}
                                    width='100%'
                                    height='100%'
                                />                                </div>
                            <div className="header-info">

                                <h4>Camera Car and Process Trailer</h4>
                                <p>Jordan Klein Film and Video is one of a few companies in the Southeast United States that own and operate an insert car and process trailer. The camera car is actually a camera truck. It is based on a Dodge 2500 chassis and has a full air ride suspension. The camera car can also accommodate up to 7 people in the back and 6 people in the front.</p><p>The camera car can also hold our 22’ Robotic-arm as well as our 30’ telescopic crane with a choice of stabilized heads (see the telescopic crane and 22’ robotic crane arm).</p><p>
                                    Our process trailer can support vehicles as large as a Ford Excursion and has two fold-out platforms that can support lighting or even dolly track.</p><p>Additionally we have a tow dolly that can accommodate most cars and trucks. This is a great option when you are attempting to get high shots shooting straight down on the tow vehicle and do not want to see the process trailer.</p>
                                <ul>
                                    <li>Capable of running with our 22' Robotic Arm</li>
                                    <li>Capable of running with our 30' telescopic crane</li>
                                    <li>Carries Ronin 2, Movi XL</li>
                                    <li>Payload of an ARRI Alexa Mini or RED</li>
                                    <li>Capable of lifting any lens</li>
                                    <li>Speeds of up to 65mph with robotic arm</li>
                                    <li>Onset charging for all-day operations</li>
                                </ul>
                            </div>
                        </div>
                        {/* end of camera car */}
                    </div>
                    <span id="lenses"></span>
                    <hr className="big-hr" />
                    <h3>Lenses and Cameras</h3>
                    <hr style={{ width: "90px" }} />
                    <div className="lenses">

                        <div className="drone">
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

                                <h4>Lenses</h4>
                                <p>We maintain a large inventory of the latest lenses. We do not rent lenses on their own, but we do send them out with one of our camera packages with a minimum of one camera tech or a 2nd A/C. We're not a rental house, but we do have a lot of gear!</p>
                                <ul>
                                    <li>2x sets or Ziess Superspeed MKIII</li>
                                    <li>Nikon prime lens set</li>
                                    <li>Ziess 25-250 f3.2 zoom</li>
                                    <li>9.8 Tegea</li>
                                    <li>14mm Optar</li>
                                    <li>Ziess 21-100mm f2.8</li>
                                    <li> Sigma 18-35mm f2.8 </li>
                                    <li>Sigma 28-70mm f2.8 </li>
                                </ul>
                            </div>
                        </div>

                        <div className="drone" id="lenses">
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

                                <h4>Cameras</h4>
                                <p>Jordan Klein Film and Video has always maintained a large inventory of the latest cameras and lenses. That being said, We do not want to give people the wrong impression when it comes to our gear. We are not a rental house. If you require some gear we will send out one of our camera packages with a minimum of a tech or 2nd A/C. we primarily use all of our gear on our own productions. In other words…." We are not a rental house, just a production company that has a lot of gear"</p>
                                <ul>
                                    <li>Red Epic Dragon</li>
                                    <li>Red Scarlet</li>
                                    <li>Arri Amira</li>
                                    <li>Arri Alexa Classic</li>
                                    <li>Arri Alexa Mini</li>
                                    <li>Sony F65</li>
                                    <li>Panasonic GH5</li>
                                    <li>Black Magic Pocket Cinema Camera</li>
                                </ul>
                            </div>
                        </div>

                        {/* end of lenses */}
                    </div>


                </div>
            </>
        )
    }
}