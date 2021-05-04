import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, MotionImage } from './Styles'

import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import image3 from '../../../Assets/Images/image3.jpg'
import image4 from '../../../Assets/Images/image4.jpg'
import image5 from '../../../Assets/Images/image5.jpg'
import image6 from '../../../Assets/Images/image6.jpg'
import Images from './Images'

function Gallery(props) {
    return (
        <Container>
            <Header>PICTURES</Header>
            <Images />
        </Container>
    )
}


export default Gallery

