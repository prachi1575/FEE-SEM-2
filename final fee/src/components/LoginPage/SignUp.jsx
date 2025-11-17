import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../..//GoogleLogo';
import styles from './Login.module.css'; // Re-using login styles

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const heroImageUrl = "https://images.unsplash.com/photo-1556761175-577380e25942?auto=format&fit=crop&w=800&q=80";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // --- TODO: Backend API Call ---
        // try {
        //   const response = await api.signup({ email, password });
        //   navigate('/login'); // Redirect to login
        // } catch (err) {
        //   setError(err.message || 'Signup failed.');
        // } finally {
        //   setLoading(false);
        // }
        console.log("Sign up attempt:", { email, password });
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 1000);
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Left Column (Hero) */}
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Connect, Share, and Thrive.
                        </h1>
                        <h2 className={styles.heroSubtitle}>
                            Join TradeBridge to build a sharing ecosystem on your campus. Exchange goods and skills with fellow students.
                        </h2>
                    </div>
                    <div
                        className={styles.heroImage}
                        style={{ backgroundImage: `url(${heroImageUrl})` }}
                        role="img"
                        aria-label="Abstract geometric pattern"
                    ></div>
                </div>

                {/* Right Column (Form) */}
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <div className={styles.formHeader}>
                            <p className={styles.formTitle}>Create Account</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <label className={styles.label}>
                                <p className={styles.labelText}>Email Address</p>
                                <input
                                    className={styles.input}
                                    placeholder="Enter your university email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            {/* Password Input */}
                            <label className={styles.label}>
                                <p className={styles.labelText}>Password</p>
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        className={styles.passwordInput}
                                        placeholder="Create a strong password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>

                            {error && <p className={styles.errorText}>{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`${styles.button} ${styles.primaryButton} ${styles.submitButton}`}
                            >
                                {loading ? 'Creating...' : 'Sign Up'}
                            </button>
                        </form>

                        {/* "or" Separator */}
                        <div className={styles.separator}>
                            <hr className={styles.hr} />
                            <span className={styles.separatorText}>or</span>
                            <hr className={styles.hr} />
                        </div>

                        {/* Google Button */}
                        <button
                            onClick={() => console.log("Google Sign-In")}
                            className={`${styles.button} ${styles.secondaryButton} ${styles.googleButton}`}
                        >
                            <GoogleLogo />
                            <span className="truncate">Continue with Google</span>
                        </button>

                        <p className={styles.footerText}>
                            Already have an account? <Link className={styles.footerLink} to="/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default SignUp;