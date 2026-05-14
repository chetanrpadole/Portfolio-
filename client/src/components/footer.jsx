// Footer.jsx

function Footer() {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#" className="footer-brand">
                        Chetan<span className="logo-dot">.</span>
                    </a>

                    <div className="footer-links">
                        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
                        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">⌘</a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                        <a href="mailto:chetan@example.com" aria-label="Email">✉</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} Chetan Padole. Built with{" "}
                        <span className="footer-heart">♥</span> and React.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;