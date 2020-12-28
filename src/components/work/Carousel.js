import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logos from '../../images/logos/logos'



export default class WorkCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={logos.NFL} />
                    <p className="legend">Legend 1</p>
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