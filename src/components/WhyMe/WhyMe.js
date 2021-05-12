import React from 'react';
import fast from '../../images/js-bg.svg';
import team from '../../images/react-bg.svg';
import communication from '../../images/mongo-db-bg.svg';
import tech from '../../images/node-.svg'



const WhyMe = () => {
    
    return (
        <div className="container-fluid whyMe-container">
            <div className="row mt-5 g-3 text-center text-white">
                <div className="col-md-3">
                    <img className="w-25" src={fast} alt=""/>
                    <h5 className="mt-3">Javascript Lover</h5>
                </div>
                <div className="col-md-3">
                    <img className="w-25" src={team} alt=""/>
                    <h5 className="mt-3">React Addicted</h5>
                </div>
                <div className="col-md-3 ">
                    <img className="w-25" src={communication} alt=""/>
                    <h5 className="mt-3">Database Partner</h5>
                </div>
                <div className="col-md-3">
                    <img className="w-25" src={tech} alt=""/>
                    <h5 className="mt-3">Server Technology</h5>
                </div>
                
            </div>
        </div>
    );
};

export default WhyMe;