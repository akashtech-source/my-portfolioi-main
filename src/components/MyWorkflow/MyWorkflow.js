import React, { useEffect } from 'react';
import './MyWorkflow.css';
import fast from '../../images/download (4).svg';
import team from '../../images/download (5).svg';
import communication from '../../images/download (6).svg';
import tech from '../../images/download (7).svg'
import Aos from "aos";
import "aos/dist/aos.css";

const MyWorkflow = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])
    return (
        <div className=" workflow-container container">
            <div data-aos='fade-up' className="text-center">
                <h4 className="text-white">MY WORKFLOW</h4>
                <br/>
                <h1 className="text-white">How I <span className="text-primary">Works In a Project</span></h1>
            </div>
            <div className="row text-white mt-5 g-5 ms-md-3 ms-3 work-details">
                <div data-aos='fade-down' className="col-md-3">
                    <img className="ms-md-5 mb-3" src={fast} alt=""/>
                    <h4 className="">Get instructions</h4>
                    <br/>
                    <p>Without the proper information on a project, what is the purpose? how does it work? working on a project is a bit harder. that's why I always start with proper instructions</p>
                </div>
                <div data-aos='fade-down' className="col-md-3">
                    <img className="ms-md-5 mb-3" src={team} alt=""/>
                    <h4 className="">Plan the project</h4>
                    <br/>
                    <p>After getting all the necessary information from the client. I work on planning the project, All of the components, structures, tools & workflow.</p>
                </div>
                <div data-aos='fade-down' className="col-md-3 ">
                    <img className="ms-md-5 mb-2" src={communication} alt=""/>
                    <h4 className="">Complete the project</h4>
                    <br/>
                    <p>Good planning and file structure always help with professional and powerful projects. And that's how I like to complete my projects</p>
                </div>
                <div data-aos='fade-down' className="col-md-3">
                    <img className="ms-md-5 mb-3" src={tech} alt=""/>
                    <h4 className="">Review & deliver</h4>
                    <br/>
                    <p>After completing the project successfully, It is time for some refactoring and then finally delivered to the client with all-time support.</p>
                </div>
                
            </div>
        </div>
    );
};

export default MyWorkflow;