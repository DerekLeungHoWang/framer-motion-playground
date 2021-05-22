import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";

import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { retrieveCursor, retrieveEnlarge } from './actions/CarouselAction'
import { left, right } from './Icons';


const Wrapper = styled.div`
    position:absolute;
    right:0%;
    bottom:15%;
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
    background-color:#e0dcdc;
    z-index:999;
    border-radius: 50%;
    cursor: pointer;
     
`;

const variants = {
    hidden: {},
    visible: {},
}


function Carousel(props) {
    const ref = useRef(null);
    const dispatch = useDispatch()
    const [cursor, setCursor] = useState(0)
    const [jump, setJump] = useState(false)
    const [animating, setAnimating] = useState(false)
    const [enlarge, setEnlarge] = useState(false)
    const controls = useAnimation();



    const { children } = props;
    const count = children.length;
    const style = {
        display: "flex",
        // transition: "",
        transform: `translateX(-${(count + cursor) * 250}px)`,

    };
    useEffect(() => {
      
        console.log('enlarge :  ', enlarge);
        console.log('jump :  ', jump);
        dispatch(retrieveEnlarge(enlarge))
       
        dispatch(retrieveCursor(cursor))
        if (jump) {

            ref.current.style.transition = "none";
            //transform   .5s  

            setJump(false)
            return


        }else{
            ref.current.style.transition = " transform   .5s ";
        }

       

        return () => {

            setJump(false)


        }



    }, [cursor, jump, enlarge])



    const renderChildren = () => {

        const { children } = props;
        let mychildren = [].concat(children, children, children);
        return mychildren.map((child, index) => {
            //
            return React.cloneElement(child, { key: index, cursor, index, controls, enlarge });
        });

    }


    const changeCursor = amount => {
        setEnlarge(false)


        setCursor(cursor + amount)

    };

    const onTransitionEnd = async () => {


        setEnlarge(true)

        if (cursor >= count) {

            setCursor(0)
            setJump(true)
            return;
        }

        if (cursor <= -1) {




            setCursor(count - 1)

            setJump(true)

            return;
        }

    }


    return (
        <Wrapper>
            <Button onClick={() => changeCursor(-1)}  >{left}</Button>
            <Button onClick={() => changeCursor(1)}  >{right}</Button>

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

