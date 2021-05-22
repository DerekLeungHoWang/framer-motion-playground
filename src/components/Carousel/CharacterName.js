import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AnimatePresence, motion } from "framer-motion";
const Wrapper = styled.div`
    position: absolute;
  display: flex;
  align-items: center;
  left: 13%;
  bottom: 50%;

  height: 150px;
  width: 280px;
 
   overflow: hidden;
 
`;
const Name = styled(motion.h1)`
  position: absolute;

  color: white;
  font-size: 70px;
  transition: bottom 2s ease-in-out;

`;

const textVariants = {
    hidden: {
        y: 150,
        transition: "none"

    },
    visible: {
        y: 0,
        transition: "none",


    },
    exit: {
        y: -150,
        transition: "none",

        transitionEnd: {
            y: 150
        }
    }

}

const names = ["Fiora", "Lucian", "Akali", "Leona", "Warwick"]
export default function CharacterName(props) {
    let cursor = useSelector(state => state.CarouselReducer.cursor);
    const enlarge = useSelector(state => state.CarouselReducer.enlarge);

    // cursor === -1 ? cursor = names.length - 1 : cursor === 5 ? cursor = 0 : cursor
    useEffect(() => {

        if (cursor === -1) {
            cursor = names.length - 1
        }

        if (cursor === 5) {
            cursor = 0
        }

        return () => {

        }
    }, [cursor])

    console.log(cursor);

    return (
        <Wrapper>
            <AnimatePresence exitBeforeEnter >
                {names.map((name, index) => {
                    return (

                        index === (cursor === -1 ? cursor = names.length - 1 : cursor === 5 ? cursor = 0 : cursor) &&
                        enlarge &&
                     
                            <Name
                                key={name}
                                initial="hidden"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={textVariants}  >
                                {name}

                            </Name>
                         
                     

                    )
                })}

            </AnimatePresence>
        </Wrapper>
    )
}
// {names[]}