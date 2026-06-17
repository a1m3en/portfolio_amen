import React, { useState } from "react";
import "./Work.css";

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "ecommerce-shopify-store",
            category: "shopify",
            description: "A modern and responsive e-commerce web application designed for browsing and purchasing footwear online. The platform provides a smooth shopping experience with a clean UI, fast navigation, and product-focused layout.",
            technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
            image: "/images/1.jpg",
            images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg"],
            year: "2026"
        },
        {
            id: 2,
            title: "ecommerce-shoes",
            category: "web",
            description: "A modern and responsive e-commerce web application designed for browsing and purchasing footwear online. The platform provides a smooth shopping experience with a clean UI, fast navigation, and product-focused layout.",
            technologies: ["React JS", "Tailwind CSS"],
            image: "/images/shoes.jpg",
            liveUrl: "https://ecommerce-shoes-sooty.vercel.app/",
            githubUrl: "https://github.com/amenallahbejaoui-rgb/ecommerce-shoes",
            year: "2026"
        },
        {
            id: 3,
            title: "Humanovators",
            category: "web",
            description: "Official website for Humanovators, an entrepreneurship event by IEEE ENSIT SIGHT and IEEE ENSIT Student Branch focused on sustainable innovation and social impact.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            image: "/images/humanovators.jpg",
            liveUrl: "https://humanavators.vercel.app/",
            githubUrl: "https://github.com/amenallahbejaoui-rgb/humanavators",
            year: "2026"
        },
        {
            id: 4,
            title: "Tomorrow Land",
            category: "web",
            description: "Tomorrow Land is an innovation hub where tech meets creativity. Our mission is to bridge the gap between current skills and the digital future by exploring the gaming ecosystem from every angle.",
            technologies: ["React JS", "Tailwind CSS"],
            image :"/images/tomorrow_land.jpg",
            liveUrl: "https://tomorrow-land-3-0.vercel.app/",
            githubUrl: "https://github.com/amenallahbejaoui-rgb/tomorrow-land-3.0",
            year: "2026"
        },
        {
            id: 5,
            title: "IEEE SB ENSIT",
            category: "web",
            description: "The main website of IEEE SB ENSIT describing our ENSIT Student Branch, founded in 2013 and active ever since. It now gathers over 120 members, with the number increasing continuously. We believe in IEEE's causes and values. Fostering technological innovation for the benefit of humanity is a mission we want to take part in. Enhancing our soft skills and enlarging our technical knowledge for better tomorrow engineers and researchers, a better Tunisia, and a better world is our vision.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            image: "/images/ieee_sb.jpg",
            liveUrl: "https://ensit.ieee.tn/",
            year: "2026"
        },
        {
            id: 6,
            title: "Tech Services Agency",
            category: "web",
            description: "Full-service web development agency integrating modern technology to deliver best-in-class client experience.",
            technologies: ["React.js", "Tailwind", "Web3"],
            image: "/images/agency.jpg",
            liveUrl: "https://my-agency-psi-three.vercel.app",
            githubUrl: "https://github.com/a1m3en/my-agency",
            year: "2024"
        },
       
        {
            id: 7,
            title: "J-IT Tunisia Engineering",
            category: "web",
            description: "A leading offshore company based in Tunisia, specializing in high-quality software testing, validation, and product management services with deep expertise in the automotive sector.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: "/images/jit.jpg",
            liveUrl: "https://jit-tunisia.com",
            githubUrl: "https://github.com/a1m3en/jit",
            year: "2024"
        },
        {
            id: 8,
            title: "Customer Feedback App",
            category: "web",
            description: "Web application for collecting and analyzing customer feedback.",
            technologies: ["React.js", "Bootstrap"],
            image: "/images/feedback.jpg",
            liveUrl: "https://a1m3en.github.io/Customer_Feedback/",
            githubUrl: "https://github.com/a1m3en/Customer_Feedback",
            year: "2023"
        },
      
        {
            id: 9,
            title: "Evaluate Companies",
            category: "web",
            description: "Interactive tool to evaluate and compare companies — live demo available.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: "/images/tech.jpg",
            liveUrl: "https://a1m3en.github.io/evaluate-companies/",
            githubUrl: "https://github.com/a1m3en/evaluate-companies",
            year: "2024"
        }
    ];

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Development" },
        { id: "dashboard", label: "Dashboards" },
        {id : "shopify", label : "Shopify"}
    ];

    const filteredProjects = selectedCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const openGallery = (images) => {
        setGalleryImages(images);
        setCurrentImageIndex(0);
        setGalleryOpen(true);
    };

    const closeGallery = () => {
        setGalleryOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="work-container" id="work">
            {/* Header Section */}
            <div className="work-header">
                <div className="section-number">03</div>
                <h1 className="work-title">
                    <span className="title-main">My Work</span>
                    <span className="title-accent">_</span>
                </h1>
                <p className="work-subtitle">
                    A collection of projects I've worked on, showcasing various technologies and solutions.
                </p>
            </div>

            {/* Filter Categories */}
            <div className="work-filters">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <span className="filter-number">
                            {String(categories.indexOf(category) + 1).padStart(2, '0')}
                        </span>
                        <span className="filter-text">{category.label}</span>
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${project.image ? 'has-image' : ''}`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        style={{ '--delay': `${index * 0.1}s` }}
                    >
                        {/* Project Image */}
                        <div
                            className="project-image"
                            style={{
                                background: `url(${process.env.PUBLIC_URL}${project.image}) center/cover no-repeat`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="image-placeholder">
                                <span className="project-icon">{(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) ? '' : '🚀'}</span>
                            </div>
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.images && project.images.length > 0 ? (
                                        <button
                                            onClick={() => openGallery(project.images)}
                                            className="project-link gallery-link"
                                        >
                                            <span>View Gallery</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
                                            </svg>
                                        </button>
                                    ) : (
                                        <>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link live-link"
                                            >
                                                <span>Live Demo</span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                                                </svg>
                                            </a>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link github-link"
                                                >
                                                    <span>GitHub</span>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="project-info">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-year">{project.year}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies && project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="project-decorations">
                            <div className="decoration-dot"></div>
                            <div className="decoration-line"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="work-footer">
                <div className="footer-stats">
                    <div className="stat-item">
                        <span className="stat-number">{projects.length}+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Technologies Used</span>
                    </div>
                </div>
                <div className="footer-cta">
                    <p>Interested in working together?</p>
                    <button className="cta-button">
                        <span>Let's Talk</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Image Gallery Modal */}
            {galleryOpen && (
                <div className="gallery-modal" onClick={closeGallery}>
                    <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-close" onClick={closeGallery}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                        <button className="gallery-nav gallery-prev" onClick={prevImage}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            </svg>
                        </button>
                        <img 
                            src={process.env.PUBLIC_URL + galleryImages[currentImageIndex]} 
                            alt={`Image ${currentImageIndex + 1}`}
                            className="gallery-image"
                        />
                        <button className="gallery-nav gallery-next" onClick={nextImage}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </button>
                        <div className="gallery-counter">
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Work;