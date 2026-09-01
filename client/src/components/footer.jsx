// Footer.jsx

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border/50 bg-bg-card">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-text mb-1">
                        Chetan Padole
                    </h3>
                    <p className="text-text-muted text-sm">
                        Full Stack Developer
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-border/50">
                    
                    <div className="flex items-center gap-6">
                        <a 
                            href="https://github.com/chetanrpadole" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/chetanrpadole/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="mailto:chetan31padole@gmail.com" 
                            aria-label="Email"
                            className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
                        >
                            Email
                        </a>
                    </div>

                    <p className="text-text-muted text-sm">
                        © {currentYear} Chetan Padole. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;