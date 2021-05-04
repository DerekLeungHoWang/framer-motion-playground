
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://images.unsplash.com/photo-1540829917886-91ab031b1764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",



];


 
export const MotionImage = styled(motion.img)`
     width: 50vw;
  height: 50vh;
    /* width: 350px;
  height: 250px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 // border-radius:25px;
`;

export const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const StyledIcon = styled(FontAwesomeIcon)`
        font-size:30px;
 
`;



export const MySlider = styled(motion.div)`
        /* opacity:1;
        transition-duration:1s ease; */
        /* transform:scale(1); */
     
        /* ${({ active }) => {
    if (active)
      return (`
        opacity:1;
        transition-duration:1s;  
         left: 0;
     
        z-index:999
  `)


  }} */
       
   
 
`;
