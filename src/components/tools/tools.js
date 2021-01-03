import React from 'react'
import { Link } from 'react-router-dom'
import Photoboat from '../../images/photoboat.png'
import PBJ from '../../images/pbj.png'
import Pontoon from '../../images/pontoon.png'
import TritonArm from '../../images/triton-arm.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Animated } from 'react-animated-css'
import './tools.css'
import GearBurger from './GearBurger'
import ReactPlayer from 'react-player/lazy'
import images from '../../images/BarreledImages'
import MFD from '../../images/RED-MFD-5000.jpg'

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
                            In house we carry a vast array of tools for filmmakers. We take pride in knowing there are few others with the capabilities that our gear provides. You can easily access any one of our equipment categories through the menu on the left-hand side.
                    </p>
                        {/* <hr style={{ width: '200px', border: '1px solid black' }} /> */}
                        {/* <hr className="big-hr"></hr> */}
                    </div>
                    </Animated>
                    <div className="photoboats" id='photoboats'>
                        <h3 style={{paddingTop: '40px'}}>Photoboats</h3>
                        <hr style={{ width: "90px" }} />
                        <br />


                        {/* <div id="photoboats" className="photoboat-container"> */}

                        <div className="photoboat">
                            <h4>
                                Shotcalla
</h4>
                            <Carousel showArrows={true} infiniteLoop showThumbs={false} className='tools-carousel' style={{}}>
                                {/* <Carousel.Item> */}

                                
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/460494916'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                


                                <div>
                                    <img src={Photoboat} alt='the shotcalla' />
                                </div>
                                <div>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/357656228'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>



                                <div>
                                    <img src={images.BeachedShotcalla} alt='the shotcalla beached at sunset' />


                                </div>

                            </Carousel>

                            <div className="header-info">
                                <p>Jordan Klein Film and Video’s 31’ offshore catamaran is unlike any other photoboat in the world. It is truly a modern marvel. Besides being a 65mph super-stable offshore catamaran, it can also be equipped with robotic crane and stabilized head . We can show up to location with this as a complete turn-key package! This boat can also be equipped with wings that allow the camera operator to walk out 13’ and be 12’ above the water to achieve vertical shots of watercraft</p>
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
                            <h4>
                                The PBJ (Photoboat Junior)
                            </h4>
                            <Carousel showThumbs={false} className='big-baller-carousel'>
                                <div>
                                    <img src={PBJ} alt='Pontoon Boat: The Big Baller' />
                                </div>

                            </Carousel>
                            <div className="header-info">


                                <p>The PBJ is an 18’ Catamaran that is just like its big sister (“Shotcalla”). Except it is 12’ shorter. The PBJ is great for shooting stills with its 8' tower, and is great for transporting crew back and forth to shore. It is an excellent choice for smaller venues where a larger photoboat is not required. The PBJ has a top speed of 33mph.
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
                            <h4>
                                The Big Baller
                            </h4>
                            <Carousel showThumbs={false} className='big-baller-carousel'>
                                <div>
                                    <img src={Pontoon} alt='Pontoon Boat: The Big Baller' />
                                </div>

                            </Carousel>
                            <div className="header-info">

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
                    {/* <span id="cranes"></span> */}
                    {/* <hr className="big-hr" /> */}

                    <div className="photoboats" id="cranes">
                    <h3 className="crane-header">Cranes</h3>
                    <hr style={{ width: "90px" }} />
                        <div className="photoboat">
                            <h4>
                                30' Telescopic Crane
                            </h4>
                            <Carousel className='tools-carousel' showThumbs={false} infiniteLoop style={{ minHeight: '250px' }}>
                            <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/495537100'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/495538039'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                              
                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/371614461'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/495539470'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                              

                            </Carousel>

                            <div className="header-info">
                                <p>Our Telescopic crane arm can accommodate any number of stabilized and Unstabilized remote heads (any head that uses a Mitchel type mount). The heads that we can offer “in house” for the telescopic crane are The Movi XL, The DJI Ronin 2, and the non-stabilized head that comes standard with the crane.</p><p> The arm has a max reach of 30’ and a minimum reach of 15’ the weight when fully assembled with the camera is about 1750lbs respectively. The max camera/gimbal weight that can be accommodated is 70lbs. </p><p>The crane and all of its accessories are transported in a customized 24’ enclosed trailer. We can provide a complete crew for the operation of this crane including delivery to set. Additionally, we can provide this crane with a turn-key camera and lens package with FIZ, and wireless video transmitter. Just let us know what you need!</p>
                                <ul>
                                    <li>Reach: 30'</li>
                                    <li>Min-Reach: 15'</li>
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


                            <Carousel className='tools-carousel' showThumbs={false} infiniteLoop style={{ minHeight: '250px' }}>

                                <div className=''>
                                    <img className="d-block w-100 crane-pic-1" src={TritonArm} alt='Triton Arm' />


                                </div>
                            <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/146350055'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>

                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/311587255'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                            </Carousel>

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
                            <h4>
                            60’ Non-Telescopic Crane
                            </h4>
                            <Carousel className='big-baller-carousel' showThumbs={false} style={{ minHeight: '250px' }}>
                                <div>
                                    <img className="d-block" src={images.SixtyFooter} alt='Triton Arm' />
                                </div>
                               
                            </Carousel>

                            <div className="header-info triton-info">
