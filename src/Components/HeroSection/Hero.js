import React from 'react';
import './hero.css';
import Video from '../Videos/video.mp4';
import Img from '../Images/profileImg.png'

export default function HomePage() {
    return (
        <div>
            <div className='home-container' id='Home'>
                <div className='background-div'>
                    <video className='video-div' src={Video} autoPlay loop muted />
                </div>
                <div className='home-content'>
                    <img src={Img} alt="profileImg" className='homeImg' />
                    <div>
                    <h2 className='homeHeading'>Hello I'm Omkar Patke The<strong> web developer</strong></h2>
                    <p className='homeParagraph'><span style={{color:'red'}}>Learning: </span>JavaScript, ReactJs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
