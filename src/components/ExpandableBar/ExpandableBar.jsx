import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence,useAnimation } from "framer-motion";
import styles from './ExpandableBar.module.css';

const container = {
    hidden: { y: "-100",
    opacity:0 ,  
   // backgroundColor:["#60F","#09f"],
    transition: {
        duration: 2
      }},
    show: {
      y: 0,
      opacity:1,
      backgroundColor:["#47c77d","#6d96be"],
      transition: {
        duration: 2
      }
    }
  }

const Accordion = ({ i, expanded, setExpanded }) => {
    const animation = useAnimation();
    const [isOpen , setIsOpen] = useState(false)
  
    async function sequence() {
        await setIsOpen(!isOpen)
        // await animation.start({ rotate: -90 });
        // await animation.start({ scale: 1.5 });
        // await animation.start({ rotate: 0 });
        //animation.start({ scale: 1 });
      }
    // By using `AnimatePresence` to mount and unmount the contents, we can animate
    // them in and out while also only rendering the contents of open accordions
    return (
        <>
            <motion.header
                
                onClick={sequence}
                animate={animation}
                className={styles.header}
            />
            <AnimatePresence initial={false} exitBeforeEnter>
               
                    <motion.section
                        key="content"
                   
                        variants={container}
                        initial="hidden"
                        animate={isOpen? "show":"hidden"}
                    
                    >
                        <motion.div>Hello</motion.div>
                        <motion.div>Hello</motion.div>
                        <motion.div>Hello</motion.div>
                        <motion.div>Hello</motion.div>
                        <motion.div>Hello</motion.div>
                        <motion.div>Hello</motion.div>


                    </motion.section>
               
            </AnimatePresence>
        </>
    );
};

const ExpandableBar = () => {


    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState(false);
   

    return accordionIds.map((i) => (
        <Accordion i={i}
         expanded={expanded}
          setExpanded={setExpanded}
       
          />
    ));
};

const accordionIds = [0];

export default ExpandableBar

    // initial="collapsed"
                        // animate="open"
                        // exit="collapsed"
                        // variants={{
                        //     open: { opacity: 1, height: "auto", backgroundColor: "red",    transition: {
                        //         staggerChildren: 1.5
                        //       } },
                        //     collapsed: { opacity: 0, height: 0 }
                        // }}
                        // transition={{
                          
                        //     duration: 0.8,
                        //     ease: [0.04, 0.62, 0.23, 0.98],
                           
                        // }}