<p>We purchased this crane arm out of necessity. We are continually called by clients and requested to fly our drones in restricted airspace or airspace that requires absorbent amounts of time to Aquire a permit to fly. For this reason, we acquired this incredible piece of gear.</p>

<p>The actual arm length of the crane is 59’ from the fulcrum to the head mounting point. Once the head is mounted it adds about 9” hence the 60’ length. The total length of the crane is 68’. Max lens height is approximately 57’. The weight of the crane when fully assembled with the camera and head is approximately 1350lbs respectively. We can provide any of our “in house “ remote heads including The Movi XL, The DJI Ronin 2, and the non-stabilized head that comes standard with the crane. The max camera and gimbal weight for this crane is 40lbs. The 60’ crane can be transported with our technicians and operator via our production van. It comes in several large cases and must be assembled on site. Assembly usually takes about 2hrs including remote head and camera mounting.</p>

<p>
Once the crane is fully assembled it can be moved around the set via a large western type dolly. We can also provide a tow vehicle if the crane is required to be move over long distances such as a golf course.</p>
                            </div>
                        </div>

                        <div className="photoboat">
                            <h4>
                                22' Robotic Arm
                            </h4>
                            <Carousel showThumbs={false} className='tools-carousel' infiniteLoop style={{ minHeight: '250px' }}>

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
                                        url='https://vimeo.com/357656228'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>


                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/361503204'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/395772274'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>




                            </Carousel>

                            <div className="header-info">
                                <p>This arm was a custom build by JKF&V in our Machine shop and fabrication facility. This crane is fully wirelessly controlled in its pan and tilt axis has a max lens reach of 22’ from the fulcrum and has a total length of 27’ the crane has a max weight of 1850lbs with a camera and head attached.</p><p> This Robotic arm can be provided with either of our 2 in house stabilized heads (The Movi XL  or the Ronin 2 stabilized head). It can also accept any stabilized head that uses a Mitchell mounting system. The crane can be mounted to any vehicle or structure that can accommodate the weight. (see camera car and Photoboat).</p>
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
                            <h4>
                                CamMate Jib
                                </h4>
                            <Carousel
                                showThumbs={false} className='tools-carousel' style={{ minHeight: '250px' }}>

                                <div className='d-block w-100'>
                                    <ReactPlayer
                                        className='video-3-player'
                                        url='https://vimeo.com/450546354'
                                        playing={false}
                                        controls={true}
                                        width='100%'

                                    />
                                </div>
                            </Carousel>
                            <div className="header-info">

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
                    {/* <span id="aerials"></span> */}
                    {/* <hr /> */}
                    {/* aerials begin here */}
                    <div className="aerials" id="aerials">
                    <h3>Aerials</h3>
                    <hr style={{ width: "90px" }} />
                    <Carousel showThumbs={false} className='big-baller-carousel aerials' style={{}}>
                                {/* <Carousel.Item> */}

                                
                                   <div>
                                       <img className="mfd-image" src={MFD} alt='MFD 5000 Drone with RED camera and Ronin 2 gimbal' />
                                   </div>
                                

                        </Carousel>
                        <h6>Our Aerials are solely operated by XCam Aerials. Click the link to visit the <a href="http://xcamaerials.com/" target="_blank" rel="noopener noreferrer">XCam Aerials</a> website.</h6>
                       
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
                    {/* <hr /> */}
                    <div id="underwater" className="photoboats">
                    <h3>Underwater</h3>
                    <hr style={{ width: "90px" }} />

                        <div className="photoboat">
                            <h4
                            >Underwater Cinematography</h4>
                        <Carousel showThumbs={false} className='tools-carousel' style={{}}>                    
                        <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/39293725'
                                playing={false}
                                controls={true}
                                width='100%'
                              
                            />      
                        <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/136759179'
                                playing={false}
                                controls={true}
                                width='100%'
                                
                            />      
                            <div>
                                <img src={images.UnderwaterWelding} alt='Jordy filming underwater welding' />
                            </div>
                                  </Carousel>
                        <div className='header-info'>
                            <p>Jordan Klein Film and Video and The Klein family have been at the forefront of underwater cinematography technology for over 50 years! Jordan Klein, Sr opened the first dive shop on Miami beach shortly after World War II and developed some of the first underwater cameras. </p><p>Jordan Klein, Sr's son,  Jordy Klein has continued the legacy and is still pushing the boundaries of underwater filmmaking.

