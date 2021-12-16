import React from 'react';
import './sidebar.css';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function SideBar({isOpen , toggle }) {
    let sideBarStyle = {
        opacity:isOpen ? '100%' : '0',
        top:isOpen ? '0' : '-100%',
    }
    return (
        <>
          <div className='sidebar-container' style={sideBarStyle}>
          <div className='close-icon' onClick={toggle}><AiOutlineClose /></div>
          <div className='navItemContainer'>
              <div className='link-lists'>
                  <li><Link to='Home' onClick={toggle} smooth={true} duration={500} offset={-80} >Home</Link></li>
                  <li><Link to='Projects' onClick={toggle} smooth={true} duration={500} offset={-80}>Projects</Link></li>
                  <li><Link to='Blogs' onClick={toggle} smooth={true} duration={500} offset={-80}>Blogs</Link></li>
                  <li><Link to='About' onClick={toggle} smooth={true} duration={500} offset={-80}>About</Link></li>
                  <li><Link to='Footer' onClick={toggle} smooth={true} duration={500} offset={-80}>Contact</Link></li>
              </div>
          </div>
          </div>
        </>
    )
}
