import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import BenifitOfMe from '../BenifitOfMe/BenifitOfMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LetsTalk from '../LetsTalk/LetsTalk';
import MyBlog from '../MyBlog/MyBlog';
import MyWorkflow from '../MyWorkflow/MyWorkflow';
import MyWorks from '../MyWorks/MyWorks';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div id="Home">
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <BenifitOfMe></BenifitOfMe>
            <MyWorks></MyWorks>
            <MyWorkflow></MyWorkflow>
            <MyBlog></MyBlog>
            <LetsTalk></LetsTalk>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;