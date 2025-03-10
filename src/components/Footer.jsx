import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-center">
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </Wrapper>
    );
};

export default Footer; 