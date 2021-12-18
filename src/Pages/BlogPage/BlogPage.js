import React from 'react';
import './BlogPage.css';
import hookImg from '../ProjectImg/hokksBlog.jpg';
import keyworImg from '../ProjectImg/letConstBlog.jpg';
import errorImg from '../ProjectImg/errorBlog.jpg';

export default function BlogPage() {
    const blogsData = [
        {
            name : 'Understand Difference var, let and const',
            description : "Understand Difference Bet'n Var,Let And Const To Read Please Click On The Below Button.",
            link : 'https://omkarpatke.hashnode.dev/understand-the-difference-var-let-and-const',
            img :`${keyworImg}`
        },
        {
            name : 'Common javaScript Errors',
            description : 'Every Programmer Has Put Face On Various Error, So I Write Some Techniques To Solve Errors.',
            link : 'https://omkarpatke.hashnode.dev/common-javascript-errors-and-how-to-handle-them',
            img : `${errorImg}`
        },
        {
            name : 'Overview of React Hooks',
            description : 'Hooks Are Really Important In React So I Write a Blog To Understand Hooks Properly.',
            link : 'https://omkarpatke.hashnode.dev/overview-of-react-hooks',
            img : `${hookImg}`
        }
        
    ]
    return (
        <div className='blogspage-container'>
            <div className="nav">
                <a href="/">Back To Home Page</a>
                </div>

                <div className="all-blogs">
                {blogsData.map((blog ,index) => {
                    return (
                        <div className="blog-card" key={index}>
                            <div className="blog-img">
                                <img src={blog.img} alt="img" />
                            </div>
                            <div className="blog-name">{blog.name}</div>
                            <div className="blog-des">{blog.description}</div>
                            <div className="button">
                                <a className='blog-link' href={blog.link}>Read</a>
                            </div>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}
