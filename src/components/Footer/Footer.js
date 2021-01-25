import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    background-color: whitesmoke;
    /* padding-top: 10px; */
    /* border-top: 1px solid gray; */
    
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        width: 100vw;
        align-items: center;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 0;
        margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 15px;
        li:nth-child(2) {
            padding-right: 15px;
        }
        li:nth-child(2):hover {
            /* color: black !important; */
            
        }
        
    }

    @media (max-width: 450px) {
        font-size: 10px;
        max-width: 100vw;
        ul li:nth-child(2) {
            padding-right: 0px;
        }
    }

`

const Footer = () => {


    return (
        <FooterContainer>
            <ul>
                <li style={{color: '#333'}}>
               Copyright © Jordan Klein 2020
                </li>
                <li style={{color: 'gray'}}>
                    Created by <a style={{color: 'black'}} href='https://www.linkedin.com/in/mark-j-force/' target='_blank' rel='noopener noreferrer'>@markforce</a>
                </li>
            </ul>
        </FooterContainer>
    )
}

export default Footer