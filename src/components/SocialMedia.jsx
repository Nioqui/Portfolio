import React from 'react'
import styled from 'styled-components';
import WhiteGitlogo from '../assets/WhiteGitLogo ';
import LinkedinLogo from '../assets/LinkedinLogo';

const Socials = styled.nav`
    
`



function SocialMedia(Git, Linkedin) {
  return (
    <Socials>
        <Git
           logo={WhiteGitlogo} 
        />

        <Linkedin
            logo={LinkedinLogo} 
        />
    </Socials>
  )
}

export default SocialMedia