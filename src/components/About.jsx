import React from 'react'
import styled from 'styled-components';
import about from '../assets/images/about.png';

const AboutSection = styled.section`
    width: 100%;
    height: 42vh;
    display: flex;
    justify-content: center;
    align-items: center;

  .container{
    width: 60%;
    display: flex;

  }

    img{
      width: 280px;
      height: auto;
    }

    .text{
      width: 60%;
      margin: 10px;
    }

    p , span, h2{
      color:#f1f1f1;
    }
`

function About() {
  return (
    <AboutSection>
      <div className='container'>
        <div className='text'>
            <h2>So, who am I?</h2>
            <span>Fullstack dev</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae dolor doloribus cumque eos, sunt velit vitae facilis adipisci expedita a possimus! Et doloremque ab fugit eligendi placeat nisi neque!</p>
        </div>
          <div className='img'>
            <img src={about}/>
          </div>
      </div>
    </AboutSection>
  )
}

export default About