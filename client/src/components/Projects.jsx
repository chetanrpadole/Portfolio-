// Projects.jsx
import { useEffect, useRef } from "react";

function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll(".reveal").forEach((el) => {
                            el.classList.add("visible");
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            emoji: "🛒",
            title: "E-Commerce Website",
            desc: "A full-stack MERN e-commerce platform with product listings, cart management, user authentication, and payment integration.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/",
            live: "#",
        },
        {
            emoji: "✅",
            title: "Task Manager",
            desc: "A productivity-focused task management application with user authentication, CRUD operations, and an intuitive dashboard.",
            tags: ["React", "Express", "MongoDB", "JWT"],
            github: "https://github.com/",
            live: "#",
        },
        {
            emoji: "💬",
            title: "Chat Application",
            desc: "A real-time messaging application built with Socket.io, featuring private rooms, online status, and message history.",
            tags: ["React", "Socket.io", "Node.js", "MongoDB"],
            github: "https://github.com/",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="projects-header reveal">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">
                        Featured{" "}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        A selection of projects that showcase my skills and passion for development.
                    </p>
                </div>

                <div className="projects-grid stagger-children">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card reveal">
                            <div className="project-image">
                                {project.emoji}
                            </div>
                            <div className="project-body">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        ⌘ Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link-primary"
                                    >
                                        ↗ Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;