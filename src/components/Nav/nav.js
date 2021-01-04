import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Logo from './jordy_logo.png'


const StyledLogo = styled.div`

    display: flex;
    align-items: center;
    padding-right: 10px;
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
    /* align-items: center; */
    flex-direction: row;
    list-style: none;
    /* width: 90%; */
    background-color: whitesmoke;
    z-index: 0;
    /* margin: 0; */
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
        padding: 10px;
        width: 100vw;
    }
`;

export default class Nav extends React.Component {

    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        this.targetElement = document.querySelector('#mobile-nav');
        disableBodyScroll(this.targetElement);
      }

      showTargetElement = () => {
        // ... some logic to show target element
     
        // 4. Disable body scroll
      };
     
      hideTargetElement = () => {
        // ... some logic to hide target element
     
        // 5. Re-enable body scroll
        enableBodyScroll(this.targetElement);
      };

      componentWillUnmount() {
        // 5. Useful if we have called disableBodyScroll for multiple target elements,
        // and we just want a kill-switch to undo all that.
        // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
        // clicks a link which takes him/her to a different page within the app.
        clearAllBodyScrollLocks();
      }


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