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

                        <h2>Contact Us</h2>
                        <span>352-427-2560</span>
                        <span><a className="email" href="mailto:jordy@jordy.com" >jordy@jordy.com</a></span>
                        <hr />
                        <h6>Call or email us, or simply fill out the form below and we will be in touch with you as soon as possible.</h6>
                        <HashLink smooth to='#form'>
                            <Animated animationIn='slideInUp' animationInDuration={1200}>
                            <img className='work-scroll-arrow contact-arrow' src={Images.DownArrow} alt='scroll-down arrow' />
                            </Animated>
                            </HashLink>

                    </div>
                
                    <hr />
                    <div className='contact-container-lower'>

                    <div className='contact-lower'>
                        
                            <form id='form' className="form-style-4" action="" method="post">
                                <label htmlFor="field1">
                                    <span></span><input placeholder='Your Name' type="text" name="field1" required/>
                                </label>
                                <label htmlFor="field2">
                                    <span></span><input placeholder='youremail@email.com' type="email" name="field2" required />
                                </label>
                                <label htmlFor="field3">
                                    <span></span><input placeholder='Subject' type="text" name="field3" required />
                                </label>
                                <label htmlFor="field5">
                                    <span></span><input  placeholder='Company'type="text" name="field5" required />
                                </label>
                                <label htmlFor="field6">
                                    <span></span><textarea name="field6"  placeholder='Your message here' required></textarea>
                                </label>
                                <label>
                                    <span> </span><input type="submit" value="Submit" />
                                </label>
                            </form>
                    
                    </div>
                    </div>

                </div>
            </section>

            {/* <section className="contact-page">
                <div className="about-container-lower">
                    <div className='contact-lower'>
                    <p>Contact Us</p>
                    
                    <form>
                    <label htmlFor="name">Your name:</label>
                    
                    <input type="text" placeholder="yourname here!"></input>
                    {/* <br /> */}
            {/* <label htmlFor="company-name">Associated Company</label>
                            <input type="text" name="company-name" id="company-name"></input>
                            <label htmlFor="phone">Enter your phone number</label>
                            
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            
                            <button type="submit">Submit</button>
                            </form>
                            </div>
                        </div> */}


                        </Animated>
        </>
    )
}