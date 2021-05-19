import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Nav/Navbar'
import { Container } from './Styles'
import Hero from '../Hero/Hero'
import Gallery from './Gallery/Gallery'
import CreditCard from '../CreditCard/CreditCard'
import { motion } from 'framer-motion'
 


function Home(props) {
    return (
        <Container>
            {/* <Navbar /> */}
            <CreditCard />

        </Container>


    )
}


export default Home

