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
        <section id="projects" className="py-24 border-t border-border/50 relative">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                <div className="mb-16 md:text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text via-text to-text-secondary mb-6">
                        Featured Work
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        A selection of my recent projects. I focus on building applications that solve real 
                        problems, prioritizing clean code architecture and responsive user interfaces.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative flex flex-col bg-bg-card/40 backdrop-blur-md border border-border/60 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Accent Top Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 flex-grow flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-bg border border-border rounded-xl group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    {project.featured && (
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-text group-hover:text-white transition-colors mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                                    {project.desc}
                                </p>

                                {/* Key Features */}
                                <div className="mb-8">
                                    <ul className="text-sm text-text-muted space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent/70">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span className="group-hover:text-text-secondary transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 bg-bg/50 text-text-muted group-hover:text-text-secondary text-xs font-medium rounded-md border border-border group-hover:border-accent/30 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-6 mt-auto pt-6 border-t border-border/50">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors group/link"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:-translate-y-0.5 transition-transform">
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
                                            className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors group/link"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform">
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