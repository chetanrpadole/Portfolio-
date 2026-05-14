// About.jsx
import { useEffect, useRef } from "react";

function About() {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <div className="about-grid">
                    <div className="stagger-children">
                        <div className="reveal">
                            <span className="section-label">About Me</span>
                            <h2 className="section-title">
                                Crafting digital experiences with{" "}
                                <span className="gradient-text">passion & precision</span>
                            </h2>
                        </div>

                        <div className="about-text reveal">
                            <p>
                                I'm a dedicated MERN Stack Developer who loves
                                building full-stack web applications that are fast,
                                responsive, and user-friendly. With hands-on experience
                                in React, Node.js, Express.js, and MongoDB, I enjoy
                                turning complex problems into simple, beautiful
                                solutions.
                            </p>
                            <p>
                                I'm constantly learning new technologies and best
                                practices to deliver modern, scalable applications
                                that make a real impact.
                            </p>
                        </div>

                        <div className="about-stats reveal">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Year Exp</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual reveal">
                        <div className="about-code-block">
                            <div className="code-header">
                                <span className="code-dot"></span>
                                <span className="code-dot"></span>
                                <span className="code-dot"></span>
                            </div>
                            <pre>
<span className="code-keyword">const</span> <span className="code-property">chetan</span> <span className="code-bracket">=</span> <span className="code-bracket">{"{"}</span>{"\n"}
{"  "}<span className="code-property">name</span>: <span className="code-string">"Chetan Padole"</span>,{"\n"}
{"  "}<span className="code-property">role</span>: <span className="code-string">"MERN Stack Developer"</span>,{"\n"}
{"  "}<span className="code-property">skills</span>: <span className="code-bracket">[</span>{"\n"}
{"    "}<span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>,{"\n"}
{"    "}<span className="code-string">"Express"</span>, <span className="code-string">"MongoDB"</span>{"\n"}
{"  "}<span className="code-bracket">]</span>,{"\n"}
{"  "}<span className="code-property">passion</span>: <span className="code-string">"Building things"</span>,{"\n"}
{"  "}<span className="code-property">available</span>: <span className="code-value">true</span>{"\n"}
<span className="code-bracket">{"}"}</span>;{"\n"}
{"\n"}
<span className="code-comment">{"// Let's build something great!"}</span>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;