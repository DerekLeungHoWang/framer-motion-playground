import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, ImageContainer, MotionImage } from './Styles'

import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import image3 from '../../../Assets/Images/image3.jpg'
import image4 from '../../../Assets/Images/image4.jpg'
import image5 from '../../../Assets/Images/image5.jpg'
import image6 from '../../../Assets/Images/image6.jpg'
import { motion } from 'framer-motion'
import Modal from './Modal'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2

    }
  }
}
const images = [image1, image2, image3, image4, image5, image6]

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: .5 } }
}
function Images(props) {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
      >
        <ImageContainer variants={container}
          initial="hidden"
          animate="show">
          {images.map((image, index) => {
            return (<MotionImage key={image} src={image} alt="image" variants={item} onClick={handleClick} />)
          })}


        </ImageContainer>
      </motion.ul>

    </>

  )
}


export default Images
