import React from 'react'
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

  container{
    width: 60%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: center;

  }

 a{
    margin:20px ;
    font-size: 18px;
    color:#f1f1f1;
    text-decoration: none;
  }

  a:hover{
    opacity: 0.4;
    transition: opacity 0.2s ease 0s;
  }

  svg:hover{
    opacity: 0.4;
    transition: opacity 0.2s ease 0s;
  }
  `

function Header() {
  return (
    <NavBar>
      <container>
        <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="34px" height="34px" fill="#f1f1f1"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
        </div>
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

