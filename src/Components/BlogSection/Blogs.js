import React from 'react';
import './blog.css';
import BlogImg from '../Images/Blog.svg'





export default function Blogs() {
    return (
        <>
            
           <div className='blogs-container' id='Blogs'>
           <div className="blog-content">
                   <h2>Recently I Started Writing <span style={{color:'#01bf71'}}> Blogs !!</span></h2>
                   <p>I Like To Write Blogs And Document My Journey. It Helps Me Understand The Concepts Better And Pushes Me To Explore The Depth Of The Field Before I Write About It. You Can Find My Blogs Here.</p>
                   
                   <button><a href="/blogs">Read Blogs</a></button>
                  
               </div>
               <div className="blog-img">
                   <img src={BlogImg} alt="" />
               </div>
           </div> 
        </>
    )
}
