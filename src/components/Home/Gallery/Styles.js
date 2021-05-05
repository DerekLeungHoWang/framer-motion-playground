
import { motion } from 'framer-motion';
import styled from 'styled-components'

export const Container = styled.div`
   width:100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;
 
 `;


export const Header = styled(motion.div)`
  
   font-size:30px;
   font-weight:600;
 
`;

export const MotionImage = styled(motion.img)`
 
 
    padding:1em 1em;
    flex: 0 32%;
    width: 300px;
    height: auto; 
    border-radius:55px;
`;

export const ImageContainer = styled(motion.div)`

    display: flex;
  flex-wrap: wrap;
    justify-content: center;
  align-items:center;
`;

export const MyBackdrop = styled(motion.div)`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;

   background:rgba(0,0,0,0.5); 
    z-index:999;
   
`;

export const MyModal = styled(motion.div)`
     max-width:400px;
     margin: 0 auto;
     padding:40px 20px;
     background:white;
     border-radius:10px;
     text-align: center;
     height:500px;
   
`;