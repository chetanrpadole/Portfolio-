// Skills.jsx

function Skills() {
    const categories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: "Comfortable" },
                { name: "JavaScript (ES6+)", level: "Comfortable" },
                { name: "HTML & CSS", level: "Comfortable" },
                { name: "Tailwind CSS", level: "Comfortable" },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: "Comfortable" },
                { name: "Express.js", level: "Comfortable" },
                { name: "REST APIs", level: "Comfortable" },
                { name: "JWT Authentication", level: "Learning" },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "MongoDB", level: "Comfortable" },
                { name: "Mongoose", level: "Comfortable" },
                { name: "Aggregation Pipeline", level: "Exploring" },
            ],
        },
        {
            title: "Tools & Workflow",
            skills: [
                { name: "Git & GitHub", level: "Comfortable" },
                { name: "Postman", level: "Comfortable" },
                { name: "VS Code", level: "Comfortable" },
                { name: "Vite", level: "Comfortable" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-bg-card/30 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-text mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-text-secondary max-w-2xl">
                        A breakdown of the tools and technologies I use to build applications. 
                        I focus heavily on the MERN stack but remain adaptable to whatever the project requires.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {categories.map((cat, i) => (
                        <div 
                            key={i} 
                            className="bg-bg-card border border-border rounded-lg p-6 hover:border-border-hover transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-text mb-6 pb-2 border-b border-border/50">
                                {cat.title}
                            </h3>
                            <div className="flex flex-col gap-3">
                                {cat.skills.map((skill, j) => (
                                    <div key={j} className="flex justify-between items-center group">
                                        <span className="text-text-secondary group-hover:text-text transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs font-mono text-text-muted px-2 py-0.5 rounded bg-bg border border-border/50">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;