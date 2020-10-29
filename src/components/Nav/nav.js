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

                <Link href='/home'> <img src={Logo}/></Link>
                <span className="logo-text-left">Jordan Klein Film & Video</span>
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