import React, { useState } from 'react'
import { Animated } from 'react-animated-css';
import styled from 'styled-components'
import MobileNav from './MobileMenu';

const StyledBurger = styled.div`
margin-top: 5px;
    width: 2rem;
    height: 2rem;
    top: ${({open}) => open ? '30px' : '10px'};
    right: 30px;
    margin-right: 10px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 4000;
    /* float: right; */
    position: ${({open}) => open ? 'fixed' : 'relative'};
    transition: .5s ease-in-out;
    div {
        width: 2rem;
        height: .25rem;
        border: 1px solid black;
        border-radius: 10px;
        background-color: ${({open}) => open ? 'black' : 'black'};
        transform-origin: 1px;
        transition: all .3s;
        transform: ${({open}) => open ? 'rotate(90deg)' : 'rotate(0deg)'};

        &:nth-child(1) {
            transform: ${({open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        } 
        
        &:nth-child(2) {
            transform: ${({open }) => open ? 'translateX(100%)' : 'translateX(0%)'};
            
            opacity: ${({open }) => open ? '0' : '1'};
        
        }

        &:nth-child(3) {
            transform: ${({open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 768px) {
        display: none !important;
    }
`;
const Burger = () => {
    const [open, setOpen] = useState(false)

    // componentDidMount() {
    //     // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    //     // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    //     // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    //     this.targetElement = document.querySelector('#mobile-nav');
        
    // }
    
    // showTargetElement = (open) => {
    //       if(open) enableBodyScroll(this.targetElement);
         
    //   };
     
    //   hideTargetElement = () => {
    //     // ... some logic to hide target element
     
    //     // 5. Re-enable body scroll
    //   };

    //   componentWillUnmount() {
    //     // 5. Useful if we have called disableBodyScroll for multiple target elements,
    //     // and we just want a kill-switch to undo all that.
    //     // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    //     // clicks a link which takes him/her to a different page within the app.
    //     clearAllBodyScrollLocks();
    //   }

    return (
        <>
            
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <>
            <div></div>
            <div></div>
            <div></div>
            </>
        </StyledBurger>
        <MobileNav open={open}/>
    
        </>
    )
}

export default Burger