import { AnimatePresence, useCycle } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { MotionImage, Section, MotionContainer, StyledIcon, MySlider } from './Styles'

import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


import Icon from '@material-ui/core/Icon';

export const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://images.unsplash.com/photo-1540829917886-91ab031b1764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
    "https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"


];

const testVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition:{duration:1.5, ease:"easeInOut"} },
    exit: { opacity: 0, transition:{duration:1.5, ease:"easeInOut"} }
}
function Hero() {
    const length = images.length;
    const [current, setCurrent] = useState(2)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSldie()
    //     }, 3000);

    //     return () => {
    //         clearInterval(interval)

    //     }
    // })

    const nextSldie = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return (

        <MotionContainer>

            <AnimatePresence exitBeforeEnter   >
                <StyledIcon icon={faArrowCircleLeft}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "32px",
                        fontSize: "3rem",
                        zIndex: "10",
                        cursor: "pointer",
                        
                    }}
                    onClick={prevSlide}
                />
                {images.map((image, index) => {
                    return (



                        index == current &&
                        <MotionImage
                            key={index}
                            src={image}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={testVariants}
                        />





                    )
                })}
                <StyledIcon icon={faArrowCircleRight} onClick={nextSldie}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "32px",
                        fontSize: "3rem",
                        zIndex: "10",
                        cursor: "pointer",
                    }}

                />
            </AnimatePresence>



        </MotionContainer>



    )
}

export default Hero
