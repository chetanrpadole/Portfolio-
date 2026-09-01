// Experience.jsx

function Experience() {
    const experiences = [
        {
            company: "Kiran Academy",
            location: "Pune",
            position: "Full Stack Web Development Intern",
            duration: "Jun 2025 – Dec 2025",
            achievements: [
                "Developed full-stack web applications using the MERN stack",
                "Built REST APIs and integrated them with frontend applications",
                "Worked on database design and optimization with MongoDB",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-text mb-4">
                        Experience
                    </h2>
                    <p className="text-text-secondary max-w-2xl">
                        My professional experience in full-stack web development.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="bg-bg-card border border-border rounded-lg p-8 hover:border-border-hover transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-text">
                                        {exp.position}
                                    </h3>
                                    <p className="text-text-secondary">
                                        {exp.company} • {exp.location}
                                    </p>
                                </div>
                                <span className="text-sm text-text-muted font-mono">
                                    {exp.duration}
                                </span>
                            </div>

                            <ul className="space-y-2 text-text-secondary">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Experience;
