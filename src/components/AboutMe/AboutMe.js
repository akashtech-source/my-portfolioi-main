import React, { useEffect } from 'react';
import MySkill from '../MySkill/MySkill';
import WhyMe from '../WhyMe/WhyMe';
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])
    return (
        <div id="About" style={
            {
                marginTop: '180px'
            }
        }>
            <div data-aos='zoom-in-up' className=" about-section">
                <div className="about-text text-center text-white">
                    <h5 className="text-danger">ABOUT ME</h5>
                    <br/>
                    <h3>Some <span className="text-warning">Key Details of Me</span></h3>
                </div>
            </div>
            <div data-aos='fade-right' className="mt-2">
            <WhyMe></WhyMe>
            </div>
            <div className="mt-3">
                <MySkill></MySkill>
            </div>
        </div>
    );
};

export default AboutMe;