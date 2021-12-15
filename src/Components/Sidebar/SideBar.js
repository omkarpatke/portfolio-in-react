import React from 'react';
import './sidebar.css';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';

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
                  <li><Link to='home' onClick={toggle}>Home</Link></li>
                  <li><Link to='projects' onClick={toggle}>Projects</Link></li>
                  <li><Link to='blogs' onClick={toggle}>Blogs</Link></li>
              </div>
          </div>
          </div>
        </>
    )
}
