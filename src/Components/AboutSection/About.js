import React from 'react';
import AboutImg from '../Images/aboutC.svg';
import './about.css';

export default function About() {
    return (
        <>
            <div className="about-container" id='About'>
                <div className="about-img">
                    <h3>Something About Me !
                        <h2 style={{color:'red'}}>& My Skills:</h2></h3>
                    <img src={AboutImg} alt="img" />
                </div>
                <div className="text-content">
                    <h2>ABOUT ME :)</h2>
                    <p><strong>Hello I'm Omkar,</strong> Student Of Computer Science Learning Full Stack Web Devlopement . I Love Exchanging Ideas And Spreading Knowledge And Positivity. I Am Social Person Who Loves To Take Up New Challenges And Learn New Skills.</p>
                    <hr />

                    <div className="lang-content">
                    <span style={{color: 'orangered'}}><i className="fab fa-html5"></i></span>
                        <p> <span style={{color:'orangered'}}>HTML :</span> I have good knowladge of HTML especially making Structure of Pages.</p>
                    </div>
                    <hr />

                    <div className="lang-content">
                        <span style={{color: 'deepskyblue'}}><i className="fab fa-css3-alt"></i></span>
                        <p><span style={{color:'deepskyblue'}}>CSS :</span> I really enjoy to playing with CSS’s ability to Design website layouts. I'm Learning it from past 4 Months. Now i have good knowledge of how to make website look great.</p>
                    </div>
                    <hr />

                    <div className="lang-content">
                    <span style={{color: '#f0db4f'}}><i class="fab fa-js-square"></i></span>
                        <p><span style={{color:'#f0db4f'}}>JavaScript :</span> Currently I'm learning it from NeoG camp and also from YouTube.</p>
                    </div>
                    <hr />

                    <div className="lang-content">
                    <span style={{color: 'deepskyblue'}}><i className="fab fa-react"></i></span>
                        <p><span style={{color:'deepskyblue'}}>ReactJS :</span> It is very Powerfull JavaScript library, i also have made some app with ReactJS.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
