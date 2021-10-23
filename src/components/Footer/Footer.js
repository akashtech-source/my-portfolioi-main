import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'grey'}} className="mt-5 rounded">
            <div className="text-center p-2 ">
                <a style={{textDecoration: 'none'}} href="https://www.facebook.com/farhan.ahmedii.9"
                target="_blank"
                >
                    <p className="mt-3 text-white">
                        All Right Reserved By {' '}
                        <span className="text-warning">
                            Zahirul Islam Akash
                            </span> 
                            </p>
                            </a>

            </div>
        </div>
    );
};

export default Footer;