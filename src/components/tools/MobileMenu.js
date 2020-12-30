import styled from 'styled-components'
import React from 'react'
import { HashLink } from 'react-router-hash-link'


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 150px;
    min-width: 10%;
    // min-height: 800px;
    margin-left: 0;
    padding-left: 0;

    li a {
        color: white !important;
        padding: 18px 10px;
        
    }

    li a:hover {
        border-bottom: none;
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

   
        /* display: none !important; */
        /* min-height: 400px; */
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
        /* top: 185px; */
        left: 0;
        height: 50vh;
        /* width: 1500px; */
        padding: 15px 0 0 0;
        transition: .3s ease-in-out;
        z-index: 10;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

    a {
        color: black !important;
    }
        li {
            color: black;
            width: 190px !important;
            padding: 5px;
            /* display: flex; */
            /* justify-content: center; */
        }

        .logo {
            flex-direction: column;
            justify-content: center !important;
        }

    
`

const MobileNav = ({ open }) => {
    return (
        <UL open={open}>
            <li><HashLink smooth to="#photoboats" >
                                Photoboats</HashLink></li>
                            <li><HashLink smooth to="#cranes">Cranes</HashLink></li>
                            <li><HashLink smooth to="#aerials">Aerials</HashLink></li>
                            <li><HashLink smooth to="#cameracar">Camera Truck</HashLink></li>
                            <li><HashLink smooth to="#lenses">Lenses</HashLink></li>
                            <li><HashLink smooth to="#lenses">Cameras</HashLink></li>
        </UL>
    )

}

export default MobileNav