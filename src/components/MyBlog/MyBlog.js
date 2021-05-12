import React, { useEffect } from 'react';
import js from '../../images/Free Courses to learn JavaScript.jpg';
import es6 from '../../images/javascript-es6.png';
import react from '../../images/you dont know react.png';
import Aos from "aos";
import "aos/dist/aos.css";

const MyBlog = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])
    return (
        <div id="Blog" className="container">
            <div data-aos='fade-up' className="mt-5 text-center">
                <h5 className="text-warning">MY BLOG</h5>
                <br/>
                <h2 className="text-white">Explore  <span className="text-primary">Some of The Blog Post by <br/> Me</span></h2>
            </div>
            <div className="row mt-5 g-3 ms-md-0">
                <div data-aos='fade-right' className="col-md-4">
                <div class="card" style={{width: '20rem'}}>
                    <img src={js} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h5 class="card-text mt-3">JavaScript ARRAY Principle You Must Know!</h5>
                        <br/>
                        <p>JavaScript is a high-level programming language. In old JavaScript only use for Client Side web interaction...</p>
                        <a href="https://zahirul-islam.medium.com/javascript-array-principle-you-must-know-5444858538e1" className="btn btn-warning">Read more</a>
                    </div>
                    </div>
                </div>
                <div data-aos='fade-up' className="col-md-4">
                <div class="card" style={{width: '20rem'}}>
                    <img src={es6} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-text mt-3">Fundamental ES6 You Need To Know!</h5>
                        <br/>
                        <p>ES7 is currently the most preferred version of JavaScript developers. But the problem is that it is not yet fully…</p>
                        <a href="https://zahirul-islam.medium.com/fundamental-es6-you-need-to-know-1057d364f132" className="btn btn-warning">Read more</a>
                    </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="col-md-4">
                <div class="card" style={{width: '20rem'}}>
                    <img src={react} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-text mt-3">You don’t know React JS</h5>
                        <br/>
                        <p>React is a JavaScript library created for building fast and interactive user interfaces for web and mobile app..</p>
                        <a href="https://zahirul-islam.medium.com/you-dont-know-react-js-b143262225e7" className="btn btn-warning">Read more</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlog;