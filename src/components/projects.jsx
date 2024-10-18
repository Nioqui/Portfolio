import React from 'react'
import styled from 'styled-components'
import iptracker from '../assets/images/iptracker.jpg'; 
import agecalculator from '../assets/images/agecalculator.jpg'
import WhiteGitlogo from '../assets/WhiteGitLogo ';
import EyeLogo from '../assets/eye-regular';

const ProjectBox = styled.div`
    width: 60%;
    margin: 0 auto;
    height: 60vh;
    
    .ProjectTitle{
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    
    p{
        color: #f1f1f1;
    }

    .title{
        font-size: 36px;
    }
`
const ProjectCardStyles = styled.div`
    display: flex;
    margin: 20px;
    gap: 1.4em;


    img{
        width: 500px;
        border-radius: 10px;
    }

    div .titlestyles{
        font-size: 32px;
        font-weight: bolder;

    }

    div .resumen{
        font-size: 24px;
    }

    div .GitSection, div .PreviewSection{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 40px;
        border-radius: 10px;
        background-color: #686767;
        gap: 0.4em;
        text-decoration: none;
    }

    div .GitSection{
        width: 70px;
    }

    div .GitSection  p, div .PreviewSection p{
        color: #f1f1f1;
    }

    .buttonDiv{
        height: 140px;
        display: flex;
        width: 190px;
        justify-content: space-between;
        align-items: center;
    }

`

function ProjectCard({ image, title, Git , Preview, texto, logo: Logo, PreviewLogo: PreviewLogo }) {
    return (
    <ProjectCardStyles>
            <img src={image}/>
            <div>
            <p className='titlestyles'>{title}</p>
                <p className='resumen'>{texto}</p>
                <div className='buttonDiv'>
                    <a  href={Git} className='GitSection'>
                        <Logo />
                        <p>Git</p>
                    </a>
                    <a href={Preview} className='PreviewSection'>
                        <PreviewLogo />
                        <p>Preview</p>
                    </a>
                </div>
            </div>
    </ProjectCardStyles>
    )
}

function Projects() {
  return (
    <ProjectBox>
        <div className='ProjectTitle'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="34px" height="34px" fill="#f1f1f1"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
            <p className='title'>Proyectos</p>
        </div>
        <ProjectCard
        
            image={iptracker}
            title="Frontend Mentor - IP/Domain Tracker"
            texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tempora quia, iusto id labore, quibusdam."
            Git="https://github.com/Nioqui/ip-address-tracker-master"
            Preview="#"
            logo={WhiteGitlogo}
            PreviewLogo={EyeLogo}
        />
            <ProjectCard
        
            image={agecalculator}
            title="Frontend Mentor - Age calculator"
            texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tempora quia, iusto id labore, quibusdam."
            Git="https://github.com/Nioqui/AgeCalculator"
            Preview="#"
            logo={WhiteGitlogo}
            PreviewLogo={EyeLogo}
        />
        
    </ProjectBox>  
  )
}

export default Projects