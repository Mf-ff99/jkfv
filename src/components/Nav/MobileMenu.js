import styled from 'styled-components'
import React from 'react'
import Logo from './jordy_logo.png'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    margin-left: 0;
    padding-left: 0;
    z-index: 1000;
    overflow: hidden;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    max-width: 700px;
    padding-right: 80px;
    li {
        color: black !important;
        padding: 18px 10px;
        &:nth-child(4) {
            min-width: 102px;
        }
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
        display: flex;
        flex-direction: column !important;
        justify-content: flex-start !important;
        align-items: flex-end !important;
        /* padding-top: 50px; */
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 65vw !important;
        border-left: 1px solid black;
        border-radius: 3px;
        padding: 85px 45px 0 0;
        transition: .3s ease-in-out;
        z-index: 1000;
        font-size: 25px;
        margin-block-start: 0;
    a {
        color: black !important;
    }
        li {
            color: black;
        }

        .logo {
            flex-direction: column;
            justify-content: center !important;
        }
    }
    @media (min-width: 769px) {
        li.mobile a img{
            display: none !important;
        }
    }
`

class MobileNav extends React.Component {
    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        this.targetElement = document.querySelector('#mobile-nav');
        
    }
    
    showTargetElement = (open = true) => {
          if(open === true) enableBodyScroll(this.targetElement);
         
      } 
    render() {
        let open = this.props.open
        if(open) disableBodyScroll(this.targetElement)
        if(!open) clearAllBodyScrollLocks()
        return (
            <UL id='mobile-nav' open={open}>
            <li className="mobile logo">
                {open ? <a href='/'><img src={Logo} alt="Jordan Klein Film and Video Logo" /></a> : ''}
            </li>
            <li className="right-side-nav">
                <a href="/work">Work</a>
            </li>
            <li className="right-side-nav">
                <a href='/tools'>Tools</a>
            </li>
            <li className="right-side-nav"><a href='/jordy-klein'>Jordy Klein</a></li>
            <li className="right-side-nav">
                <a href="/contact">Contact</a>
            </li>
            <li className="right-side-nav end">
                <a href="/about">About</a>
            </li>
        </UL>
    )
}

}

export default MobileNav