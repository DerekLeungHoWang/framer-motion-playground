import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion';


const Wrapper = styled.div`
    position:absolute;
    right:0%;
    bottom:25%;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 20px 0;
`;

const SlidesContainer = styled(motion.div)`
  display: flex;
  width: 750px;
  overflow: hidden;
  padding: 0 5px;
   background-color:transparent;
`;

const Button = styled.button`
    height:50px;
    width:50px;
    margin:10px 10px;
    background-color:#4CAF50;
    z-index:999;
`;

const variants = {
    hidden: {},
    visible: {},
}


function Carousel(props) {
    const ref = useRef(null);
    const [cursor, setCursor] = useState(0)
    const [jump, setJump] = useState(false)
    const [animating, setAnimating] = useState(false)
    const [enlarge, setEnlarge] = useState(false)
    const controls = useAnimation();

    const { children } = props;
    const count = children.length;
    const style = {
        display: "flex",
        transition: jump ? "none" : "transform  .5s  ",
        transform: `translateX(-${(count + cursor) * 250}px)`,

    };
    useEffect(() => {
        // console.log("count : ", count);
        console.log("cursor : ", cursor);
        console.log('enlarge :  ', enlarge);
        console.log('jump :  ', jump);

        if (jump) {

            console.log('jumping');


            setJump(false)



        }



        return () => {
            console.log('cleaning up ');
            setJump(false)


        }



    }, [cursor, jump, enlarge])



    const renderChildren = () => {

        const { children } = props;
        let mychildren = [].concat(children, children, children);
        return mychildren.map((child, index) => {
            //console.log("index ",index);
            return React.cloneElement(child, { key: index, cursor, index, controls, enlarge });
        });

    }


    const changeCursor = amount => {
        setEnlarge(false)

        setCursor(cursor + amount)

    };

    const onTransitionEnd = async () => {

        console.log('on transition end');
        setEnlarge(true)
        if (cursor >= count) {
            console.log('cursor >= cursor ');
            setCursor(0)
            setJump(true)
            return;
        }

        if (cursor <= -1) {
            console.log('cursor < = -1');



            setCursor(count - 1)

            setJump(true)

            return;
        }

    }


    return (
        <Wrapper>
            <Button onClick={() => changeCursor(-1)}  >Left</Button>
            <Button onClick={() => changeCursor(1)}  >Right</Button>
            <SlidesContainer

                initial="hidden"
                animate={"visible"}
                variants={variants}
            >
                <motion.div style={style} ref={ref}

                    onTransitionEnd={onTransitionEnd}>
                    {renderChildren()}
                </motion.div>
            </SlidesContainer>
      
        </Wrapper>
    )
}



export default Carousel

