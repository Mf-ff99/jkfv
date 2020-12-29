import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './work.css'
import ReactPlayer from 'react-player/lazy';



export default function Work() {
    const renderProject = () => {

    }

    return (
        <section className="work-page">
            <div className="work-page-header">

                <h1>Our Work</h1>
                <p>Over the years we have worked with hundreds of companies, shooting with drones, photoboats, underwater camera housings, and much more.</p>
            </div>

            <div className="projects-grid">
                <div className='project-header'>
                    <h2>Marine</h2>
                    <hr style={{float: 'left', borderBottom: '1px solid black', width: '90px'}} />
                    <p style={{width: '50%'}}>Our work in the marine industry is second to none. Our 30' robotic crane is ideal for getting up close and personal. Jordy's team has the experience and knowledge to get any shot needed, no matter how big or small a task.</p>
                    <h6>The videos below represent a fraction of what is possible with our tools.</h6>
                    <hr />
                </div>
                <Carousel>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/458941481'
                            playing={false}
                            width='92%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}

                        />
                        {/* <p className="legend">Legend 2</p> */}

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
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/445579276'
                            playing={false}
                            width='92%'
                            
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
                            url='https://vimeo.com/105596534'
                            playing={false}
                            width='92%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}

                        />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                </Carousel>
            

            <div className='project-header'>
                    <h2>Automotive</h2>
                    <hr style={{float: 'left', borderBottom: '1px solid black', width: '90px'}} />
                    <p style={{width: '50%'}}>Our work in the automotive industry is vast, utilizing our 30' robotic crane with our camera truck. Our camera truck offers a 30' reach and full FIZ control from the passenger seats.</p>
                    
                    <hr />
                </div>
                <Carousel>
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/458941481'
                            playing={false}
                            width='92%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}

                        />
                        {/* <p className="legend">Legend 2</p> */}

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
                    <div className='vimeo-video'>
                        <ReactPlayer
                            className='carousel-work-video'
                            url='https://vimeo.com/445579276'
                            playing={false}
                            width='92%'
                            
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
                            url='https://vimeo.com/105596534'
                            playing={false}
                            width='92%'
                            
                            // volume={.1}
                            muted={true}
                            controls={true}
                            loop={true}

                        />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                </Carousel>
            </div>
        </section>
    )
}