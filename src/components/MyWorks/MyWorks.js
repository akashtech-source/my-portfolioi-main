import React, { useEffect } from "react";
import min1 from "../../images/min- (1).png";
import min2 from "../../images/min- (3).png";
import min3 from "../../images/min- (2).png";
import dentist1 from "../../images/Dentist Park- Ma.png";
import dentist2 from "../../images/Dentist Park- Ma (1).png";
import dentist3 from "../../images/Dentist Park- Ma (2).png";
import next1 from "../../images/Next IT - Comple (2).png";
import next2 from "../../images/Next IT - Comple (3).png";
import next3 from "../../images/Next IT - Comple (4).png";
import rich1 from "../../images/Rich Table (4).png";
import rich2 from "../../images/Rich Table (5).png";
import rich3 from "../../images/Rich Table (6).png";
import brackets1 from "../../images/brackets1.png";
import brackets2 from "../../images/brackets2.png";
import brackets3 from "../../images/brackets3.png";
import blood1 from "../../images/blood1.png";
import blood2 from "../../images/blood2.png";
import blood3 from "../../images/blood3.png";
import Aos from "aos";
import "aos/dist/aos.css";

const MyWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="Project" className="mt-5 container">
      <div data-aos="fade-up" className="mt-5 text-center">
        <h5 className="text-danger">MY WORKS</h5>
        <br />
        <h2 className="text-white">
          Have A Look{" "}
          <span className="text-warning">
            At Some Of My Previous <br /> Works
          </span>
        </h2>

        <div>
          <div class="row row-cols-1 mt-5 row-cols-md-2 g-4">
            <div class="col">
              <div style={{ height: "100%" }} class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={brackets1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={brackets2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={brackets3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h3 class="card-title mt-3">Brackets</h3>
                  <p class="card-text">
                    Bracket’s is an online programming learning community that
                    is completely free for everyone. Anyone can learn to
                    programming.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a
                      href="https://brackets.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                      class="btn btn-danger"
                      type="button"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div style={{ height: "100%" }} class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={dentist1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={dentist2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={dentist3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Dentist Park</h3>
                  <br />
                  <p class="card-text">
                    The dental hospital management system has 3 portals <br />
                    (DOCTOR, ADMIN AND STAFF) with a single login page.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a
                      href="https://dentist-park.web.app/"
                      target="_blank"
                      class="btn btn-danger"
                      type="button"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div style={{ height: "100%" }} class="card transparent">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={blood1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={blood2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={blood3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h3 class="card-title">B Blood Bank</h3>
                  <br />
                  <p class="card-text">
                    A Blood Bank Community who helps people to find blood easily
                    and donate blood.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a
                      href="https://bdropbd.web.app/"
                      target="_blank"
                      class="btn btn-danger"
                      type="button"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div style={{ height: "100%" }} class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={next1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={next2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={next3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Next IT</h3>
                  <br />
                  <p class="card-text">
                    Next IT is a IT Service related website, where entrepreneur
                    find their <br />
                    reliable IT service.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a
                      href="https://burs-al-arab.web.app/"
                      target="_blank"
                      class="btn btn-danger"
                      type="button"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <h5 className="text-warning ">New Update Coming Soon..</h5>
        <div class="spinner-grow text-primary ms-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
