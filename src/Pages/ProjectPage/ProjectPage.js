import React from 'react';
import './ProjectPage.css';
import photoGallery from '../ProjectImg/photoGallery.png';
import cricketQuiz from '../ProjectImg/cricketQuiz.png';
import movieApp from '../ProjectImg/movieApp.png';
import todoApp from '../ProjectImg/todoApp.png';
import spotifyClone from '../ProjectImg/spotifyClone.png';
import stockApp from '../ProjectImg/stockApp.png';
import CLImg from '../ProjectImg/CL.png';
import ecommerce from '../ProjectImg/ecommerce.png';
import notesApp from '../ProjectImg/notesApp.png';
import videoLibrary from '../ProjectImg/videoLibrary.png';
import quizApp from '../ProjectImg/quizApp.png';
import ChatApp from '../ProjectImg/chat-app.png';
import { Link } from 'react-router-dom';


export default function ProjectPage() {
    const projectData = [
        {
            name : 'Component Library',
            description : 'For Making UI Easy like bootstrap',
            liveLink : 'https://fasterui.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/fasterUI-component-library1',
            img : `${CLImg}`
        },
        {
            name : 'Faster Cycle Store',
            description : 'Ecommerce App for Cycles.',
            liveLink : 'https://faster-cycles-store.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/faster-store-ecommerce-app',
            img : `${ecommerce}`
        },
        {
            name : 'Faster Chat App',
            description : 'Chat App',
            liveLink : 'https://faster-chats.herokuapp.com/',
            githubLink : '',
            img : `${ChatApp}`
        },
        {
            name : 'Faster Notes App',
            description : 'Notes App to create study notes.',
            liveLink : 'https://faster-note.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/faster-notes-app',
            img : `${notesApp}`
        },
        {
            name : 'Faster Video Library',
            description : 'Video Library to Learn Basics Of HTML, CSS, JavaScript.',
            liveLink : 'https://faster-video-library.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/faster-videos-library',
            img : `${videoLibrary}`
        },
        {
            name : 'Faster Quiz App',
            description : 'Quiz to Test Your Sport Knowledge.',
            liveLink : 'https://faster-quizz.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/faster-quizzz',
            img : `${quizApp}`
        },
        {
            name : 'Photo Gallery App',
            description : 'For Save your Memeries',
            liveLink : 'https://omkar-photogallery.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/photogallery1',
            img : `${photoGallery}`
        },
        {
            name : 'Movie App',
            description : 'Simple Movie App details fetch throuth APIs',
            liveLink : 'https://omkar-movieapp.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/movies-app',
            img : `${movieApp}`
        },
        {
            name : 'Spotify Clone',
            description : 'lorem',
            liveLink : 'https://omkar-spotify-clone.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/Spotify-Clone',
            img : `${spotifyClone}`
        },
        {
            name : 'Cricket Quiz',
            description : 'If you are Cricket Fan, This is for You, Check Your love for cricket!!',
            liveLink : 'https://replit.com/@omkarpatke/Cricket-quiz#index.js',
            githubLink : 'https://github.com/omkarpatke/Cricket-quiz',
            img : `${cricketQuiz}`
        },
        {
            name : 'profit loss on Stocks',
            description : 'App checks you are in profit or loss',
            liveLink : 'https://omkar-profitloss.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/Stocks-Profit-Loss',
            img : `${stockApp}`
        },
        {
            name : 'todo app',
            description : 'to write your dialy info',
            liveLink : 'https://omkar-todo-app.netlify.app/',
            githubLink : 'https://github.com/omkarpatke/vanillaJS-todo-app',
            img : `${todoApp}`
        }
        
    ]
    return (
        <>
            <div className="projects-container">
                <div className="nav">
                
                <Link to='/' className='backtohomeLink'>Back To Home Page</Link>
                </div>
                <div className="all-projects">
                {projectData.map((project ,index) => {
                    return (
                        <div className="project-card" key={index}>
                            <div className="project-img">
                                <img src={project.img} alt="img" />
                            </div>
                            <div className="project-name">{project.name}</div>
                            <div className="project-des">{project.description}</div>
                            <div className="buttons">
                            <div className="button-live">
                                <a className='live-link' href={project.liveLink}>Live Link</a>
                            </div>
                            <div className="git-link">
                                <a className='gitLink' href={project.githubLink}>Source Code</a>
                            </div>

                            </div>

                            </div>
                       
                    )
                })}
                </div>
            </div>
        </>
    )
}
