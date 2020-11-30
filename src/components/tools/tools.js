import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, CardMedia } from '@material-ui/core'
import DownArrow from '../../images/down-arrow.png'
import Photoboat from '../../images/photoboat.jpg'
import PBJ from '../../images/pbj.png'
import Pontoon from '../../images/pontoon.png'
import './tools.css'
import { Link } from 'react-router-dom'



export default class Tools extends React.Component {

    state = {
        toDisplay: false,
        toDisplayPhotoboat: false,
        expandedDrone: false,
    }

    renderCard = (values) => {
        console.log(values)
        return (
            <Card>
                <h2>{values ? values.title : 'Photography Package'}</h2>
                <div className='card-img'>
                    <Button type='click' onClick={() => this.setState({ toDisplay: true })}>
                        <img className="down-arrow" src={DownArrow} alt='down arrow' />
                    </Button>
                </div>
            </Card>
        )
    }

    renderExpandedDrones = () => {
        return (
            <Card>
                <h2>Aerial Packages</h2>
                <ul>
                            <h4>More information on our Aerial photography can be found at our XCam Aerials website below</h4>
                    <Button>
                        <li className="photoboat-container">
                            <a href="http://xcamaerials.com/" target="_blank" >XCam Aerials</a>
                        </li>
                    </Button>
                </ul>
                <div className='card-img'>
                    <Button type='click' onClick={() => this.setState({ expandedDrone: false })}>
                        <img className="arrow-expanded" src={DownArrow} alt='down arrow' />
                    </Button>
                </div>
            </Card>
        )
    }

    renderExpandedPhotoboat = () => {
        return (
            <Card>
                <h2>The Fleet</h2>
                <ul>
                    <Button>
                        <li className="photoboat-container">
                            <h4>
                                The Shotcalla
                            </h4>
                            <CardMedia>
                                <img className="shotcalla" src={Photoboat} alt='the shotcalla' />
                            </CardMedia>
                        </li>
                    </Button>
                    <Button>
                        <li className="photoboat-container">
                            <h4>
                                Photoboat Jr. (PBJ)
                        </h4>
                            <CardMedia>
                                <img className="shotcalla" src={PBJ} alt='the shotcalla' />
                            </CardMedia>
                        </li>
                    </Button>
                    <Button>
                        <li className="photoboat-container">
                            <h4>
                                The Big Baller
                        </h4>
                            <CardMedia>
                                <img className="shotcalla" src={Pontoon} alt='the shotcalla' />
                            </CardMedia>
                        </li>
                    </Button>

                </ul>
                <div className='card-img'>
                    <Button type='click' onClick={() => this.setState({ toDisplayPhotoboat: false })}>
                        <img className="arrow-expanded" src={DownArrow} alt='down arrow' />
                    </Button>
                </div>
            </Card>
        )
    }

    PhotoboatCardInfo = {
        title: 'The Photoboats'
    }

    render() {
        return (
            <section className='tools'>
                <div className='tools-header'>
                    <h2>The  Gear</h2>
                    <hr />
                </div>
                {!this.state.toDisplay ?
                    <Grid container
                        spacing={3}
                        // direction="column"
                        justify="center"
                        alignItems="center"
                        // sm={12}
                        style={{ height: "50vh" }}
                    >
                        <Grid item xs={12} sm={6} md={6}
                            style={{ textAlign: "center" }}>

                            {this.state.toDisplayPhotoboat ? this.renderExpandedPhotoboat() :
                                <Card>
                                    <h2>Our Photoboats</h2>
                                    <div className='card-img'>
                                        <Button type='click' onClick={() => this.setState({ toDisplayPhotoboat: true })}>
                                            <img src={DownArrow} alt='down arrow' />
                                        </Button>
                                    </div>
                                </Card>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}
                            style={{ textAlign: "center" }}>
                            {this.state.expandedDrone ? this.renderExpandedDrones() : 
                            <Card>
                                <h2>The Drones</h2>
                                <div className='card-img'>
                                    <Button type='click' onClick={() => this.setState({ expandedDrone: true })}>
                                        <img className="down-arrow" src={DownArrow} alt='down arrow' />
                                    </Button>
                                </div>
                            </Card>}
                        </Grid>
                        <Grid item
                            xs={12} sm={6} md={6}
                            style={{ textAlign: "center" }}>
                            {this.state.toDisplay ? this.renderExpandedCameras() : 
                            <Card>
                            <h2>Cameras and Lenses</h2>
                            <div className='card-img'>
                                <Button type='click' onClick={() => this.setState({ toDisplay: true })}>
                                    <img className="down-arrow" src={DownArrow} alt='down arrow' />
                                </Button>
                            </div>
                        </Card>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}
                            style={{ textAlign: "center" }}>
                           {this.state.toDisplay ? this.renderExpandedCameras() : 
                            <Card>
                            <h2>Camera Cranes</h2>
                            <div className='card-img'>
                                <Button type='click' onClick={() => this.setState({ expandedCranes: true })}>
                                    <img className="down-arrow" src={DownArrow} alt='down arrow' />
                                </Button>
                            </div>
                        </Card>
                            }
                        </Grid>
                    </Grid> : null}
                    <div className="divider">
                        
                    </div>
                    <div className="photoboats-expanded-info">
                    <Grid container
                        spacing={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        // sm={12}
                        style={{ height: "50vh" }}
                    >
                        <Grid item xs={12} sm={12} md={12}
                            style={{ textAlign: "center" }}>
                              
                                    <h3>Photoboats</h3>
                                <hr />
                                 
                            </Grid>

                    </Grid>
                </div>
            </section>
        )
    }
}