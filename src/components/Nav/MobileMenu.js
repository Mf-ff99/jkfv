import styled from 'styled-components'
import React from 'react'
import Logo from './jordy_logo.png'

const UL = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    margin-left: 0;
    padding-left: 0;

    li {
        color: black !important;
        padding: 18px 10px;
    }

    img {
        padding: 0;
        height: 90px;
         
    }
    
    a {
        color: black !important;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0;
    }

    .right-side-nav {
        right: 0;
        
    }

    @media (max-width: 768px) {
        /* display: none !important; */
    min-height: 400px;
        display: flex;
        flex-direction: column !important;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding: 15px 0 0 0;
        transition: .3s ease-in-out;

    a {
        color: black !important;
    }
        li {
            color: black;
        }

    }
`

const MobileNav = ({ open }) => {
    return (
        <UL open={open}>
            <li className="logo">
                <a href='/'><img src={Logo} /></a>

                <span className="logo-text-left"><a href='/'>Jordan Klein Film & Video</a></span>
            </li>
            <li className="right-side-nav">
                <a href="/work">Work</a>

            </li>
            <li className="right-side-nav">
                <a href='/tools'>Tools</a>
            </li>
            <li className="right-side-nav">
                <a href="/contact">Contact</a>

            </li>
            <li className="right-side-nav end">
                <a href="/about">About</a>

            </li>
        </UL>
    )

}

export default MobileNav