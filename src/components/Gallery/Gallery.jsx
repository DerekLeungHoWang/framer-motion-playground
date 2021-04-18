import React from 'react'
import styled from 'styled-components'
import { motion, transform, useCycle } from "framer-motion";


const Container = styled(motion.div)`
    width:100%;
    background: skyblue;
    height:auto;
  
    display : flex;
   flex-direction : row ;
   justify-content : space-around;
   flex-flow : wrap;

`

const PhotoBox = styled(motion.div)`
   width:25%;
   height:200px;
 //  background-color: #169c69;
 background-image:url("https://picsum.photos/200");
   margin:20px;
   box-sizing:border-box;
   font-size:50px;
    border-radius:50px;
   @media screen and (max-width:1200px){
       width:45%;
       background-color:red;
   }

`


function Gallery() {
    const container = {
        hidden: {

            opacity: 0
        },
        show: {

            opacity: 1,
            transition: {
                staggerChildren: 0.2,

            }
        }
    }

    const item = {
        hidden: {

            x: "100%",
            opacity: 0

        },
        show: {

            x: "0",
            opacity: 1,
            transition: {
                type: "spring",
            
            }
        }


    }

    return (
        <Container variants={container}
            initial="hidden"
            animate="show">


            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />
            <PhotoBox variants={item} />

        </Container>
    )
}

export default Gallery
