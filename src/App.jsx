import { useState } from 'react'
import './GlobalStyles.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default App
