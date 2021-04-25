
import { StylesProvider } from "@material-ui/styles";
import { useAnimation } from "framer-motion";
import React, { useState } from "react";

import { Container, Sidebar, Content, CollapseBtn, StyledImage } from "./Styles"

const sideBarVariants = {
    "hidden": {
        width: "250px",
        transition: { 
            type:"spring",
            mass:.1,
            damping: 8
         }
    },
    "visible": {
        width: "800px",
        transition: {
            type:"spring",
            mass:.1,
            damping: 8,
            when: "afterChildren"
        }
    }
}

const picVariants = {
    "hidden": {
        height: "100px",
        width: "100px",
        transition: {
            type:"spring",
            mass:.1,
            damping: 8
        }
    },
    "visible": {
        height: "200px",
        width: "200px",
        transition: {
            type:"spring",
            mass:.1,
            damping: 8
        }
    }
}

function AnimatedSideBar() {
    const [expand, setExpand] = useState(false);
    const button = useAnimation()
    const picture = useAnimation()

    const animate = async () => {
        setExpand(!expand)
        console.log(expand);
  
        await picture.start({
            rotate:[0,360,-360],
            transition:{duration:5}
        })
        await picture.start(expand ? picVariants.hidden : picVariants.visible)
        await button.start(expand ? sideBarVariants.hidden : sideBarVariants.visible)
      

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
                <StyledImage initial={{scale:1}} src="https://picsum.photos/200" alt="a" animate={picture} />

                <CollapseBtn onClick={() => animate()}>Hello</CollapseBtn>




            </Sidebar>

            <Content>Content</Content>
        </Container>
    );
}

export default AnimatedSideBar
