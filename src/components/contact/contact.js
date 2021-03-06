import React from 'react'
import { Animated } from 'react-animated-css'
import { HashLink } from 'react-router-hash-link'
import Images from '../../images/BarreledImages'
import './contact.css'

export default function Contact() {
    return (
        <>
            <Animated animationIn="fadeIn" animationOut="fadeOut">

                <section className="contact-page">
                    <div className="about-container">
                        <div className="contact-upper">

                            <h2 className='page-header'>Contact Us</h2>
                            <div className='contact-info-container'>
                                <div className='contact-info-line-address'>

                                    <h3>Address</h3>
                                    <span style={{minWidth: '25vw'}}>
                                        10197 SE 144th PL <br /> Summerfield FL 34491
                        </span>
                                </div>
                                <div className='contact-info-line'>
                                    <h3>Office #</h3>
                                    <span>352-288-3999</span>
                                </div>
                                <div className='contact-info-line'>
                                    <h3>Cell #</h3>
                                    <span>352-427-2560</span>
                                </div>
                                <div className='contact-info-line'>
                                <h3>Email</h3>
                                    <span><a className="email" href="mailto:jordy@jordy.com" >jordy@jordy.com</a></span>
                                </div>
                            </div>
                            <hr />
                            <h6>Call or email us, or simply fill out the form below and we will be in touch with you as soon as possible.</h6>
                            <HashLink smooth to='#form'>
                                <Animated animationIn='slideInUp' animationInDelay={1000} animationInDuration={1200}>
                                    <img className='work-scroll-arrow contact-arrow' src={Images.DownArrow} alt='scroll-down arrow' />
                                </Animated>
                            </HashLink>

                        </div>

                        <hr />
                        <div className='contact-container-lower'>

                            <div className='contact-lower'>

                                <form id='form' className="form-style-4" action="" method="POST">
                                {/* https://mailthis.to/markforce */}
                                    <label htmlFor="field1">
                                        <span></span><input placeholder='Your Name' type="text" name="field1" required />
                                    </label>
                                    <label htmlFor="field2">
                                        <span></span><input placeholder='youremail@email.com' type="email" name="field2" required />
                                    </label>
                                    <label htmlFor="field3">
                                        <span></span><input placeholder='Subject' type="text" name="field3" required />
                                    </label>
                                    <label htmlFor="field5">
                                        <span></span><input placeholder='Company' type="text" name="field5" required />
                                    </label>
                                    <label htmlFor="field6">
                                        <span></span><textarea name="field6" placeholder='Your message here' required></textarea>
                                    </label>
                                    <label>
                                        <span> </span><input type="submit" value="Submit" />
                                    </label>
                                </form>

                            </div>
                        </div>

                    </div>
                </section>
            </Animated>
        </>
    )
}