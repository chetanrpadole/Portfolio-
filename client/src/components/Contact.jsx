// Contact.jsx

function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-text mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-text-secondary max-w-2xl">
                        I'm currently open for new opportunities. Whether you have a question, 
                        a project idea, or just want to connect, feel free to reach out.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    
                    {/* Left: Contact Info */}
                    <div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-text-muted font-semibold mb-2">Email</h3>
                                <a 
                                    href="mailto:chetan31padole@gmail.com" 
                                    className="text-lg text-text hover:text-accent transition-colors"
                                >
                                    chetan31padole@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-text-muted font-semibold mb-2">Location</h3>
                                <p className="text-lg text-text">
                                    Pune, India
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-text-muted font-semibold mb-2">Availability</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-lg text-text">
                                        Open for work
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div>
                        <form className="bg-bg-card border border-border p-8 rounded-lg flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                                    Name
                                </label>
                                <input 
                                    id="name"
                                    type="text" 
                                    placeholder="What's your name?"
                                    className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-text text-sm focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                                    Email
                                </label>
                                <input 
                                    id="email"
                                    type="email" 
                                    placeholder="Where can I reply?"
                                    className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-text text-sm focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    rows="4"
                                    placeholder="What's on your mind?"
                                    className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-text text-sm focus:outline-none focus:border-accent transition-colors resize-y"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="mt-2 w-full bg-accent text-bg font-medium py-2.5 rounded-md hover:bg-accent-hover transition-colors"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;