import React from 'react'
import styled from 'styled-components'

const HeroContent = styled.div`
    height: 100vh;
    color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;

    main{
      width: 55%;
      text-align: center;
    }

    .top-hero{
      opacity: 0;
      animation: fadeInUp 1s ease-out forwards;
    }
    main div h1{
      font-size: 90px;
    }

    main div span, main div span{
      color: #01E3C5;
    }
    
    main div p{
      margin: 0;
      font-size: 30px;
    }

    main div h1{
      margin: 0;
    }

    .projects-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .projects{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(26, 25, 25, 0.6);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #747373;
        border-radius: 10px;
        width: 220px;
        height: 60px;
        margin: 20px;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
    }

    a{
        text-decoration: none;
        color: #f1f1f1;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        
    }

    .projects:hover{
      background:  #01E3C5;
      font-weight: bolder;
      color: white;
    }

    @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px); /* Comienza desplazado hacia abajo */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* Se mueve hacia su posición original */
      }
}

    @media (max-width: 1180px){
        main div h1{
        font-size: 70px;
      }
    }

    @media (max-width:800px){
        main div h1{
        font-size: 50px;
      }
    }

    
    @media (max-width:800px){
        main{
        width: 90%;
        text-align: center;
      }


        main div h1{
        font-size: 60px
      }

        main div p{
        margin: 0;
        font-size: 22px;
      }
    }

    @media (max-width:425px){

      main{
        width: 100%;
      }

      main div h1{
        font-size: 60px;
      }

      main div p{
      margin: 0;
      font-size: 16px;
    }
    }

    @media (max-width:375px){
      main div h1{
        font-size: 55px;
      }
      main div p{
      font-size: 15px;
    }

    .projects{
      width: 190px;
    }
    }

    @media (max-width:320px){
      main div h1{
        font-size: 45px;
      }
      main div p{
      font-size: 14px;
    }

    .projects{
      width: 185px;
    }
    }

`

function Hero() {
  return (
    <HeroContent>
        <main>
            <div className='top-hero' id='Hero'>
                <h1>Transforming your ideas into <span>IT Solutions</span></h1>
                <p> Hey! I'm Nicolás, a <span>Fullstack developer</span> based in <span>Argentina</span></p>
            </div>
            <div className='projects-container'>
              <div className='projects'>
                <a href="#Projects">See my projects <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="23px" height="23px" fill="#f1f1f1"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg> </a>
              </div>
            </div>
        </main>
    </HeroContent>
  )
}

export default Hero