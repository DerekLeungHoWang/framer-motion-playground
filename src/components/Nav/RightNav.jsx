import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from "framer-motion";
const sidebar = {
    open: (height = 1000) => ({

        clipPath: `circle(${height * 2 + 200}px at 88% 3.8%)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 88% 3.8%)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const UL = styled.ul`

    list-style: none;
    /* display: flex;
    flex-flow: row nowrap; */
    


    /* @media(max-width:768px){ */
        position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         width: 300px;
        background: rgb(238, 83, 83);
        
        /* flex-flow:column nowrap;
        background-color:#0D2538;
        position:fixed;
        transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right:0;
        height:100vh;
        width:300px;
        padding-top:3.5rem;
        transition:transform 0.3s ease-in-out; */
        li{
            padding:18px 10px;
            color:#000000;
        }
    /* } */


`

function RightNav({ open }) {
    return (
        <UL animate={open ? "open" : "closed"} open={open} as={motion.ul} variants={sidebar}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contac Us</li>
            <li>Sign In</li>
            <li>Sign Up</li>

        </UL>
    )
}

export default RightNav
