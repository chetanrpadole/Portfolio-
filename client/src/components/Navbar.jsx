// Navbar.jsx
import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const links = ["about", "skills", "projects", "contact"];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-bg/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#"
                    className="text-text font-bold text-lg tracking-tight"
                >
                    chetan<span className="text-accent">.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={(e) => scrollTo(e, link)}
                            className="text-sm text-text-muted hover:text-text transition-colors capitalize"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-text-secondary transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-text-secondary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-text-secondary transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={(e) => scrollTo(e, link)}
                            className="text-sm text-text-secondary hover:text-text transition-colors capitalize"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;