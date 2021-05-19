import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Image = styled(motion.img)`
  
  width: auto;
  height: auto;
  border-radius:5%;
  
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
  width: auto;
  height: 250px;
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
    transition: {

      type: "tween",
      delay: .5
    }


  },
  visible: {
    height: "100%",
    transition: {

      type: "tween",
      duration: .5
    }
  },
}
export default props => {

  const { children, cursor, index, image, animateImage, controls,enlarge } = props


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
