// Navbar.jsx
import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ["about", "skills", "projects", "contact"];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 200) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                <a href="#" className="navbar-logo">
                    Chetan<span className="logo-dot">.</span>
                </a>

                <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeSection === item.id ? "active" : ""}
                            onClick={(e) => handleNavClick(e, item.id)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="navbar-cta"
                        onClick={(e) => handleNavClick(e, "contact")}
                    >
                        Let's Talk
                    </a>
                </div>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;