import { motion } from "framer-motion";
import React from "react";

import { createGlobalStyle, default as styled } from "styled-components";
import Carousel from "./components/Carousel/Carousel";
import Slide from "./components/Carousel/Slide";
import image1 from './Assets/Images/image1.png'
import image2 from './Assets/Images/image2.jpg'
import image3 from './Assets/Images/image3.jpg'
import image4 from './Assets/Images/image4.jpg'
import image5 from './Assets/Images/image5.png'
import { useSelector } from "react-redux";
import CharacterName from "./components/Carousel/CharacterName";
import VerticalIndicator from "./components/Carousel/VerticalIndicator/VerticalIndicator";

const Wrapper = styled.div`
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
  background-size: 100%;
  background-image:${props => `url(${props.imageUrl})`};
  transition: background-image 1s;
   
`;



const Global = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;

const images = [
  "https://i.pinimg.com/474x/5c/ed/14/5ced143d3fe86e0691b23c073e05722c.jpg",
  "https://i.pinimg.com/474x/ab/68/46/ab684606fbe964bf0e8cc7e8e9aec42f.jpg",
  "https://i.pinimg.com/474x/0e/1c/c0/0e1cc0352b248ec2bb72e9a42aea7f3a.jpg",
  "https://i.pinimg.com/474x/46/c4/4e/46c44ed67d3ee9935755dfafc76c0800.jpg",
  "https://i.pinimg.com/474x/ca/e4/5a/cae45aa045e5b82b0fb3091a15f96fe1.jpg",

]

const backgroundImages = [
  image1, image2, image3, image4, image5
]


function App() {
  const cursor = useSelector(state => state.CarouselReducer.cursor);
  console.log("cursor: ", cursor);
  return (
    <Wrapper imageUrl={
      backgroundImages[
      cursor === -1 ? backgroundImages.length - 1
        : cursor === 5 ? 0
          : cursor]} >
      <Global />
      <VerticalIndicator
     
     />
      <CharacterName cursor={cursor} />
     
      <Carousel>
        {images.map((image, index) => {
          return <Slide key={index + 1} image={image} />
        })}
      </Carousel>

    </Wrapper>
  );
}

export default App;
