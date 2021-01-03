import React from 'react';
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Animated } from 'react-animated-css'
import './work.css'
import ReactPlayer from 'react-player/lazy';



export default function Work() {

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut">

        <section className="work-page">

            <div className="work-page-header">

                <h1>Our Work</h1>
                <p>Over the years we have worked with thousands of clients shooting with drones, photoboats, underwater camera housings, and more. In-house we carry a large array of the latest drones, cameras, underwater housings, robotic cranes, camera cars, and photoboats. We have all the tools you need to get the shots you require.</p>
            </div>
            <h6>The videos below showcase a fraction of what is possible with our tools.</h6>
            <hr style={{border: '1px solid black', width: '90%'}} />
            <div className="projects-grid">
                <div className='project-header'>
                    <h2>Marine + Underwater</h2>
                    <br />
                    {/* <hr style={{borderBottom: '1px solid black', width: '90px'}} /> */}
                    <p style={{width: '70%'}}>Our work in the marine industry is second to none. Our 30' robotic crane is ideal for getting up close and personal. Jordy's team has the experience and knowledge to get any shot needed, no matter how big or small a task.</p>
                    
                    <hr />
                </div>
                <Carousel showThumbs={false} infiniteLoop id='cameracar-carousel'>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/458941481'
                            playing={false}
                            width='100%'
                            // responsive={true}
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/113506620'
                            playing={false}
                            width='100%'
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    
                    <div>
                    
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://www.youtube.com/watch?v=hW4M0mMZ4hQ'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                 
                    <div className='vimeo-video' style={{marginTop: '0'}}>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/105596534'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className='vimeo-video' style={{marginTop: '0'}}>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/424063996'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/136759179'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className='vimeo-video' style={{marginTop: '0'}}>
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/495541122'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                        />
                    </div>
                <div className='vimeo-video' style={{marginTop: '0'}}>
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://player.vimeo.com/video/347630793?title=0&byline=0&portrait=0&app_id=122963'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div className='vimeo-video' style={{marginTop: '0'}}>
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/306016327'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                </Carousel>

            <div className='project-header'>
                    <h2>TechnoCranes and Camera Cars</h2>
                    <br />
                    {/* <hr style={{borderBottom: '1px solid black', width: '90px'}} /> */}
                    <p style={{width: '70%'}}>Our work in the automotive industry is vast, utilizing our 30' robotic crane with our camera truck. Our camera truck offers a 30' reach and full FIZ control from the passenger seats. Our telescopic crane also has a 30' foot reach and is designed to accommodate any number of stablized and unstabilized remote heads.</p>
                    
                    <hr />
                </div>
                <Carousel showThumbs={false} infiniteLoop>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://www.youtube.com/watch?v=0I9B_cJOUmM'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/474146943'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div>
                    
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/495539330'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/495537100'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
              
                    <div className='vimeo-video' style={{marginTop: '0'}}>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/395834408'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                   
                </Carousel>

                <div className='project-header'>
                    <h2>Drone + Helicopter Aerials</h2>
                    <br />
                    {/* <hr style={{borderBottom: '1px solid black', width: '90px'}} /> */}
                    <p style={{width: '70%'}}>Aerial photography is an art, and no one does it better than our team here at Jordan Klein Film & Video. From flying full-size camera packages to the Mavic Pro 2, we have, and do, it all. You can find out more about our drones on our dedicated <a href="http://xcamaerials.com" target="_blank" rel="noopener noreferrer" >XCam Aerials</a> website.</p>
                    
                    <hr />
                </div>
            <Carousel infinteLoop emulateTouch showThumbs={false}>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/203179504'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 2</p> */}

                    </div>
                    <div className='vimeo-video'>
                    
                    <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/91879445'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/321497422'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/333546749'
                            playing={false}
                            width='100%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}
                            
                            />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    
                </Carousel>
            </div>
            <br />
        </section>
                            </Animated>
    )
}