import React from "react";
import { Link } from "react-router-dom";
import './about.css';
import Emoji from '../assets/cool-emoji.png';
import Kremowka from '../assets/kremowka.jpg';

function About(){

    const styleYT = {
        backgroundColor: '#c4302b',
    };
    const styleTwitter = {
        backgroundColor: '#1da1f2',
    };
    const styleFB = {
        backgroundColor: '#4267b2',
    };
    const styleGitHub = {
        backgroundColor: '#1b1f24',
    };

    return(
        <>
            <div className='container'>
                <div className='image'>
                    <i className='icon-emo-laugh'></i>
                </div>
                <div className='text'>
                    <h1>Witaj na Skibidi Hobby!</h1>
                    <p>Na naszej stronie znajdziesz dla siebie nowe hobby!</p>
                    <ul>
                        <li>
                            <Link to='/page1'>Rozwiąż quiz</Link>
                        </li>
                        <li>
                            <Link to='/page1'>Wyszukaj hobby</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container'>
                <div className='text1'>
                    <h1>Kim jesteśmy?</h1>
                    <p>Autorzy projektu:</p>
                    <ul>
                        <li>Jakub Mazurowski - frontend</li>
                        <li>Daniel Moskalewicz - backend</li>
                        <li>Maksymilian Kłys - frontend</li>
                        <li>Kiryl Rutta - baza danych</li>
                    </ul>
                </div>
                <div className='image1'>
                    <i className='icon-emo-beer'></i>
                </div>
            </div>

            <div className='container'>
                    <div style={styleYT} className='socialMedia'>
                        <a className='social' href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                            <i className='icon-youtube-play'></i>
                        </a>
                    </div>
                <div style={styleTwitter} className='socialMedia'>
                    <a className='social' href='https://x.com/?lang=pl' target="_blank" rel="noopener noreferrer">
                        <i className='icon-twitter-bird'></i>
                    </a>
                </div>
                <div style={styleFB} className='socialMedia'>
                    <a className='social' href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                        <i className='icon-facebook'></i>
                    </a>
                </div>
                <div style={styleGitHub} className='socialMedia'>
                    <a className='social' href='https://github.com/randomnamelester123/hakaton2024-skibidi-sigma-rizzlers' target="_blank" rel="noopener noreferrer">
                        <i className='icon-github-circled'></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default About;