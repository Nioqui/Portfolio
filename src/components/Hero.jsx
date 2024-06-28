import React from 'react'
import styled from 'styled-components'
import Gitlogo from '../assets/gitLogo'
import LinkedinLogo from '../assets/LinkedinLogo'

const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;

    main{
        width: 55%;
        flex-direction: column;
        margin: auto;
    }
    
    p, h1{
        color: #f1f1f1;
    }

    p{
        font-size: 32px;
    }

    .pill-container{
        display: flex;
        flex-direction: row;
        gap:0.8em;
    }
`

const Pill = styled.div`
  a{
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #f1f1f1;
    width: auto;
    padding: 0px 4px 0px 4px;
    height: 40px;
    border-radius: 11px;
    text-decoration: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  }

  p{
    margin: 0;
    font-size: 16px;
    color: #0A0A0A;
  }
`

function Smpills({ logo: Logo, name }) {
  return (
    <Pill>
      <a href="#">
        <Logo />
        <p>{name}</p>
      </a>
    </Pill>
  );
}



function Hero() {
  return (
    <HeroContent>
        <main>
            <div className='top-hero'>
                <h1>Hey, i'm Nicolás</h1>
            </div>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis nesciunt numquam cumque facere, vero commodi iure modi eius neque laudantium vitae</p>
            <div className="pill-container">
                <Smpills logo={Gitlogo} name="github"/>
                <Smpills logo={LinkedinLogo} name="Linkedin"/>
            </div>
        </main>
    </HeroContent>
  )
}

export default Hero