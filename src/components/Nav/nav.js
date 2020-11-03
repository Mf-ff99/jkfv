import React from 'react'
import { Link } from 'react-router-dom'
import navCSS from './nav.css'
import Logo from './jordy_logo.png'

export default class Nav extends React.Component {


    render() {
        return (
            <nav>
                <ul>
                    <li className="logo">

                <a href='/'><img src={Logo}/></a>
                <span className="logo-text-left"><a href='/'>Jordan Klein Film & Video</a></span>
                {/* <span className="logo-text-right"> Film & Video</span> */}
                    </li>
                    <li className="right-side-nav">
                <a href="/work">Work</a>

                    </li>
                    <li className="right-side-nav">
                <a href="/contact">Contact</a>

                    </li>
                    <li className="right-side-nav">
                <a href="/about">About</a>           

                    </li>
                </ul>
            </nav>
        )
    }
}