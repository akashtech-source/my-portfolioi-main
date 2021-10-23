import React, { useEffect } from "react";
import './Header.css';
import scroller from '../../images/scroll-button.gif';
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from 'react-typical';

const Header = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className="header-container">
      
      <div data-aos="fade-up" className="text-center header-text">
        <h4 className="text-white">HELLO & WELCOME</h4>
        <h1 className="text-white">I'm <span className="text-warning">Zahirul Islam Akash</span></h1>
          
        <h6 className="mt-5 text-white">
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'MERN Stack Developer -- Tech Enthusiast -- Hungry Learner...',
              1000,
              'Available for — Internship/Full-Time Opportunities....',
              1000,
            ]}
          />
        </h6>
        <a href='https://www.linkedin.com/in/farhanakash/' target='_blank' className="btn btn-outline-danger mt-5 fs-5">Explore Me</a>
  
      </div>
      <div className="text-center">
      <img style={{width: '100px'}} src={scroller} alt=""/>
      </div>
    </div>
  );
};

export default Header;
