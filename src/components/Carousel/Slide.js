import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Image = styled(motion.img)`
  
  width: auto;
  height: auto;
  border-radius:5%;
  object-fit:cover;
  
`;
const Outer = styled.div`
  padding: 10px 5px;
  width: 250px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Inner = styled(motion.div)`
  width: 100%;
  height: 350px;
  background-color: transparent;
  color: white;
  padding: 5px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


 
const variants = {
  hidden: {
    height: "80%",
    width:"100%",
    transition: {

      type: "spring",
      delay: .5,
      // mass: 0.4,
      // damping: 8,
      duration: 1,
    }


  },
  visible: {
    height: "100%",
    width:"100%",
    transition: {
      type: "spring",
      duration: 1,
  


    }
  },
}
export default props => {

  const { children, cursor, index, image, animateImage, controls, enlarge } = props


  return (
    <Outer>
      <Inner
        
        
       
      >
        <Image
          initial="hidden"
          animate={(index % 10 === cursor) && enlarge ? "visible" : "hidden"}
          variants={variants}
          src={image} alt="a"

        />


      </Inner>
    </Outer>
  );
};
{/* <Image
initial="hidden"
animate={(index % 10 === cursor) ? controls : {
  height: "50%"


}}
variants={variants}
src={image} alt="a"

/> */}
