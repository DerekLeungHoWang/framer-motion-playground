import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { MyBackdrop, MyModal } from './Styles'
import Button from '@material-ui/core/Button';


const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit:{
        opacity:0
    }
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "200px", opacity: 1,  transition: {
        staggerChildren:  .1
      } },
    exit:{
        y:"-100vh",transition:{mass:0.1}
    }
}

const Modal = ({ showModal, setShowModal }) => {
    
    return (

        <AnimatePresence exitBeforeEnter>
            {showModal &&
                <MyBackdrop initial="hidden" animate="visible" exit="exit" variants={backdrop}>
                    <MyModal variants={modal}>
                    <Button variants={modal}   component={motion.div} variant="contained" onClick={() => setShowModal(!showModal)} >Close</Button>
                    <Button variants={modal}   component={motion.div} variant="contained" onClick={() => setShowModal(!showModal)} >Close</Button>
                    <Button variants={modal}   component={motion.div} variant="contained" onClick={() => setShowModal(!showModal)} >Close</Button>
                    <Button variants={modal}   component={motion.div} variant="contained" onClick={() => setShowModal(!showModal)} >Close</Button>
                    </MyModal>
                </MyBackdrop>
            }

        </AnimatePresence>
    )
}

export default Modal
