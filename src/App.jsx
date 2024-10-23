import { useState } from 'react'
import './GlobalStyles.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import SocialMedia from './components/SocialMedia';
import Contacto from './components/contacto';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <SocialMedia />
      <About />
      <Projects />
      <Contacto />
    </>
  )
}

export default App