import React, { useEffect } from 'react';
import skill1 from '../../images/download.svg'
import skill2 from '../../images/download (1).svg'
import skill3 from '../../images/download (2).svg'
import skill4 from '../../images/download (3).svg'
import Aos from "aos";
import "aos/dist/aos.css";

const BenifitOfMe = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])
    return (
        <div className="mt-5 container">
            <div data-aos='fade-up' className="mt-5 text-center text-white">
                <h5 className="text-danger">WHY ME</h5>
                <h1>Benifit <span className="text-warning">of Choosing Me</span></h1>
            </div>
            <div className="row mt-5 ms-md-3 ms-1 mb-5 g-3">
                <div data-aos='zoom-out' className="col-md-6">
                    <div className="d-flex">
                    <div className="mt-3 me-2"><img src={skill1} alt=""/></div>
                    <div>
                    <h5 className="text-warning">Fast Performance</h5>
                    <p className="text-white">Writing clean code and best practices that give your <br/> web apps superpower. Which are Fast, Secure, and <br/> Easily Scalable.</p>
                    </div>
                    </div>
                </div>
                <div data-aos='zoom-out' className="col-md-6">
                    <div className="d-flex">
                    <div className="mt-3 me-2"><img  src={skill2} alt=""/></div>
                    <div>
                    <h5 className="text-warning">Cutting Edge Technology</h5>
                    <p className="text-white">Always learning and keeping up with the best <br/> technologies. That helps me to create web apps that <br/> are Fast & always living up to the latest features.</p>
                    </div>
                    </div>
                </div>
                <div data-aos='zoom-out' className="col-md-6 mt-5">
                    <div className="d-flex">
                    <div className="me-2 mt-3"><img src={skill3} alt=""/></div>
                    <div>
                    <h5 className="text-warning">User First</h5>
                    <p className="text-white">Always value the user's security and experience the <br/> most. That's why I always try to create apps that are <br/> highly secure, always use the best security practices <br/> and keep the user's experience and data safe.</p>
                    </div>
                    </div>
                </div>
                <div data-aos='zoom-out' className="col-md-6 mt-5">
                    <div className="d-flex">
                    <div className="me-2 mt-4"><img src={skill4} alt=""/></div>
                    <div>
                    <h5 className="text-warning">Great Support</h5>
                    <p className="text-white">I believe communication is the key to any good <br/> relationship. As I always try to keep the best possible <br/> experience for my clients and my consumers. I always <br/> practice the best communication possible.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenifitOfMe;