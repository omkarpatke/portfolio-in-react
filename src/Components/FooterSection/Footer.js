import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './footer.css';


export default function Footer() {
  return (
    <>
       <div className="footer-container" id='Footer'>
           <div className="name"></div>
           <div className="social-links">
               <ul>
                   <li><Link to='/'><FaGithub /></Link></li>
                   <li><Link to='/'><FaLinkedin /></Link></li>
                   <li><Link to='/'><FaTwitter /></Link></li>
                   <li><Link to='/'><AiOutlineMail /></Link></li>
                   
               </ul>
           </div>
       </div>
    </>
  );
}