Vampire Diaries: Behind the Scenes

Underwater behind the scenes of Vampire Diaries season 3 finale.

 

Underwater D/P: Jordan(Jordy) Klein Jr.</p>
                        </div>

                        </div>

                        <div className="photoboat">
                            <h4>Underwater Drone</h4>
                        <Carousel showThumbs={false} id="cameracar-carousel" className='tools-carousel' style={{}}>
                           
                        <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/385681880'
                                playing={false}
                                controls={true}
                                width='100%'
                                // height='100%'
                                />      
                                                
                            
                                  </Carousel>
                        <div className='header-info'>
                            <p>The Fafish is a fully remotely controlled underwater drone. It has a 350’ teather and can travel to depths of 300’. The Fafish has a 1” sensor and can shoot 4k video at 24 or 30fps it can also shoot 1080p at 60fps

The FaFish is great for location scouting or in situations where a manned camera is just not practicle or safe. The Fafish has a top speed of 8mph and also has internal LED lighting. The FaFish has a battery life of 5 hrs of constant use.

The FaFish also has an HD video output that can be attached to a monitor at the surface. It can also be used for live broadcast productions.</p>
                        </div>

                        </div>

                    </div>


                    {/* <span id='crew'></span> */}
                    {/* <hr /> */}
                    {/* crew begins here */}
                    <div id='crew' className='photoboats'>
                    <h3>The Crew</h3>
                    <hr style={{ width: '90px' }} />
                        <div className='photoboat'>

                    <Carousel infiniteLoop showThumbs={false} className='tools-carousel' style={{}}>                    
                                  
                        </Carousel>
                        <h6>JKF&V, in addition to being a provider of all types of specialty production gear and cameras can also provide the crew needed to operate the specialty equipment. 

We have staff sound mixers, lighting, grip, and camera department crew available on staff. Let us know what you need!</h6>
                        </div>
                </div>
                {/* <hr className='big-hr' /> */}
                
                    <div id='3D' className="photoboats threeD">
                <h3>3D & Virtual Reality Cinematography</h3>
                    <hr style={{ width: '90px' }} />

                        <div className="photoboat">
                            
                        <Carousel showThumbs={false} infiniteLoop className='tools-carousel' style={{}}>                    
                        <div>
                            <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/26424346'
                                playing={false}
                                controls={true}
                                width='100%'
                                // height='100%'
                                />      
                                </div>
                                <div>
                            <ReactPlayer
                                className='video-2-player'
                                url='https://vimeo.com/189631277'
                                playing={false}
                                controls={true}
                                width='100%'
                                // height='100%'
                                />      
                                </div>
                           
                                  </Carousel>
                        <div className='header-info'>
                            <p>Jordan Klein Film and Video has alway been one of the few companies at the forefront of 3D and immersive technology. We are the only company in the Southeast USA with latest 3ality Technica, ATOM, 3D Beamspiltter rig.

 

