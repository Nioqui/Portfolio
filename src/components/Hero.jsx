import React from 'react'
import styled from 'styled-components'

const HeroContent = styled.div`
    height: 95vh;
    color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;

    main{
      width: 55%;
      text-align: center;
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
`

function Hero() {
  return (
    <HeroContent>
        <main>
            <div className='top-hero'>
                <h1>Transforming your ideas into <span>IT Solutions</span></h1>
                <p> Hey! I'm Nicolás, a <span>Fullstack developer</span> based in <span>Argentina</span></p>
            </div>
            <div className='projects-container'>
              <div className='projects'>
                <a href="#">See my projects <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="23px" height="23px" fill="#f1f1f1"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg> </a>
              </div>
            </div>
        </main>
    </HeroContent>
  )
}

export default Hero