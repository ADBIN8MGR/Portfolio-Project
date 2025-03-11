import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import Wrapper from '../assets/wrappers/Navbar';
import logoIcon from '../logo.ico';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const { isDarkMode, toggleDarkMode } = useGlobalContext();

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <Wrapper>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="nav-logo">
                        <img src={logoIcon} alt="Portfolio Logo" className="logo-img" />
                        <span>Portfolio</span>
                    </Link>
                    <button className="nav-toggle" onClick={toggleLinks} aria-label="Toggle navigation">
                        {showLinks ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`nav-links ${showLinks ? 'show-links' : ''}`}>
                    <Link to="/" onClick={() => setShowLinks(false)}>
                        Home
                    </Link>
                    <Link to="/about" onClick={() => setShowLinks(false)}>
                        About
                    </Link>
                    <Link to="/projects" onClick={() => setShowLinks(false)}>
                        Projects
                    </Link>
                    <Link to="/contact" onClick={() => setShowLinks(false)}>
                        Contact
                    </Link>
                </div>
                <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </Wrapper>
    );
};

export default Navbar; 