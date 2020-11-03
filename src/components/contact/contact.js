import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <>
        <section className="contact-page">
            <div className="about-page-container">
            <div className="content">

            <h2>Jordan Klein Film & Video</h2>
            <h4>Contact us directly:</h4>
            <h4>Shoot us an email!</h4>
            <h4>Find Jordy on instagram</h4>
            <h4>Find Jordy on LinkedIn!</h4>
            <h4>Find us on Facebook</h4>
            </div>
            </div>
        </section>

        <br />
        <section className="contact-page">
            <div className="about-page-container">
                <div className='content'>
                    <p>Contact Us</p>

                    <form>
                    <label htmlFor="name">Your name:</label>

                        <input type="text" placeholder="yourname here!"></input>    
                        {/* <br /> */}
                        <label htmlFor="company-name">Associated Company</label>
                        <input type="text" name="company-name" id="company-name"></input>
                        <label htmlFor="phone">Enter your phone number</label>
                        
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    
                        <button type="submit">Submit</button>    
                    </form>   
                </div>
            </div>

        </section>
        </>
    )
}