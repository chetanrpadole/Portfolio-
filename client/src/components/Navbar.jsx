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
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const links = ["about", "skills", "projects"];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-bg/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent"
            }`}
        >
            <div 
                className={`max-w-5xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
                    scrolled ? "h-16" : "h-24"
                }`}
            >
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => scrollTo(e, "hero")}
                    className="text-2xl font-black tracking-tighter flex items-center gap-0.5 group focus:outline-none"
                >
                    <span className="text-text group-hover:text-white transition-colors duration-300">
                        chetan
                    </span>
                    <span className="text-accent animate-pulse">.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={(e) => scrollTo(e, link)}
                            className="relative text-sm font-medium text-text-secondary hover:text-white transition-colors capitalize group py-2"
                        >
                            {link}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 ease-out group-hover:w-full rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, "contact")}
                        className="ml-2 px-5 py-2 text-sm font-medium text-bg bg-accent hover:bg-accent-hover transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-text transition-all duration-300 rounded-full ${menuOpen ? "rotate-45 translate-y-2 bg-accent" : "group-hover:bg-accent"}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-all duration-300 rounded-full ${menuOpen ? "opacity-0 translate-x-2" : "group-hover:bg-accent"}`} />
                    <span className={`block w-6 h-0.5 bg-text transition-all duration-300 rounded-full ${menuOpen ? "-rotate-45 -translate-y-2 bg-accent" : "group-hover:bg-accent"}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-border/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 ${
                    menuOpen ? "max-h-80 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={(e) => scrollTo(e, link)}
                            className="text-lg font-medium text-text-secondary hover:text-white hover:scale-110 transition-all capitalize"
                        >
                            {link}
                        </a>
                    ))}
                     <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, "contact")}
                        className="mt-2 px-8 py-2.5 text-sm font-bold tracking-wide text-bg bg-accent hover:bg-accent-hover transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                    >
                        LET'S TALK
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;