import React, { useState } from "react";
import "./Work.css";

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
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
            id: 2,
            title: "GitHub Repository Health",
            category: "web",
            description: "A dashboard to monitor and visualize the health and activity of GitHub repositories, including issues, pull requests, stars, and contributors.",
            technologies: ["React", "FastAPI", "GitHub API"],
            image: "/images/health.jpg",
            liveUrl: "https://github-health-dashboard.vercel.app", // Update with your live demo if available
            githubUrl: "https://github.com/a1m3en/github-repo-health", // Update with your actual repo if different
            year: "2025"
        },
        {
            id: 3,
            title: "AI Finance Dashboard",
            category: "dashboard",
            description: "An intelligent financial dashboard powered by AI, providing real-time analytics, insights, and predictive modeling for financial data management.",
            technologies: ["React", "Python", "AI/ML", "Chart.js", "TensorFlow"],
            image: "/images/dash.jpg",
            liveUrl: "https://ai-finance-dashboard.vercel.app",
            githubUrl: "https://github.com/a1m3en/AI-Finance-Dashboard",
            year: "2024"
        },
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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
        { id: "dashboard", label: "Dashboards" }
    ];

    const filteredProjects = selectedCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

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
                                {project.technologies.map((tech, techIndex) => (
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
        </div>
    );
};

export default Work;