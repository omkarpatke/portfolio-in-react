import React from 'react';
import './project.css';
import ProjectImg from '../Images/projects.svg';
import { Link } from 'react-router-dom';



export default function Project() {
    return (
        <>
           <div className='project-container' id='Projects'>
               <div className="img">
               <img src={ProjectImg} alt="img" />
               </div>

               <div className="project-content">
                   <h2>I have worked on various <span style={{color:'#01bf71'}}>projects</span></h2>
                   <p>I Believe That The Best Way To Learn Is By Making Good Projects. Hence I Make Sure That I Implement What I Have Learned.</p>
                   <div>You Can See The Projects That I Have Worked On Here.</div>
                   <Link to='/projects' className='link'>See Projects</Link>
               </div>
           </div> 
        </>
    )
}
