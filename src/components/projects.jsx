import React from 'react'
import styled from 'styled-components'
import iptracker from '../assets/images/iptracker.png'; 
import agecalculator from '../assets/images/agecalculator.png'
import WhiteGitlogo from '../assets/WhiteGitLogo ';
import EyeLogo from '../assets/eye-regular';

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f1f1f1;
    
    span{
        color: #01E3C5;
    }

    .container{
        width: 57%;
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
`

const ProjectCardStyles = styled.div`
    padding: 30px;


    div img{
        width: 100%;
        border-radius: 10px;
        box-shadow: -5px 9px 20px -5px rgba(35, 34, 34, 0.5);
    }

    div .titlestyles{
        font-size: 32px;
        font-weight: bold;
        display: flex;
    }

    #resumen{
        font-size: 24px;
        font-style: italic;
        color: #f0efef;
        margin: 0;
        margin-bottom: 20px;
    }

    #hover-effect{
        position: relative;
        overflow: hidden;
        border-radius: 10px;
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
    }

    #hover-effect:hover .buttonDiv{
        top: 0;
        border: 1px solid #f0efef;
    }

    div .title{
        display: flex;
        align-items: center;
    }

`

function ProjectCard({ image, title, Git , Preview, texto, logo: Logo, PreviewLogo: PreviewLogo }) {

    const formattedText = texto.split(/(Google Places API|IP|servers|quickly and easily.)/g).map((word, index) => {
        const isHighlighted = ['IP', 'Google Places API', 'servers', 'quickly and easily.'].includes(word);
        return (
            <span 
                key={index} 
                style={{ color: isHighlighted ? '#01E3C5' : '#f0efef' }}
            >
                {word}
            </span>
        );
    });


    return (
    <ProjectCardStyles>
        <div>
            <div className='title' >
            <p className='titlestyles'>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#01E3C5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 8l-4 4l4 4" />
                <path d="M17 8l4 4l-4 4" />
                <path d="M14 4l-4 16" />
            </svg>
            </div>
            <p id='resumen'>{formattedText}</p>
            <div className='techs'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="28px" width="28px">
                    <path fill="#f06529" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28px" width="28px">
                    <path fill="#74C0FC" d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="28px" width="28px">
                    <path fill="#FFD43B" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-api" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 13h5" />
                    <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                    <path d="M20 8v8" />
                    <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                </svg>
            </div>
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
        </div>
    </ProjectCardStyles>
    )
}

function Projects() {
  return (       
    <ProjectBox>
    <div className='ProjectTitle'>
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
            />
            <ProjectCard
                image={agecalculator}
                title="Frontend Mentor - Age calculator"
                texto="This tool calculates the user's age by entering their birth date (day, month, and year). Simply provide the details and get your exact age quickly and easily."
                Git="https://github.com/Nioqui/AgeCalculator"
                Preview="#"
                logo={WhiteGitlogo}
                PreviewLogo={EyeLogo}
            />
        </div>
    </ProjectBox>
  )
}

export default Projects
