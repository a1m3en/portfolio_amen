import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container" id="home">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="nav-brand">
                    <a href="#home" className="brand-name">AmenAllah._</a>
                </div>
                <div className="nav-menu">
                    <a className="nav-item" href="#home">
                        <span className="nav-number">01</span>
                        <span className="nav-text">{'// home'}</span>
                    </a>
                    <a className="nav-item" href="#expertise">
                        <span className="nav-number">02</span>
                        <span className="nav-text">{'// expertise'}</span>
                    </a>
                    <a className="nav-item" href="#work">
                        <span className="nav-number">03</span>
                        <span className="nav-text">{'// work'}</span>
                    </a>
                    <a className="nav-item" href="#experience">
                        <span className="nav-number">04</span>
                        <span className="nav-text">{'// experience'}</span>
                    </a>
                    <a className="nav-item" href="#contact">
                        <span className="nav-number">05</span>
                        <span className="nav-text">{'// contact'}</span>
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {/* 3D Geometric Elements */}
                <div className="geometric-elements">
                    <div className="cube-1"></div>
                    <div className="cube-2"></div>
                    <div className="sphere"></div>
                    <div className="pyramid"></div>
                </div>

                {/* Hero Section */}
                <div className="hero-section">
                    <div className="play-button">
                        <div className="play-icon">▶</div>
                    </div>
                    
                    <h1 className="hero-title">
                        AMEN ALLAH BEJAOUI
                    </h1>
                    
                    <p className="hero-subtitle">
SOFTWARE DEVELOPER — FRONTEND & BACKEND                    </p>
                </div>

                {/* Featured Section */}
                <div className="featured-section">
                    <p className="featured-text">AS FEATURED IN</p>
                    <div className="featured-logos">
                        <div className="logo-placeholder">NETIFLY</div>
                        <div className="logo-placeholder">Upwork</div>
                        <div className="logo-placeholder">Frontend Mentor</div>
                        <div className="logo-placeholder">WeAreDevelopers</div>
                    </div>
                </div>

                {/* Microphone Icon */}
                <div className="microphone-icon">
                    🎤
                </div>
            </main>
        </div>
    );
};

export default Home;