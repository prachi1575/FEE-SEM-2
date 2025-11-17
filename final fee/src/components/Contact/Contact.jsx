import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // --- TODO: Backend API Call ---
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

        console.log("Contact Form Submitted:", formData);

        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>Have questions or feedback? We'd love to hear from you.</p>
            </div>

            <div className={styles.contentGrid}>
                {/* Contact Info */}
                <div className={styles.infoColumn}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitle}>Contact Information</h3>

                        <div className={styles.infoItem}>
                            <span className="material-symbols-outlined">location_on</span>
                            <div>
                                <p className={styles.infoLabel}>Our Office</p>
                                <p className={styles.infoValue}>123 University Ave, Student Union Bldg<br />Cambridge, MA 02138</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className="material-symbols-outlined">mail</span>
                            <div>
                                <p className={styles.infoLabel}>Email Us</p>
                                <a href="mailto:support@tradebridge.com" className={styles.infoLink}>support@tradebridge.com</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className="material-symbols-outlined">call</span>
                            <div>
                                <p className={styles.infoLabel}>Call Us</p>
                                <p className={styles.infoValue}>+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqPreview}>
                        <h4 className={styles.faqTitle}>Frequently Asked Questions</h4>
                        <ul className={styles.faqList}>
                            <li><a href="#">How do I verify my student email?</a></li>
                            <li><a href="#">Is TradeBridge free to use?</a></li>
                            <li><a href="#">How do I report a user?</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formColumn}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <span className="material-symbols-outlined">check_circle</span>
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                                <button
                                    type="button"
                                    className={styles.resetButton}
                                    onClick={() => setStatus('idle')}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={styles.input}
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.input}
                                        placeholder="your.email@university.edu"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject" className={styles.label}>Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className={styles.select}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select a topic...</option>
                                        <option value="Support">General Support</option>
                                        <option value="Report">Report a Listing</option>
                                        <option value="Feedback">Product Feedback</option>
                                        <option value="Partnership">Partnership Inquiry</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;