import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
    const [expandedItem, setExpandedItem] = useState(0);

    const experiences = [
        {
            id: 1,
            title: "Intern Web Developer @ Tritux Group",
            company: "Tritux Group",
            period: "Feb 2025 - May 2025",
            location: "Tunisia",
            website: "trituxgroup.com",
            description: "Contributed to web projects and worked with modern stacks including React and FastAPI. Also implemented CI with GitHub Actions and explored AI/ML models (TensorFlow) for prototype features.",
            tags: ["React", "FastAPI", "GitHub Actions", "TensorFlow", "AI/ML"]
        },
        {
            id: 2,
            title: "UI/UX Designer @ BMERCE",
            company: "BMERCE",
            period: "Aug 2024 - Oct 2024",
            location: "Tunisia",
            website: "bmerce.com",
            description: "Worked on UI/UX design using Figma and Adobe Photoshop; created wireframes, visual assets and high-fidelity prototypes for e-commerce interfaces.",
            tags: ["Figma", "Adobe Photoshop", "UI Design"]
        },
        {
            id: 3,
            title: "Web Developer @ BH BANK",
            company: "BH BANK",
            period: "Jan 2024 - Feb 2024",
            location: "Tunisia",
            website: "bhbank.com.tn",
            description: "Worked as a web developer on internal banking tools using classic web stack and local dev environment (XAMPP). Implemented front-end pages and back-end scripts.",
            tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"]
        },
        {
            id: 4,
            title: "Intern Web Developer @ SMART ERP ODOO",
            company: "MANOUBA TUNISIE",
            period: "Jan 2023 - Feb 2023",
            location: "Manouba, Tunisia",
            website: "smarterp-odoo.com",
            description: "Focused on mastering the Odoo ERP software (Odoo modules, configuration and customization) and supporting ERP-related development tasks.",
            tags: ["Odoo", "ERP", "Python", "Customization"],
            isExpanded: true
        }
    ];

    const toggleExpansion = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className="experience-container" id="experience">
            <div className="experience-content">
                <h1 className="experience-title">Professional Experience</h1>
                
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`experience-item ${expandedItem === exp.id ? 'expanded' : ''}`}>
                            <div 
                                className="experience-header"
                                onClick={() => toggleExpansion(exp.id)}
                            >
                                <div className="experience-main-info">
                                    <h3 className="experience-title-text">{exp.title}</h3>
                                    <span className="experience-period">{exp.period}</span>
                                </div>
                                <div className="expand-icon">
                                    {expandedItem === exp.id ? '−' : '+'}
                                </div>
                            </div>
                            
                            {expandedItem === exp.id && (
                                <div className="experience-details">
                                    <div className="experience-location-info">
                                        <div className="location-item">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                                            </svg>
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="website-item">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                            <span>{exp.website}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="experience-content-details">
                                        <p className="experience-description">{exp.description}</p>
                                        
                                        {exp.company === 'MANOUBA TUNISIE' && (
                                            <div className="company-logo">
                                                <div className="logo-placeholder">
                                                    <span>SMART ERP</span>
                                                    <span>ODOO</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="experience-tags">
                                            {exp.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="experience-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
