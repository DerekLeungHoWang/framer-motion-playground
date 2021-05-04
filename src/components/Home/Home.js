import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Nav/Navbar'
import { Section } from './Styles'
import Hero from '../Hero/Hero'
import Gallery from './Gallery/Gallery'

function Home(props) {
    return (
        <>
            <Navbar />
            <Gallery />
        </>


    )
}


export default Home

