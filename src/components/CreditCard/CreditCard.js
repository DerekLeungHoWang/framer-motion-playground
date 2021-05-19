import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, ChipLogo, VisaLogo, CardText, Earth } from './Styles'
import { motion } from 'framer-motion'
import { ReactComponent as earth } from '../../Assets/Images/earth.svg'


const container = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        duration:.5
  
      }
    }
  }
function CreditCard(props) {


    return (
        <Container variants={container}
        initial="hidden"
        animate="show" style={{ backgroundImage: `url(${earth})` }}  >
            <ChipLogo />
            <CardText>0000</CardText>
            <Earth />
            <VisaLogo />


        </Container>

    )
}


export default CreditCard
