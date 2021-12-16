import React from 'react';
import {Link} from 'react-scroll';
import { FaBars } from "react-icons/fa";
import './navbar.css';
import { animateScroll as scroll } from 'react-scroll';


export default function Navbar({toggle}) {
    
    return (
        <>
          <nav>
              <div className='nav-container'>
                  <div className='brand-name' ><Link to='home' onClick={() => {scroll.scrollToTop()}}>Omkar Patke</Link></div>
                  <div className='mobile-icon' onClick={toggle}><FaBars /></div>
                  <div className='nav-links'>
                      
                      <ul>
                          <li><Link to='Home' exact activeClassName='is-active' smooth={true} duration={500} offset={-80}>Home</Link></li>
                          <li><Link to='About' exact activeClassName='is-active' smooth={true} duration={500} offset={-80} spy={true}>About</Link></li>
                          <li><Link to='Projects' exact activeClassName='is-active' smooth={true} duration={500} offset={-80} spy={true}>Projects</Link></li>
                          <li><Link to='Blogs' exact activeClassName='is-active' smooth={true} duration={500} offset={-80} spy={true}>Blogs</Link></li>
                          <li className='contact-btn'><Link id='footer' exact activeClassName='is-active' onClick={() => {scroll.scrollToBottom()}}>Contact</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </>
    )
}
