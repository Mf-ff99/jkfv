import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logos from '../../images/logos/logos'



export default class WorkCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                <ReactPlayer
                            className='video-2-player'
                            url='https://vimeo.com/445579276'
                            playing={false}
                            width='300px'
                            height='250px'
                            // volume={.1}
                            playing={true}
                            muted={true}
                            // controls={true}
                            loop={true}
                            
                        />
                </div>
                <div>
                    <img src={logos.NFL} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logos.NFL} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}