import React from 'react'
import { Animated } from 'react-animated-css'
import './contact.css'

export default function Contact() {
    return (
        <>
        <Animated animationIn="fadeIn" animationOut="fadeOut">

            <section className="contact-page">
                <div className="about-container">
                    <div className="contact-upper">

                        <h2>Contact Us</h2>
                        <h6>Call or email us, or simply fill out the form and we will be in touch with you as soon as possible.</h6>
                        <hr />
                        <span>352-427-2560</span>
                        <span><a className="email" href="mailto:jordy@jordy.com" >jordy@jordy.com</a></span>
                    </div>
                
                    <hr />
                    <div className='contact-lower'>
                        
                            <form className="form-style-4" action="" method="post">
                                <label htmlFor="field1">
                                    <span>Your Name</span><input type="text" name="field1" required/>
                                </label>
                                <label htmlFor="field2">
                                    <span>Email Address</span><input type="email" name="field2" required />
                                </label>
                                <label htmlFor="field3">
                                    <span>Subject</span><input type="text" name="field3" required />
                                </label>
                                <label htmlFor="field5">
                                    <span>Company</span><input type="text" name="field5" required />
                                </label>
                                <label htmlFor="field6">
                                    <span>Message</span><textarea name="field6"  required></textarea>
                                </label>
                                <label>
                                    <span> </span><input type="submit" value="Submit" />
                                </label>
                            </form>
                    
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