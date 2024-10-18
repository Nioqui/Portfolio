import React from 'react'
import styled from 'styled-components';


window.addEventListener('scroll', function() {
  let header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

  container{
    position: absolute;
    top: 0;
    height: 90px;
    width: 30%;
    margin-top: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  container.scrolled {
    position: fixed;
    background-color: rgba(26, 25, 25, 0.6);
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #747373;
  }

 a{
    margin:20px ;
    font-size: 18px;
    color:#f1f1f1;
    text-decoration: none;
  }

  a:hover{
    color:  #01E3C5;
    transition: color 0.5s ease 0s;
  }
  `

function Header() {
  return (
    <NavBar>
      <container id="header">
        <nav>
            <a href="#" className='text'>home</a>
            <a href="#" className='text'>about me</a>
            <a href="#" className='text'>projects</a>
            <a href="#" className='text'>contact</a>
        </nav>
        </container>
    </NavBar>
  )
}


export default Header

