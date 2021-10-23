import React, { useEffect } from "react";
import service from "../../images/service-thumb-829301f40df535f46b7315391422a136.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const MySkill = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className="row mt-5">
      <div data-aos='fade-right' className="col-md-6 mt-5">
        <img style={{borderRadius: '10px'}} className="w-75 ms-md-5 ms-3" src={service} alt="" />
      </div>
      <div data-aos='fade-left' className="col-md-4 mt-5 ms-md-5 ms-2 text-white">
        <div className="mt-3">
          <h5 className="text-danger">My Tools and Competencies</h5>
          <h1 className="text-warning">The Development Tools <br/> I Use..</h1>
        </div>
            <div className="mt-4">
                <h4>Front End Development</h4>
                 <div className="mt-4 ms-md-3 fs-5">
                 <ul>
                    <li>HTML/CSS, JavaScript, TypeScript for static sites</li>
                    <li>React.js, Next.js, Redux for reactive sites</li>
                    <li>Material UI, Tailwind CSS, Bootstrap as CSS Framework</li>
                    <li>Constantly Learning New Technology</li>
                </ul>
                 </div>
            </div>
                <div className="mt-5">
                    <h4>Back End Development</h4>
                    <div className="mt-4 ms-3 fs-5">
                    <ul>
                        <li>Node.js & Express powered SSR <br/> web apps</li>
                        <li>JWT, Best security practices, Firebase Admin</li>
                        <li>Tools like Ejs, Pug, Validator, Dom-Purify, Sanitizer and more</li>
                        <li>Constantly Learning New Technology</li>
                    </ul>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default MySkill;
