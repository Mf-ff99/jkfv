import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { HashLink } from 'react-router-hash-link'
import { Animated } from 'react-animated-css'
import './work.css'
import Images from '../../images/BarreledImages'
import ReactPlayer from 'react-player/lazy';



    const WorkItemsArray = [
        {
            name: 'Marine + Underwater',
            description: `Our work in the marine industry is second to none. Our 30' robotic crane is ideal for getting up close and personal. Jordy's team has the experience and knowledge to get any shot needed, no matter how big or small a task.`,
            links: [
                'https://vimeo.com/458941481',
                'https://vimeo.com/113506620', 
                'https://www.youtube.com/watch?v=hW4M0mMZ4hQ',
                'https://vimeo.com/105596534',
                'https://vimeo.com/424063996',
                'https://vimeo.com/136759179',
                'https://vimeo.com/495541122',
                'https://player.vimeo.com/video/347630793?title=0&byline=0&portrait=0&app_id=122963',
                'https://vimeo.com/306016327',
            ],

        },
        {
            name: 'TechnoCranes + Camera Cars',
            description: `Our work in the automotive industry is vast, utilizing our 30' robotic crane with our camera truck. Our camera truck offers a 30' reach and full FIZ control from the passenger seats. Our telescopic crane also has a 30' foot reach and is designed to accommodate any number of stablized and unstabilized remote heads.`,
            links: [
                'https://www.youtube.com/watch?v=0I9B_cJOUmM',
                'https://vimeo.com/474146943', 
                'https://vimeo.com/495539330',
                'https://vimeo.com/495537100',
                'https://vimeo.com/395834408',
            ],

        },
        {
            name: 'Drone + Helicopter Aerials',
            description: ['Aerial photography is an art, and no one does it better than our sister company XCam Aerials. From flying full-size camera packages to the Mavic Pro 2, we do it all. XCam Aerials is one of the few aerial companies that operate by the Motion Picture aerial manual. We also maintain both the FAA 333 exemption and the newly established Part 107 certifications. This allows all of our pilots to enjoy the same privileges as full-size commercial aircraft operators.You can find out more at the ', <a href="http://xcamaerials.com" target="_blank" rel="noopener noreferrer" >XCam Aerials</a>, ' website.'],
            links: [
                'https://vimeo.com/203179504',
                'https://vimeo.com/91879445', 
                'https://vimeo.com/321497422',
                'https://vimeo.com/333546749',
            ],

        },
    ]

    
    const WorkItems = () => { 
        let workItems = WorkItemsArray.map(item => {
            const workVideos = item.links.map(link => {
                
                return (
                    <div className='vimeo-video'>
                    <ReactPlayer
                        className='carousel-work-video'
                        url={link}
                        playing={false}
                        width='100%'
                        muted={true}
                        controls={true}
                        loop={true}
                        
                        />
                </div>
                )
            })
        return (
            <>
            <div className='project-header' id='work'>
        <h2>{item.name}</h2>
        <br />
       
        <p style={{width: '70%'}}>{item.description}</p>
        
        <hr />
    </div>
    <Carousel showThumbs={false} infiniteLoop id='cameracar-carousel'>
        {workVideos}
    </Carousel>
    </>
            
        )
    })
    console.log(workItems)
    return workItems 
    }

export default function Work() {

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut">

        <section className="work-page">

            <div className="work-page-header">

                <h1>Our Work</h1>
                <p>Over the years we have worked with thousands of clients shooting with drones, photoboats, underwater camera housings, and more. In-house we carry a large array of the latest drones, cameras, underwater housings, robotic cranes, camera cars, and photoboats. We have all the tools you need to get the shots you require.</p>
            <h6>The videos below showcase a fraction of what is possible with our tools.</h6>
            <Animated animationIn='fadeIn' animationInDuration={1200}>
            <HashLink smooth to='#work'><img className='work-scroll-arrow' src={Images.DownArrow} alt='scroll-down arrow' /></HashLink>
            </Animated>
            </div>
         
            <div className="projects-grid">
               <WorkItems />
            </div>
            <br />
        </section>
                            </Animated>
    )
}