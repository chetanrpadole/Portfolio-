// Hero.jsx

function Hero() {
    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center pt-16" id="hero">
            <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">

                {/* Left — Intro */}
                <div>
                    <p className="text-accent font-mono text-sm mb-4">
                        Hi, my name is
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-2">
                        Chetan Padole
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-text-muted mb-6">
                        MERN Stack Developer
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
                        I build full-stack web applications with React, Node.js, Express,
                        and MongoDB. Focused on writing clean code, building practical
                        features, and shipping things that actually work.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            onClick={(e) => scrollTo(e, "projects")}
                            className="px-5 py-2.5 bg-accent text-bg font-medium text-sm rounded-md hover:bg-accent-hover transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://github.com/chetanrpadole"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 border border-border text-text-secondary text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => scrollTo(e, "contact")}
                            className="px-5 py-2.5 border border-border text-text-secondary text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right — Terminal block */}
                <div className="hidden md:block">
                    <div className="bg-bg-card border border-border rounded-lg overflow-hidden">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                            <span className="w-3 h-3 rounded-full bg-red-500/70" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-3 text-xs text-text-muted font-mono">
                                developer.js
                            </span>
                        </div>
                        {/* Code content */}
                        <div className="p-5 font-mono text-sm leading-7">
                            <p>
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-text">developer</span>{" "}
                                <span className="text-text-muted">=</span>{" "}
                                <span className="text-text-muted">{"{"}</span>
                            </p>
                            <p className="pl-5">
                                <span className="text-accent">name</span>
                                <span className="text-text-muted">:</span>{" "}
                                <span className="text-amber-300">'Chetan Padole'</span>
                                <span className="text-text-muted">,</span>
                            </p>
                            <p className="pl-5">
                                <span className="text-accent">role</span>
                                <span className="text-text-muted">:</span>{" "}
                                <span className="text-amber-300">'MERN Stack Developer'</span>
                                <span className="text-text-muted">,</span>
                            </p>
                            <p className="pl-5">
                                <span className="text-accent">stack</span>
                                <span className="text-text-muted">:</span>{" "}
                                <span className="text-text-muted">[</span>
                                <span className="text-amber-300">'React'</span>
                                <span className="text-text-muted">,</span>{" "}
                                <span className="text-amber-300">'Node'</span>
                                <span className="text-text-muted">,</span>{" "}
                                <span className="text-amber-300">'Express'</span>
                                <span className="text-text-muted">,</span>{" "}
                                <span className="text-amber-300">'MongoDB'</span>
                                <span className="text-text-muted">]</span>
                                <span className="text-text-muted">,</span>
                            </p>
                            <p className="pl-5">
                                <span className="text-accent">location</span>
                                <span className="text-text-muted">:</span>{" "}
                                <span className="text-amber-300">'Pune, India'</span>
                                <span className="text-text-muted">,</span>
                            </p>
                            <p className="pl-5">
                                <span className="text-accent">hireable</span>
                                <span className="text-text-muted">:</span>{" "}
                                <span className="text-green-400">true</span>
                            </p>
                            <p>
                                <span className="text-text-muted">{"}"}</span>
                                <span className="text-text-muted">;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;