import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container" id="contact">
            {/* Main Footer Content */}
            <div className="footer-content">
                {/* Availability Section */}
                <div className="footer-availability">
                    <h2 className="availability-title">
                        Available for select<br />
                        freelance<br />
                        opportunities
                    </h2>
                    
                    <div className="availability-description">
                        <p>Have an exciting project you need help with?</p>
                        <p>Send me an email or contact me via instant message!</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    {/* Email */}
                    <div className="contact-email">
                        <a href="mailto:amen.a.bejaoui@gmail.com" className="email-link">
                            amen.a.bejaoui@gmail.com
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                       
                        <a href="https://www.linkedin.com/in/amen-bejaoui/" className="social-link" target="_blank" rel="noopener noreferrer">
                            <span className="social-text">LinkedIn</span>
                        </a>
                        {/* Link directly to the uploaded CV */}
                        <a href={`${process.env.PUBLIC_URL}/amen_allah_bejaoui_cv.pdf`} className="social-link" target="_blank" rel="noopener noreferrer">
                            <span className="social-text">CV</span>
                        </a>
                        <a href="https://github.com/amenallahbejaoui-rgb" className="social-link" target="_blank" rel="noopener noreferrer">
                            <span className="social-text">Github</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="footer-copyright">
                        <span>© 2025 AmenAllah. All rights reserved.</span>
                    </div>
                    <div className="footer-links">
                        <a href="#privacy" className="footer-link">Privacy Policy</a>
                        <a href="#terms" className="footer-link">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer-decorations">
                <div className="decoration-grid">
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                </div>
                <div className="floating-elements">
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;