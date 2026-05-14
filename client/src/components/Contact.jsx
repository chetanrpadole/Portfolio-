// Contact.jsx
import { useEffect, useRef } from "react";

function Contact() {
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
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "60px" }} className="reveal">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title">
                        Let's{" "}
                        <span className="gradient-text">work together</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Contact Information</h3>
                        <p>
                            Feel free to reach out through the form or via any of
                            the methods below. I typically respond within 24 hours.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-method-icon">✉</div>
                                <div>
                                    <div className="contact-method-label">Email</div>
                                    <div className="contact-method-value">
                                        chetan@example.com
                                    </div>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-icon">📍</div>
                                <div>
                                    <div className="contact-method-label">Location</div>
                                    <div className="contact-method-value">
                                        India
                                    </div>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-icon">💼</div>
                                <div>
                                    <div className="contact-method-label">Availability</div>
                                    <div className="contact-method-value">
                                        Open for opportunities
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-name">Your Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                className="form-input"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-email">Your Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                className="form-input"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-subject">Subject</label>
                            <input
                                id="contact-subject"
                                type="text"
                                className="form-input"
                                placeholder="Project inquiry"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                className="form-textarea"
                                rows="5"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="form-submit">
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;