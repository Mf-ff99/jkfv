import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

import Logo from './jordy_logo.png'
import MobileMenu from './MobileMenu'

const NavStyled = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-direction: row;
    list-style: none;
    /* width: 90%; */
    background-color: whitesmoke;
    z-index: 100;
    /* margin: 0; */
    border-bottom: 2px solid #f1f1f1;

    .logo {
        padding: 15px 0;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: nowrap;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        background-color: whitesmoke;
    }

    li {
        padding: 18px 10px;

    }

    @media (max-width: 768px) {
        justify-content: flex-end;
    }

    @media (min-width: 768px) {
        display: none !important;
    }

  
`;

export default class Nav extends React.Component {


    render() {
        return (
            <NavStyled>
                {/* <MobileMenu> */}
                    
                    {/* <li className="logo">

                <a href='/'><img src={Logo}/></a>
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

                    </li> */}

                {/* </MobileMenu> */}
                <Burger />
            </NavStyled>
        )
    }
}