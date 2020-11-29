import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


import './tools.css'



export default class Tools extends React.Component {

    state = {
        toDisplay: false,
    }

    renderCard = (values) => {
        console.log(values)
        return (
            <div className="card">
                <div className='card-img'>
                    insert image here
                </div>
                <h2>Photography Package</h2>
            </div>
        )
    }

    render() {
        return (
            <section className='tools'>
                <div className='tools-header'>
                    <h2>The  Gear</h2>
                    <hr />
                </div>
                <Grid container
                    spacing={3}
                    // direction="column"
                    justify="center"
                    alignItems="center"
                    // sm={12}
                    style={{ height: "50vh" }}
                >
                    <Grid item xs={12}  sm={6} md={6}
                        style={{ textAlign: "center" }}>

                    {this.renderCard()}
                </Grid>
                    <Grid item xs={12} sm={6} md={6}
                        style={{ textAlign: "center" }}>
                        {this.renderCard(this.DroneValues)}
                </Grid>
                <Grid item 
                xs={12}  sm={6} md={6}
                        style={{ textAlign: "center" }}>
                    {this.renderCard()}
                </Grid>
                    <Grid item xs={12}  sm={6} md={6}
                        style={{ textAlign: "center" }}>
                        {this.renderCard(this.DroneValues)}
                </Grid>
                </Grid>
            </section>
        )
    }
}