// About.jsx

function About() {
    return (
        <section id="about" className="py-24 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl font-bold text-text mb-6">
                        About Me
                    </h2>
                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        <p>
                            I'm a self-taught developer who focuses on building full-stack applications. 
                            My journey into web development started with a curiosity about how things work 
                            under the hood, and it quickly grew into a focus on building practical, data-driven 
                            applications.
                        </p>
                        <p>
                            Currently, I spend most of my time working with the MERN stack (MongoDB, Express, React, Node.js). 
                            I enjoy the process of taking an idea, designing the database schema, building the API, 
                            and connecting it all to a clean, responsive frontend.
                        </p>
                        <p>
                            I prefer simple solutions over complex ones and value clean, readable code.
                            When I'm not coding, I'm usually exploring new tech or refining my existing projects.
                        </p>
                    </div>
                </div>

                {/* Quick Info & Learning */}
                <div className="flex flex-col justify-center">
                    <div className="bg-bg-card border border-border rounded-lg p-8">
                        <h3 className="text-lg font-semibold text-text mb-4">
                            Current Focus
                        </h3>
                        <ul className="space-y-3 text-text-secondary mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">▹</span>
                                <span>Building scalable RESTful APIs with Node & Express</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">▹</span>
                                <span>Creating responsive, component-driven UIs in React</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">▹</span>
                                <span>Managing state effectively without over-engineering</span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-text mb-4">
                            Currently Learning
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["TypeScript", "Next.js", "Docker"].map((tech) => (
                                <span 
                                    key={tech} 
                                    className="px-3 py-1 bg-bg text-text-muted text-sm rounded border border-border"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;