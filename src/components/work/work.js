import React from 'react'
import './work.css'


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
                <div classname="projects-row">
                    <div className="projects-column">
                        <div className="project">

                            <h3>company logo goes here</h3>
                            <h4>click to reveal video</h4>
                        </div>
                        <div className="project">

                            <h3>company logo goes here</h3>
                            <h4>click to reveal video</h4>
                        </div>
                    </div>
                </div>
                <div classname="projects-row">
                    <div className="projects-column">
                        <div className="project">

                            <h3>company logo goes here</h3>
                            <h4>click to reveal video</h4>
                        </div>
                        <div className="project">

                            <h3>company logo goes here</h3>
                            <h4>click to reveal video</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}