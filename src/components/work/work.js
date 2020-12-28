import React from 'react'
import './work.css'
import WorkCarousel from './Carousel'


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
             <WorkCarousel />
            </div>
        </section>
    )
}