import React, { useEffect } from "react";
import panda1 from "../../images/Akash e-commerce.png";
import panda2 from "../../images/Akash e-commerce (1).png";
import panda3 from "../../images/Akash e-commerce (2).png";
import superFood from "../../images/SuperFood Villag.png";
import next1 from "../../images/Next IT - Comple (2).png";
import next2 from "../../images/Next IT - Comple (3).png";
import next3 from "../../images/Next IT - Comple (4).png";
import rich1 from "../../images/Rich Table (4).png";
import rich2 from "../../images/Rich Table (5).png";
import rich3 from "../../images/Rich Table (6).png";
import Aos from "aos";
import "aos/dist/aos.css";

const MyWorks = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div id="Project" className="mt-5 container">
      <div data-aos='fade-up' className="mt-5 text-center">
        <h5 className="text-danger">MY WORKS</h5>
        <br />
        <h2 className="text-white">
          Have A Look <span className="text-warning">At Some Of My Previous <br /> Works</span>
        </h2>
        <div>
          <div class="row row-cols-1 mt-5 row-cols-md-2 g-4">
            <div class="col">
              <div class="card transparent">
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
                  <h3 class="card-title">NEXT IT</h3>
                  <br />
                  <p class="card-text">
                    Welcome to Next IT. A Complete IT Solution. Got stuck with
                    your finding a better IT service provider?
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="https://burs-al-arab.web.app/" target="_blank" class="btn btn-danger" type="button">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={rich1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={rich2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={rich3} class="d-block w-100" alt="..." />
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
                  <h3 class="card-title mt-3">The Rich Table</h3>
                  <p class="card-text">
                  Are you hungry? Dont worry! The Rich Table is here with their delicious and yummy food that you give inner peace.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="https://the-rich-table.web.app/" target="_blank" class="btn btn-danger" type="button">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={panda1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={panda2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={panda3} class="d-block w-100" alt="..." />
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
                  <h3 class="card-title">Panda Commerce</h3>
                  <br/>
                  <p class="card-text">
                    This is a Static minimalist e commerce template, There is two type catagorized item to sell.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="https://akashtech-source.github.io/panda-commerce-bootstrap/" target="_blank" class="btn btn-danger" type="button">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={superFood} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={superFood} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={superFood} class="d-block w-100" alt="..." />
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
                  <h5 class="card-title">Super Food Village</h5>
                  <br/>
                  <p class="card-text">
                    Super Food Village is a E-commerce based minimalist website, where people can buy grocery product.
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="https://superfood-village.web.app/" target="_blank" class="btn btn-danger" type="button">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
