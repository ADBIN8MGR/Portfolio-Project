import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Home';
import heroImg from '../assets/images/main.svg';

const Home = () => {
    return (
        <Wrapper>
            <div className="page container">
                <div className="info">
                    <h1>
                        Welcome to my <span>Portfolio</span>
                    </h1>
                    <p>
                        I'm a passionate web developer specializing in creating modern and responsive web applications.
                        With expertise in Node.js, React, and modern web technologies, I build solutions that make an impact.
                    </p>
                    <div className="btn-container">
                        <Link to="/about" className="btn btn-hero">
                            More About Me
                        </Link>
                        <Link to="/contact" className="btn btn-hipster">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="portfolio hero" className="main-img" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home; 