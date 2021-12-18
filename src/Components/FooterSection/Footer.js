import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './footer.css';


export default function Footer() {
  return (
    <>
       <div className="footer-container" id='Footer'>
           <div className="name">Let's Connect</div>
           <div className="social-links">
               <ul>
                   <li><a target='_blank' href="https://github.com/omkarpatke"><FaGithub /></a></li>
                   <li><a target='_blank' href="https://www.linkedin.com/in/omkar-patke-a61b221ab/"><FaLinkedin /></a></li>
                   <li><a target='_blank' href="https://twitter.com/omkar_patke"><FaTwitter /></a></li>
                   <li><a target='_blank' href="mailto:omkarpatke1101@gmail.com"><AiOutlineMail /></a></li>
               </ul>
           </div>
       </div>
    </>
  );
}
