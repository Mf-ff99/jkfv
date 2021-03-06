import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

import Logo from './jordy_logo.png'


const StyledLogo = styled.div`

    display: flex;
    align-items: center;
    padding-right: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 15px;
        img {
        padding: 0;
        height: 90px; 
    }
    
    a {
        color: black !important;
        text-decoration: none;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    @media (min-width: 768px) {
        /* display: none !important; */
        /* color: red !important; */
    }
`;

const NavStyled = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    list-style: none;
    background-color: whitesmoke;
    z-index: 0;
    border-bottom: 2px solid #f1f1f1;
    font-size: 18px;

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

    li a {
        text-decoration: none;
    }

    .logo {
        height: 90px;
        width: 90px;
        margin: 0;
        padding: 0;

    }

    .logo span {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 20px;
    }

    .logo-text-left a{
        width: 120px !important;
    }

    @media (max-width: 770px) {
        justify-content: space-between;
        /* padding: 10px; */
        width: 100vw;
    }
`;

export default class Nav extends React.Component {


    render() {
        return (
            <NavStyled>
                <StyledLogo>

                <a href='/'><img src={Logo} alt="Jordan Klein Film and Video Logo" /></a>

                <span className="logo-text-left"><a href='/'>Jordan Klein Film & Video</a></span>
          
                </StyledLogo>
                
                <Burger />
                
            </NavStyled>
        )
    }
}