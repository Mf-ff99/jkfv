import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
    width: 40px;
    height: 28px;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    /* float: right; */
    div {
        border-bottom: 5px solid black;
        border-radius: 10px;
        background-color: ${({open}) => open ? '#f1f1f1' : '#333'};
        transform-origin: 1px;

        &:nth-child(1) {
            transform: ${({open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        } 
    }
`;
const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

export default Burger