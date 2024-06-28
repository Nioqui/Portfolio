import React from 'react'
import styled from 'styled-components';

const AboutSection = styled.section`
    width: 100%;
    height: 50vh;
    background-color: red;
`

function About() {
  return (
    <AboutSection>
        <h2>So, who am I?</h2>
        <span>Fullstack dev</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae dolor doloribus cumque eos, sunt velit vitae facilis adipisci expedita a possimus! Et doloremque ab fugit eligendi placeat nisi neque!</p>
    </AboutSection>
  )
}

export default About