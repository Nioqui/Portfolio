import styled from "styled-components";
import React from 'react'
import Arrowu from '../assets/arrow-up'
import Arrowup from "../assets/arrow-up";

const ContactStyles = styled.div`
    color: #f1f1f1;
    display: flex;
    justify-content: center;

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 60%;
        height: 55vh;
    }

    .container  h1{
        font-size: 80px;
        font-weight: bolder;
        margin: 0;
    }

    .container span{
        color: #01E3C5;
    }

    .container p{
        font-size: 24px;
        text-align: center;
    }

    .button a{
        background-color: rgba(26, 25, 25, 0.6);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #747373;
        border-radius: 10px;
        width: 220px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        text-decoration: none;
        color: #f1f1f1;
    }

    .button a:hover{
        background:  #01E3C5;
        font-weight: bolder;
        color: white;
    }

    @media (max-width:768px){
        .container{
        width: 89%;
    }
    
    @media (max-width:425px){
        .container  h1{
        font-size: 30px;
    }
    }
    }

`

function Contacto() {
  return (
    <ContactStyles>
        <div className="container" id="Contact">
            <h1>GET IN <span>TOUCH</span></h1>
            <p>We'll work together to develop a <span>custom software</span> solution, combining your <span>ideas</span> with my expertise to take your project to the <span>next level.</span></p>
            <div className="button">
                <a href="mailto:Nicolas.l-19@outlook.com?">
                    Let's talk  
                    <Arrowup/>
                </a>
            </div>
        </div>
    </ContactStyles>
  )
}

export default Contacto