import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { MyBackdrop } from './Styles'
 


const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },

}

const Modal = ({ showModal, setShowModal }) => {
    console.log(showModal);
    return (

        <AnimatePresence exitBeforeEnter>
            {showModal &&
                <MyBackdrop initial="hidden" animate="visible" variants={backdrop}/>
            }

        </AnimatePresence>
    )
}

export default Modal
