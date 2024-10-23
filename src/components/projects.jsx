import React from 'react'
import styled from 'styled-components'
import iptracker from '../assets/images/iptracker.png'; 
import agecalculator from '../assets/images/agecalculator.png'
import WhiteGitlogo from '../assets/WhiteGitLogo ';
import EyeLogo from '../assets/eye-regular';
import Codelogo from '../assets/codelogo'

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f1f1f1;
    margin-top: 160px;
    
    span{
        color: #01E3C5;
    }

    .container{
        width: 60%;
    }

    .ProjectTitle{
        width: 60%;
        display: flex;
        flex-direction: row;
        padding-bottom: 60px;
    }


    .ProjectTitle .title p{
        font-size: 45px;
        font-weight: bolder;
        margin: 7px;
    }

    @media (max-width:1024px){
    .container{
        width: 89%;
    }
    .ProjectTitle{
        width: 89%;
    }

    }

    @media (max-width:768px) {
    .ProjectTitle .title p{
        font-size: 35px;
    }
    }

    @media (max-width:425px){
        width: 98%;
        
        .ProjectTitle{
        width: 98%;
        padding-bottom: 0px;
    }

    .ProjectTitle .title p{
        font-size: 20px;
    }
    }
`

const ProjectCardStyles = styled.div`
    .container{
        display: flex;
        width: 100%;
        margin: 3% auto;
    }

    div img{
        width: 50%;
        border-radius: 10px;
        box-shadow: -5px 9px 20px -5px rgba(35, 34, 34, 0.5);
    }

    div .titlestyles{
        font-size: 24px;
        font-weight: bold;
        display: flex;
        margin: 0;
    }

    #resumen{
        font-size: 20px;
        color: #c7c5c5;
        margin: 0;
        margin-top:20px;
        margin-bottom: 20px;
    }

    #hover-effect{
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        width: 55%;
    }

    #hover-effect img{
        width: 100%;
        height: auto;
        transition: transform 0.5s ease;
        box-shadow: -8px 9px 16px -7px rgba(0,0,0,0.75);
    }

    #hover-effect:hover img{
        transform: scale(1.09);
    }

    #hover-effect .buttonDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(26, 25, 25, 0.6);
        backdrop-filter: blur(4px);
        width: 100%;
        position: absolute;
        top: -100%;
        left: 0;
        height: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        transition: border-radius 0.5s ease;
    }

    #hover-effect .buttonDiv a{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
        background-color: #202124;
        width: 150px;
        height: 70px;
        border-radius: 10px;
        text-decoration: none;
        color: #f1f1f1;
        font-weight: bold;
        gap: 7px;
    }

    #hover-effect:hover .buttonDiv{
        top: 0;
        border: 1px solid #f0efef;
    }

    div .title{
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        width: 45%;
        
    }

    div .title div{
        display: flex;
        align-items: start;
        align-content: start;
    }

    .container .title .techs p{
        font-weight: bolder;
        font-size: 24px;
    }


    .tech-tag {
        display: inline-block;
        background-color: #0a2b5a;
        color: #f1f1f1;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    @media (max-width:1440px){
        #resumen{
            font-size: 18px;
        }
    }

    @media (max-width:1024px){
        #resumen{
            font-size: 15px;
        }
        .tech-tag{
            font-size: 13px;
        }
    }

    @media (max-width:768px){

        div .titlestyles{
        font-size: 18px;
        }
        #resumen{
            font-size: 13px;
        }
        .tech-tag{
            font-size: 10px;
        }

    }

    @media (max-width:425px){
        .container{
            display: flex;
            flex-direction: column;
            margin: 9% auto;
        }
        div .titlestyles{
        font-size: 14px;
        }
        #resumen{
            font-size: 13px;
            margin-top: 7px;
            margin-bottom: 7px;
        }
        .tech-tag{
            font-size: 10px;
        }

        #hover-effect{
        width: 100%;
        }

        div .title{
        width: 100%;
        }
        
        div .title div{
        display: flex;
        align-items: center;
        align-content: start;
    }
    }
`

function ProjectCard({ image, title, Git , Preview, texto, logo: Logo, PreviewLogo: PreviewLogo, technologies, className }) {

    const formattedText = texto.split(/(Google Places API|IP|servers|quickly and easily.)/g).map((word, index) => {
        const isHighlighted = ['IP', 'Google Places API', 'servers', 'quickly and easily.'].includes(word);
        return (
            <span 
                key={index} 
                style={{ color: isHighlighted ? '#01E3C5' : '#c2c2c2' }}
            >
                {word}
            </span>
        );
    });

      const techList = technologies.split(' ').map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
    ));

    console.log(className)

    return (
    <ProjectCardStyles>
        <div className="container">
            <div id='hover-effect'>
                <img src={image} alt={title} />
                <div className='buttonDiv'>
                    <a href={Git}>
                        <Logo />
                        <p>Git</p>
                    </a>
                    <a href={Preview}>
                        <PreviewLogo />
                        <p>Preview</p>
                    </a>
                </div>
            </div>
            <div className='title' >
                <div>
                    <Codelogo/>
                    <p className='titlestyles'>{title}</p>
                </div>
                <p id='resumen'>{formattedText}</p>
                <div className="techs">
                    {techList}
                </div>
            </div>
        </div>
    </ProjectCardStyles>
    )
}



function Projects() {
  return (       
    <ProjectBox>
    <div className='ProjectTitle' id='Projects'>
        <div className='title'>
            <p>My Work<span>.</span></p>
        </div>
    </div>
        <div className='container'>
            <ProjectCard
                image={iptracker}
                title="Frontend Mentor - IP/Domain Tracker"
                texto="This tool allows you to get the user’s IP and locate the associated servers using the Google Places API. It's ideal for analyzing web traffic and enhancing security without compromising user privacy."
                Git="https://github.com/Nioqui/ip-address-tracker-master"
                Preview="#"
                logo={WhiteGitlogo}
                PreviewLogo={EyeLogo}
                technologies={'JAVASCRIPT '+'HTML '+'CSS '+'API'}
            />
            <ProjectCard
                image={agecalculator}
                title="Frontend Mentor - Age calculator"
                texto="This tool calculates the user's age by entering their birth date (day, month, and year). Simply provide the details and get your exact age quickly and easily."
                Git="https://github.com/Nioqui/AgeCalculator"
                Preview="#"
                logo={WhiteGitlogo}
                PreviewLogo={EyeLogo}
                technologies={'JAVASCRIPT '+'HTML '+'CSS'}
            />
        </div>
    </ProjectBox>
  )
}
export default Projects
