import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../GoogleLogo';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        //   const response = await api.login({ email, password });
        //   auth.login(response.token, response.user);
        //   navigate('/'); // Redirect to dashboard
        // } catch (err) {
        //   setError(err.message || 'Login failed. Please check your credentials.');
        // } finally {
        //   setLoading(false);
        // }
        console.log("Login attempt:", { email, password });
        setTimeout(() => {
            setLoading(false);
            // Simulating error
            // setError("Invalid email or password.");
            // Simulating success
            navigate('/');
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
                            <p className={styles.formTitle}>Welcome Back!</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <label className={styles.label}>
                                <p className={styles.labelText}>Email Address</p>
                                <input
                                    className={styles.input}
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            {/* Password Input */}
                            <label className={styles.label}>
                                <div className={styles.passwordHeader}>
                                    <p className={styles.labelText}>Password</p>
                                    <Link className={styles.forgotPassword} to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        className={styles.passwordInput}
                                        placeholder="Enter your password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        className={styles.eyeButton}
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </label>

                            {error && <p className={styles.errorText}>{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`${styles.button} ${styles.primaryButton} ${styles.submitButton}`}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
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
                            Need an account? <Link className={styles.footerLink} to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;