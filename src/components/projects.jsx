import React from 'react'
import styled from 'styled-components'
import iptracker from '../assets/images/iptracker.jpg'; 
import ReactLogo from '../assets/ReactLogo';

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
`
const ProjectCardStyles = styled.div`
    display: flex;
    gap: 1em;
    
    img{
        width: 530px;
        border-radius: 15px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    .logodiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #f1f1f1;
        width: 80px;
        height: 30px;
        border-radius: 7px;
    }

    .logodiv p{
        color: #000000;
    }

    .titlestyles{
        font-size: 40px;
        font-weight: bolder;
    }
`

function ProjectCard({ image, title, logo: Logo, texto }) {
    return (
    <ProjectCardStyles>
            <img src={image}/>
            <div>
                <p className='titlestyles'>{title}</p>
                <div className='logodiv'>
                    <Logo />
                    <p>react</p>
                </div>
                <p className='resumen'>{texto}</p>
            </div>
    </ProjectCardStyles>
    )
}

function Projects() {
  return (
    <ProjectBox>
        <div className='ProjectTitle'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="34px" height="34px" fill="#f1f1f1"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
            <p>Proyectos</p>
        </div>
        <ProjectCard
        
            image={iptracker}
            title="Frontend Mentor - IP/Domain Tracker"
            logo={ReactLogo}
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

        />
    </ProjectBox>  
  )
}

export default Projects