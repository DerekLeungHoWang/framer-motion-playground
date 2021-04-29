
import { StylesProvider } from "@material-ui/styles";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Container, Sidebar, Content, CollapseBtn, StyledImage, List, ListItem } from "./Styles"

const sideBarVariants = {
    "hidden": {
        width: "250px",
        transition: {
            type: "spring",
            mass: .1,
            damping: 8
        }
    },
    "visible": {
        width: "800px",
        transition: {
            type: "spring",
            mass: .1,
            damping: 8,

        }
    }
}

const picVariants = {
    "hidden": {
        height: "100px",
        width: "100px",
        transition: {
            type: "spring",
            mass: .1,
            damping: 8
        }
    },
    "visible": {
        height: "200px",
        width: "200px",
        transition: {
            type: "spring",
            mass: .1,
            damping: 8
        }
    }
}

function AnimatedSideBar() {
    const [expand, setExpand] = useState(false);
    const [textAnimation, setTextAnimation] = useState(false);
    const button = useAnimation()
    const picture = useAnimation()
    const textA = useAnimation()

    useEffect(async () => {
        // await textA.start(expand ? textVariants.visible : textVariants.hidden)
        //  setTextAnimation(!textAnimation)
        console.log(expand);
        if (expand) {

            await picture.start(picVariants.visible)
            await button.start(sideBarVariants.visible)
        } else {
            await picture.start(picVariants.hidden)
            await button.start(sideBarVariants.hidden)
        }


        return () => {


        }

    }, [expand])
    const textVariants = {
        hidden: {
            color: "white",


        },
        visible: {
            color: "red",
            transition: {

                staggerChildren: 0.5,
                staggerDirection: -1
            },

        }
    }

    const item = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }
    return (
        <Container>
            <Sidebar
                initial={{
                    width: "250px"
                }}
                animate={button}
            >
                <span> Sidebar</span>
                <StyledImage initial={{ scale: 1 }} src="https://picsum.photos/200" alt="a" animate={picture} />
                <List
                    style={{ listStyleType: "none" }}
                    variants={textVariants}
                    initial="hidden"
                    animate={`${textAnimation ? "visible" : "hidden"}`}
                    // animate={textA}
                    onAnimationComplete={definition => {
                        console.log('Completed animating', definition)
                        if(definition==="visible"){
                            console.log('finished');
                            setExpand(!expand)
                        }
                    }}
                >

                    <ListItem variants={item}   >D</ListItem>
                    <ListItem variants={item}  >E</ListItem>
                    <ListItem variants={item}  >R</ListItem>
                    <ListItem variants={item}  >E</ListItem>
                    <ListItem variants={item}   >K</ListItem>
                </List>
                <CollapseBtn onClick={() => setTextAnimation(!textAnimation)}>Hello</CollapseBtn>




            </Sidebar>

            <Content>Content</Content>
        </Container>
    );
}

export default AnimatedSideBar
