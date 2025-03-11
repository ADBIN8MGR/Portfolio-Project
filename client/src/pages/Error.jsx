import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Error';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="error-container">
                    <FaExclamationTriangle className="error-icon" />
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <p>The page you are looking for does not exist or has been moved.</p>
                    <Link to="/" className="btn">
                        back home
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};


export default Error; 