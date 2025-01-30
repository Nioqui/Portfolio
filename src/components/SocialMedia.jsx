import React from 'react'
import styled from 'styled-components';
import WhiteGitlogo from '../assets/WhiteGitLogo ';
import LinkedinLogo from '../assets/LinkedinLogo';

const Socials = styled.nav`
    position: fixed;
    top: 50%;
    right: 0;
    margin: 10px;
    gap: 20px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px;

`

const StyledLogo = styled.div`
  width: 40px; 
  height: 40px;

  svg {
    fill: #dbd9d9;
    width: 100%;
    height: 100%;
  }

  svg:hover{
    fill: #01E3C5;
    transition: fill 0.5s ease 0s;
  }

  path {
      fill: inherit;
    }

    @media (max-width:768px){
      display: none;
    }
`

function SocialMedia() {
  return (
    <Socials>
      <a href="https://github.com/Nioqui" target='blank' className='social'>
        <StyledLogo>
          <WhiteGitlogo />
        </StyledLogo>
      </a>
      <a href="https://www.linkedin.com/in/nicolás-leal-273b57234/" target='blank' className='social'>
        <StyledLogo>
          <LinkedinLogo />
        </StyledLogo>
      </a>
    </Socials>
  );
}

export default SocialMedia;