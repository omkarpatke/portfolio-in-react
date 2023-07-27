import './App.css';
import Home from './Pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import React, { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)

  }, [pathname]);

  
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<ProjectPage />}/>
      <Route path='/blogs' element={<BlogPage />}/>
    </Routes>
  )
}

export default App;
