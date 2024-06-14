import React from 'react'
import styled from 'styled-components'

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
`


function Hero() {
  return (
    <HeroContent>
        <main>
            <div className='top-hero'>
                <h1>Hey, i'm Nicolás</h1>
            </div>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis nesciunt numquam cumque facere, vero commodi iure modi eius neque laudantium vitae</p>
        </main>
    </HeroContent>
  )
}

export default Hero