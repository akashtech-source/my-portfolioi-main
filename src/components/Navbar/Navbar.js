
import React from "react";
import {
  faBars,
  faEnvelope,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid container  mt-3">
          <a class="navbar-brand  text-white fs-3" href="#Home">
            Farhan's
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className="fs-3 text-white" icon={faBars} />
          </button>
          <div class="collapse navbar-collapse ms-md-5" id="navbarNav">
            <ul class="navbar-nav m-auto ms-md-5">
              <li class="nav-item">
                <a class="nav-link active me-5 ms-md-5 text-white fs-6" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white fs-6" href="#About">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white fs-6" href="#Project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white fs-6" href="#Blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white fs-6" href="#Contact">
                  Contact
                </a>
              </li>
              <li class="nav-item ms-md-5 mt-md-0 mt-3">
                <a href='https://drive.google.com/file/d/1AGi4mORhIWsG8OJO04t9cU7u4N85WpRu/view?usp=sharing' target='_blank' class="nav-link me-5 p-2 btn btn-danger text-white">
                  DOWNLOAD RESUME
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
