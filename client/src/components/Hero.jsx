// Hero.jsx
import { useState, useEffect } from "react";

function Hero() {
    const roles = [
        "MERN Stack Developer",
        "Frontend Engineer",
        "React Developer",
        "Full-Stack Builder",
    ];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.slice(0, displayText.length - 1)
                            : currentRole.slice(0, displayText.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero" id="hero">
            {/* Background effects */}
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Available for work
                </div>

                <h1 className="hero-name">
                    Hi, I'm{" "}
                    <span className="gradient-text">Chetan</span>
                </h1>

                <p className="hero-role">
                    I'm a <span className="typed-text">{displayText}</span>
                </p>

                <p className="hero-desc">
                    I craft modern, performant web applications with clean code
                    and pixel-perfect interfaces. Passionate about turning ideas
                    into elegant digital experiences.
                </p>

                <div className="hero-buttons">
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={(e) => handleScroll(e, "projects")}
                    >
                        ✦ View My Work
                    </a>
                    <a
                        href="#contact"
                        className="btn-secondary"
                        onClick={(e) => handleScroll(e, "contact")}
                    >
                        Get in Touch →
                    </a>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        ⌘
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        in
                    </a>
                    <a href="mailto:chetan@example.com" aria-label="Email">
                        ✉
                    </a>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}

export default Hero;