
import styled from 'styled-components'
import { ReactComponent as visaLogo } from '../../Assets/Images/visa.svg'
import { ReactComponent as chip } from '../../Assets/Images/chip.svg'
import { ReactComponent as earth } from '../../Assets/Images/earth.svg'
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`

    position:relative;
    width:500px;
    height:300px;
    border-radius:18px;
    border-radius: 15px;
  
    border: 1px solid #000;
  background:rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
 


 
 `;
export const Earth = styled(earth)`
     position:absolute;
  right:0px;
  bottom:0px;
  height: 100%;
  width:  95%;
  z-index:-1;

`
export const VisaLogo = styled(visaLogo)`
     position:absolute;
    right:25px;
    bottom:0px;
   height: 5rem;
    width: 5rem;
   
   
`
export const ChipLogo = styled(chip)`
     position:absolute;
    left:70px;
    bottom:125px;
   height: 5rem;
    width: 5rem;
 
 `

export const CardText = styled(motion.p)`
position:absolute;
color:#cfcfcf;
left:70px;
bottom:105px;
font-size:30px;
font-family:Roboto;
font-weight:400;

`