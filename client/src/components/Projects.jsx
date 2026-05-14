// Projects.jsx

function Projects() {
    const projects = [
        {
            title: "Employee Management System",
            desc: "A full-stack MERN application for managing employee records, attendance tracking, and role-based access control. Features a secure REST API and a dashboard for analytics.",
            features: ["Role-based Auth", "Attendance Tracking", "Dashboard Analytics", "CRUD Operations"],
            tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
            github: "https://github.com/chetanrpadole/EMS",
            live: "https://ems-zeta-ten.vercel.app/",
            featured: true,
        },
        {
            title: "AI-Powered Career Counselling",
            desc: "An intelligent career guidance platform that uses AI to provide personalized career recommendations and skill assessments for students and professionals.",
            features: ["AI Integration", "Skill Assessments", "Learning Paths", "Responsive UI"],
            tags: ["React", "JavaScript", "HTML", "CSS"],
            github: "", // Left blank intentionally based on original data
            live: "https://prajwalsondawalek.netlify.app/",
            featured: false,
        },
        {
            title: "Personal Portfolio v1",
            desc: "The previous iteration of my developer portfolio featuring custom vanilla CSS glassmorphism, scroll-reveal animations, and a dynamic hero section.",
            features: ["Custom CSS Design System", "Intersection Observer", "Responsive Layout"],
            tags: ["React", "CSS", "Vite", "JavaScript"],
            github: "https://github.com/chetanrpadole/Portfolio-",
            live: "#",
            featured: false,
        },
    ];

    return (
        <section id="projects" className="py-24 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-text mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-text-secondary max-w-2xl">
                        A selection of my recent work. I focus on building applications that solve real 
                        problems, focusing on clean code architecture and responsive user interfaces.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col bg-bg-card border border-border rounded-lg overflow-hidden hover:border-border-hover transition-colors"
                        >
                            {/* Decorative top border */}
                            <div className="h-1 w-full bg-border group-hover:bg-accent transition-colors" />

                            <div className="p-6 md:p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                    {project.desc}
                                </p>

                                {/* Key Features */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-2">
                                        Key Features
                                    </h4>
                                    <ul className="text-sm text-text-muted space-y-1">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-accent/50" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i} 
                                            className="px-2.5 py-1 bg-bg text-text-muted text-xs rounded border border-border/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text transition-colors"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                            Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text transition-colors"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
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