// Skills.jsx
import { useEffect, useRef } from "react";

function Skills() {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const categories = [
        {
            icon: "🎨",
            title: "Frontend",
            skills: [
                { icon: "⚛️", name: "React" },
                { icon: "📜", name: "JavaScript" },
                { icon: "🌐", name: "HTML5" },
                { icon: "🎨", name: "CSS3" },
                { icon: "💨", name: "Tailwind CSS" },
            ],
        },
        {
            icon: "⚙️",
            title: "Backend",
            skills: [
                { icon: "🟢", name: "Node.js" },
                { icon: "🚂", name: "Express.js" },
                { icon: "🍃", name: "MongoDB" },
                { icon: "🔗", name: "REST APIs" },
            ],
        },
        {
            icon: "🛠️",
            title: "Tools & Others",
            skills: [
                { icon: "📦", name: "Git" },
                { icon: "🐙", name: "GitHub" },
                { icon: "⚡", name: "Vite" },
                { icon: "🖥️", name: "VS Code" },
                { icon: "▲", name: "Vercel" },
            ],
        },
    ];

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="skills-header reveal">
                    <span className="section-label">My Skills</span>
                    <h2 className="section-title">
                        Technologies I{" "}
                        <span className="gradient-text">work with</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Here are the technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="skills-categories stagger-children">
                    {categories.map((cat, i) => (
                        <div key={i} className="skill-category reveal">
                            <div className="category-icon">{cat.icon}</div>
                            <h3 className="category-title">{cat.title}</h3>
                            <div className="skill-list">
                                {cat.skills.map((skill, j) => (
                                    <div key={j} className="skill-item">
                                        <span className="skill-icon">
                                            {skill.icon}
                                        </span>
                                        <span className="skill-name">
                                            {skill.name}
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