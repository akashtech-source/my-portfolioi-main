import React, { useEffect } from "react";
import "./LetsTalk.css";
import Aos from "aos";
import "aos/dist/aos.css";
import FaQ from "../FaQ/FaQ";

const LetsTalk = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="mt-5">
      <div className="talk-container container">
        <div className="d-flex p-5">
          <div className="ms-md-5 text-white">
            <h3>
              Want to collaborate or Have a work for me?? <br /> Let's Talk...
            </h3>
          </div>
          <div className=" ms-md-5">
            <div className="ms-md-5">
              <a href="https://www.linkedin.com/in/farhanakash" target='blank' className="btn btn-warning ms-md-5 p-3 fs-5 ms-5">
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LetsTalk;
