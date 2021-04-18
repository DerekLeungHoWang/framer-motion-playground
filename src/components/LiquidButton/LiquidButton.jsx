import React, { useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  padding:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  height:100vh;
`;


const StyledLiquidButton = styled.button`
     flex:1;
     padding:25px 50px;
     margin:25px;
     border-radius:999px;
     border:5px solid #284cff;
     font-family:'VT323',monospace;
     font-size:25;
    text-shadow:0 3px 5p rgba(0,0,0,0l.25);
    color:#fff;
    cursor: pointer;
    user-select:none;
    background: transparent;
    background-repeat: repeat-x;
    background-position:0 - 100%;
    transition: 1.5s ease;
    &:hover{
        background-position:500% 100%;
    }
`

function LiquidButton(props) {

    const [open, setOpen] = useState(false)
    return (
        <Wrapper>

 
            <StyledLiquidButton />

        </Wrapper>
    )
}



export default LiquidButton

