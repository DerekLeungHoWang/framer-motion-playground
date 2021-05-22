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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Inner = styled(motion.div)`
  width: 100%;
  height: 550px;
  background-color: transparent;
  color: white;
  padding: 5px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const DifficultyWrapper = styled(motion.span)`
  padding-left: 15px;
 width: 100%;
 span{
    font-size: 15px;
  color: white;
  font-weight: 700;
  }


`

const StarWrapper = styled(motion.div)`

  font-size: 12px;
  span{
    color: grey;
    padding-bottom: 15px;
  }

  .checked{
    color: white;
  }


`



const variants = {
  hidden: {
    height: "60%",
    width: "100%",
    transition: {

      type: "spring",
      delay: .5,
      // mass: 0.4,
      // damping: 8,
      duration: 1.5,
    }


  },
  visible: {
    height: "100%",
    width: "100%",
    transition: {
      type: "spring",
      duration: 1.5,



    }
  },
}
export default props => {

  const { children, cursor, index, image, animateImage, controls, enlarge } = props


  return (
    <Outer>

      <Inner >

        <DifficultyWrapper>
          <span>Difficulty</span>
          <StarWrapper>

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className={`fa fa-star ${index%5==4? null:"checked"}`}></span>
            <span className={`fa fa-star ${index%5==0||index%5==2? "checked":null}`}></span>
            <span className={`fa fa-star ${index%5==0? "checked":null}`}></span>
          </StarWrapper>

        </DifficultyWrapper>
        <Image
          initial="hidden"
          animate={(index % 5 === cursor) && enlarge ? "visible" : "hidden"}
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
