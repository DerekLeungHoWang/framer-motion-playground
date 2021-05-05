import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { MyBackdrop, MyModal } from './Styles'
import Button from '@material-ui/core/Button';


const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const modal={
    hidden: { y: "-100vh",opacity:0 },
    visible: {y:"200px", opacity: 1, transition:{delay:0.5} },
}

const Modal = ({ showModal, setShowModal }) => {
    console.log(showModal);
    return (

        <AnimatePresence exitBeforeEnter>
            {showModal &&
                <MyBackdrop initial="hidden" animate="visible" variants={backdrop}>
                    <MyModal  variants={modal}>
                        <Button variant="contained">Default</Button>
                    </MyModal>
                </MyBackdrop>
            }

        </AnimatePresence>
    )
}

export default Modal
