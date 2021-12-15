import React , {useState} from 'react'
import About from '../Components/AboutSection/About';
import Blogs from '../Components/BlogSection/Blogs';
import Footer from '../Components/FooterSection/Footer';
import HomePage from '../Components/HeroSection/Hero';
import Navbar from '../Components/Navbar/Navbar'
import Project from '../Components/ProjectSection/Project';
import SideBar from '../Components/Sidebar/SideBar'

export default function Home() {
    const [isOpen , setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HomePage />
            <About />
            <Project />
            <Blogs />
            <Footer />
        </>
    )
}