The Atom can be rigged with any of the latest Arri, Red, or Sony cameras.
 

Additionally, we have worked with several of the newest immersive technology companies such as Oculus Rift and Google cardboard. On one occasion we rigged 5 Black magic Pocket Cinema cameras to our Octocopter with a fully stabilized gimbal.

 

We also build our own 3D underwater housing systems</p>
                        </div>

                        </div>
                    </div>

                    {/* <span ></span> */}
                    {/* <hr /> */}
                    {/* skunkworks begins here */}
                    <div id='skunkworks' className='photoboats'>
                    <h3>Skunkworks</h3>
                    <hr style={{ width: '90px' }} />
                        <div className='photoboat'>
                        <h4>Winchcam</h4>

                    <Carousel showThumbs={false}  className='tools-carousel' style={{}}>                    
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
                        </Carousel>
                        <div className='header-info'>

                        <p>The Winchcam is a portable 4 point system that allows you to fly your choice of gimbals and most cameras in a 3-dimensional space. The Winchcam is designed to attach to 2, 3, or 4 hardpoints that are above the stage. The maximum space between each attach point can be 100’.</p>

<p>The total payload the Winchcam is capable of flying is 25lbs (camera and gimbal) the maximum speed is 25mph. The Winchcam system is controlled wirelessly by an operator that is separate from the gimbal operator. The winch cam attachment points must be approximately twice the height that you would like the payload to fly. (IE: If you want the gimbal to reach a max height of 10’  above the ground, then you will need the attachment point to be 20’ above the ground).</p><p>The entire Winchcam system can be checked as excess baggage on a commercial airline. The Winchcam can operate on 4 normal 20 amp outlets. It can also run on 4 x Honda 2000 watt generators. Check out the video.</p>
                        </div>
                        </div>
                        <div className='photoboat'>
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
                        <div className='header-info'>

                        <p>The RailRunner dolly system was designed to allow the user to quickly attach the device to any tubular pipe that is 1 1/2” thru 2” in outside diameter. (IE: Speedrail or PVC pipe.) We can build the Railrunner in any variation of speed and torque.

We presently have systems that can carry up to 30lbs and travel at speeds of 30mph. We have recently been asked to design a RailRunner to reach speeds of 100mph in 1/4 mile. </p>

<p>The RailRunner Can be configured to operate as a 2 person or single person system. (IE: One person can operate the camera gimbal and one person can operate the RailRunner or one person can operate both functions.)

Let us know what your requirements are, and we will do our best to accomidate your request.</p>
                        </div>
                        </div>
                        <div className='photoboat'>
                        <h4>Railcam</h4>

                    <Carousel showThumbs={false} className='tools-carousel' style={{}}>                    
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
                        </Carousel>
                        <div className='header-info'>

                        <p>The railcam was originally developed to shoot the AKC dog shows. We needed a device that could transport a camera and gimbal up to 20mph at “dog height” for about 120’ the Railcam is designed to run on a speed rail that is linked together with internal links that are spaced about 18” apart. we have since modified the Railcam to track Olympic class runners at various track and field events. and like the Railrunner, the Railcam can be modified to travel an almost any speed with almost any camera payload. Let us know your requirements and we will do our best to accommodate you.
</p>
                        </div>
                        </div>
                        <div className='photoboat'>
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
                        <div className='header-info'>

                        <p>Our high speed underwater Dolly was designed to track Olympic class swimmers from an underwater view. We wanted the Underwater dolly to be compleatly remote controlled from the surface. We also wanted to be able to attach a large cinema camera to the dolly so that it can be used for any application. The Underwater dolly can travel at speeds of 1-10mph.</p>
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