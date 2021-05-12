import React, { useEffect } from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faPhone,
    faVoicemail,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Aos from "aos";
  import "aos/dist/aos.css";

const ContactMe = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div id="Contact" className="container text-white">
      <div data-aos='fade-up' className="mt-5 text-center ">
        <h5>CONTACT ME</h5>
        <h2>Want To <span className="text-warning">Work With Me</span></h2>
      </div>
      <div >
      <div className="row mt-5">
        <div data-aos='fade-right' className="col-md-4 text-white">
          <h3 className="text-warning text-center">FIND ME OVER</h3>
          <div className="mt-5 text-center">
            <FontAwesomeIcon className="fs-3" icon={faPhone} />
            <h4 className="mt-3 mb-4">+880 1725-437126</h4>
            <FontAwesomeIcon className="fs-3" icon={faEnvelope} />
            <h4 className="mt-3 mb-4">mr.ifranakash@gmail.com</h4>
            <FontAwesomeIcon className="fs-3" icon={faGithub} />
            <a href="https://github.com/akashtech-source/" className="text-white text-decoration-none"><h4 className="mt-3 mb-4">Github</h4></a>
            <FontAwesomeIcon className="fs-3" icon={faLinkedinIn} />
            <a href="https://www.linkedin.com/in/farhanakash/" className="text-white text-decoration-none"><h4 className="mt-3 mb-4">Linked In</h4></a>
          </div>
        </div>
        <div data-aos='fade-left' className="col-md-6 ms-md-5 ms-5">
        <div className="w-75 ms-md-5">
            <form
              className="ms-md-5"
              action="https://formspree.io/f/myylkjlv"
              method="POST"
            >
              <div className="form-group">
                <label className="fs-5 mb-3 " htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
                <br />
              </div>

              <div className="form-group">
                <label className="fs-5 mb-3" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <br />
              </div>

              <div className="form-group">
                <label className="fs-5 mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="10"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <br />

              <button
                type="submit"
                formTarget="_blank"
                className="btn btn-danger"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactMe;
