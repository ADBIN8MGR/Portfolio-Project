import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <Wrapper>
            <div className="container page">
                <div className="contact-header">
                    <h2>Contact Me</h2>
                    <div className="underline"></div>
                    <p>
                        Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h4>Contact Information</h4>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <h5>Email</h5>
                                    <p>adbin8magar@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <h5>Phone</h5>
                                    <p>9811995182</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <h5>Location</h5>
                                    <p>Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h4>Send Me a Message</h4>
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-block">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


export default Contact; 