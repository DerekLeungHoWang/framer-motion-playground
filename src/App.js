import { motion } from "framer-motion";
import React from "react";

import { createGlobalStyle, default as styled } from "styled-components";
import Carousel from "./components/Carousel/Carousel";
import Slide from "./components/Carousel/Slide";

const Wrapper = styled.div`
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/26/200/300",
  "https://picsum.photos/id/32/200/300",
  "https://picsum.photos/id/42/200/300",
  "https://picsum.photos/id/52/200/300",
  "https://picsum.photos/id/65/200/300",
  "https://picsum.photos/id/71/200/300",
  "https://picsum.photos/id/82/200/300",
  "https://picsum.photos/id/93/200/300",
  "https://picsum.photos/id/103/200/300",
]

function App() {
  return (
    <Wrapper>
      <Global />
      <Carousel>
        {images.map((image, index) => {

          return <Slide key={index + 1} image={image}  />

            {/* <motion.img src={image} /> */}
          // </Slide>;
        })}
      </Carousel>
    </Wrapper>
  );
}

export default App;
