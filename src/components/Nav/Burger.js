import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import MobileNav from './MobileMenu';

const StyledBurger = styled.div`
margin-top: 20px;
    width: 40px;
    height: 28px;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 100;
    /* float: right; */
    div {
        border-bottom: 5px solid black;
        border-radius: 10px;
        background-color: ${({open}) => open ? '#f1f1f1' : '#333'};
        transform-origin: 1px;
        transition: all .3s;

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

    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <MobileNav open={open}/>
        </>
    )
}

export default Burger