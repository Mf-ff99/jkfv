import React from 'react'
import Photoboat from '../../images/photoboat.jpg'
import PBJ from '../../images/pbj.png'
import Pontoon from '../../images/pontoon.png'
import TelescopicCrane from '../../images/telescopic-crane.png'
import RoboticArm from '../../images/camera-car-arm.png'
import TritonArm from '../../images/triton-arm.png'
import Inspire from '../../images/Inspire-2.jpg'
import MFD from '../../images/RED-MFD-5000.jpg'
import './tools.css'
import GearBurger from './GearBurger'

import ReactPlayer from 'react-player/lazy'



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
        console.log('scroll pos', scrolled)
        this.addStickyClassToolsNav(this.state.thePosition)
    }

    addStickyClassToolsNav = (scrollPos) => {
        if(scrollPos >= .011023821591485048) {
            this.setState({isSticky: true})
        } else if (scrollPos <= .011023821591485048) {
            this.setState({isSticky: false})
        }
        return;
    }

    render() {
        
        console.log(this.state.isSticky)
        return (
            <>
                <section className='tools'>
                    <div className={`${this.state.isSticky ? "tools-sidebar" : "sticky-sidebar"}`}>
                        {this.state.isSticky ? "" : <h3>The Gear</h3>}
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

                    <h3>Photoboats</h3>
                    <div className="photoboats">
                        <br />
                        <hr />

                        {/* <div id="photoboats" className="photoboat-container"> */}
                        <div className="photoboat">
                            <div className="header-info">
                                <div className="tools-image-container">
                                    <img className="shotcalla" src={Photoboat} alt='the shotcalla' />
                                </div>

                                <h4>
                                    The Shotcalla
                            </h4>
                                <p>A rugged 31 foot offshore catamaran, the Shotcall is prepared to get every shot you need. Equipped with twin 300hp Outboard Motors, the Shotcalla can get the camera anywhere you'd like.</p>
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
                                    <img className="pbj-image" src={PBJ} alt='the shotcalla' />
                                </div>
                                <h4>
                                    The PBJ
                            </h4>
                                <p>The PBJ is an 18’ Catamaran that is just like it’s big sister, the “Shotcalla”, but 12’ shorter. The PBJ is great for shooting stills on its 8' tower, and it's an excellent craft for transporting crew and cast members. It is also ideal for smaller venues a larger photoboat can't reach.</p>
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
                                <img className="bigballer-image" src={Pontoon} alt='the shotcalla' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    The Big Baller
                            </h4>
                                <p>The Big Baller is a 30' pontoon capable of carrying up to 17 passengers. A 20' bimini offers shade so clients can stay cool throughout the day. This boat can be equipped with long-range wireless video for client-viewing from a distance. Additionally, the upholstery can be removed to offer even more room for support equipment, lighting and grip gear, or even large-production generators.</p>
                                <ul>
                                    <li>30' Long</li>
                                    <li>17 Person Capacity</li>
                                    <li>24 MPH Top Speed</li>
                                    <li>Loading Ramp</li>
                                    <li>Plenty of space for camera carts, crafty, and clients!</li>

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

                        <div className="crane">
                            <div className="tools-image-container">
                                <img className="bigballer-image" src={TelescopicCrane} alt='30 foot telescopic crane' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    30' Telescopic Crane
                            </h4>
                                <p>Our telescopic crane can accommodate any number of remote heads utilizing a Mitchel mount. Our in-house stablized gimbals are currently the MoviXL and the DJI Ronin 2. With a max reach of 30' and a minimum of 15', this crane is perfect for getting anywhere you need the camera. The electric powered base has a max-speed of 4 MPH. The fully assembled crane and camera/gimbal weighs in at about 1750 pounds. Our crane is transported in a 24' enclosed trailer, along with all its accesories and tools.</p>
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
                        <div className="crane">
                            <div className="tools-image-container">
                                <img className="triton-arm-image" src={TritonArm} alt='30 foot telescopic crane' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    Triton Arm
                            </h4>
                                <p>The Triton Arm is a lightweight robotic crane that can mount to almost anything. The Triton is fully controlled with a wireless transmitter and can accommodate both our Movi Pro and Ronin 2 stablized heads. The arm has two lengths, 6' and 11' with a max camera package of 25lbs. The arm can be mounted to a standard Reese trailer hitch or a Mitchel mount configuration.</p>
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

                        <div className="crane">
                            <div className="tools-image-container">
                                <img className="triton-arm-image" src={RoboticArm} alt='30 foot telescopic crane' />
                            </div>
                            <div className="header-info">

                                <h4>
                                    22' Robotic Arm
                            </h4>
                                <p>Our 22' robotic arm is a custom build by Jordan Klein in our machine stop and fabrication facility. The crane comes with a fully wireless control system for both pan and tilt with a lens-reach of 22'. Our Robotic arm can be provided with either our in-house Movi XL/ Ronin 2 gimbals, or any other gimbal that utilizes a Mitchell mounting system. Our crane can be mounted to any vehicle or structure that can handle the weight, such as our photoboat and camera car</p>
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

                        <div className="crane">
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
                                <p>This world-famous CamMate Travel Series consists of four-foot sections packed in pelican cases for frequent travel. In addition to its strong aerospace design, the Travel series features fifteen-minute setup times, configuration changes in ten minutes, and electronic head inversions in less than 30 seconds. All of these design features make the CamMate an obvious choice for faster, and easier shooting. The CamMate can also be mounted to our wheeled-trolley for relocation once setup is complete.</p>
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
                    <div className="drones" >
                        <div className="drone">
                            <div className="tools-image-container">

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
                        </div>

                        <div className="drone">
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
                        </div>
                        {/* drone ends here */}


                        {/* drones section div */}
                    </div>
                    <hr className="big-hr" id="cameracar" />
                    <h3>Camera Cars/Trailers</h3>
                    <hr style={{ width: "90px" }} />
                    <div className="lenses">

                        <div className="drone">
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

                                <h4>Camera Car</h4>
                                <p>Our camera car is actually a camera truck! It is based on a Dodge 2500 chassis and has a full air ride suspension. The camera car can also accommodate up to 7 people in the back and 6 people in the front. The camera car can hold our 22' Robotic Arm as well as our 30' telescopic crane.</p>
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
                                <p>We have a large inventory of the latest cameras! We do rent out our camera packages with a minimum of one camera tech or a 2nd A/C. We're not a rental house, but we do have a lot of gear!</p>
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