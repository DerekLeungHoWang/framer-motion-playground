import React from 'react'
import styled from 'styled-components'
import { motion, transform, useCycle } from "framer-motion";


const Container = styled(motion.div)`
  
    position:relative;
    width:1100px;
    display: flex;
    justify-content: center;
    align-content:center;
    flex-wrap:wrap;
    padding:30px;

    .card{
    position:relative;
      max-width:300px;
      height:215px;
      background:#fff;
      margin:30px 10px;
      padding:20px 15px;
      display:flex;
      flex-direction:column;
      box-shadow:0 5px 202px rgba(0,0,0,0.5);
      transition:0.3s ease-in-out;
        &:hover{
            height:420px;
        }
        &:hover .content{
            opacity:1;
            visibility: visible;
            margin-top:-40px;
            transition-delay:0.3;
        }

    }
    .imgBx{
        position:relative;
        width:260px;
        height:260px;
        top:-60px;
        left:40px;
        z-index:1;
        box-shadow:0 5px 20px rgba(0,0,0,0.2);

    }

    img{
        max-width:100%;
        border-radius:4px;

    }
    .content{
        position: relative;
        margin-top:-140px;
        padding:10px 15px;
        text-align:center;
        color:#111;
        visibility:hidden;
        opacity:0;
        transition: 0.3 ease-in-out;

    }

    



`


function ExpandableCard() {
    // const container = {
    //     hidden: {

    //         opacity: 0
    //     },
    //     show: {

    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.2,

    //         }
    //     }
    // }



    return (
        <Container  >
            <div className="card" >
                <div className="imgBx" >
                    <img src="https://picsum.photos/200"></img>
                </div>
                <div className="content" >
                    <h2>Card One</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>



        </Container>
    )
}

export default ExpandableCard
