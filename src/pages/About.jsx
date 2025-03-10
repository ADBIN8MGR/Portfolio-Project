import React from 'react';
import Wrapper from '../assets/wrappers/About';
import profileImg from '../assets/images/profile.webp';

const About = () => {
    return (
        <Wrapper>
            <div className="container page">
                <div className="about-center">
                    <div className="img-container">
                        <img src={profileImg} alt="Adbin Mgr" className="profile-img" />
                    </div>
                    <div className="about-info">
                        <h2>About Me</h2>
                        <h4>Adbin Mgr</h4>
                        <h5>Web Developer</h5>
                        <p>
                            Hello! I'm a web developer with a passion for creating beautiful,
                            functional, and user-friendly websites. I am mainly specialize in back-end
                            development using Node.js and have experience with various modern web technologies.
                        </p>
                        <p>
                            My journey in web development started several years ago, and I've been
                            continuously learning and improving my skills ever since. I believe in
                            writing clean, maintainable code and creating intuitive user experiences.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or enjoying outdoor activities.
                        </p>
                        <p>
                            Quote: Though we may think we are different, like flowers on a tree, each believing it is its own being, but we all come from the same tree, the same seed.
                        </p>
                        <div className="skills">
                            <h4>Skills</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">HTML5</span>
                                <span className="skill-tag">CSS3</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Linux</span>
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Express</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};



export default About; 