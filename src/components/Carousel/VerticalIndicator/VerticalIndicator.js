
import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux';
import classes from './VerticalIndicator.module.css'

const circleVariants = {
    hidden: {

        scale: 1,
        transition: { duration: 1 }
    },
    visible: {
        scale: 2,
        transition: { duration: .5 }
    },
    exit: {

    }

}

export default function VerticalIndicator() {
    const cursor = useSelector(state => state.CarouselReducer.cursor);
    const enlarge = useSelector(state => state.CarouselReducer.enlarge);



    return (

        <motion.div className={classes['innerWrapper']}>
            <motion.div className={classes.line}  ></motion.div>
            <motion.ul >
                {[...Array(5)].map((number, index) => {
                    return <motion.li
                        className={classes['circle']}
                        key={index}
                        initial="hidden"
                        animate={index === cursor ? "visible" : "hidden"}
                        variants={circleVariants}
                    >
                        
                        <p>
                            {index + 1} 
                        </p>
                    </motion.li>;
                
                })}
            </motion.ul>
        </motion.div>

    )
}
// <motion.li><motion.span className={classes['timeline-circle']}>4</motion.span></motion.li>