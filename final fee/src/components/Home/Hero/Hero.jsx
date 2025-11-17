import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    const imageUrl = "https://images.unsplash.com/photo-1543269865-cbf4273282f7?auto=format&fit=crop&w=800&q=80";

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.headings}>
                        <h1 className={styles.title}>
                            Swap Skills. Trade Things. Build Connections.
                        </h1>
                        <h2 className={styles.subtitle}>
                            Join the university community to exchange skills and goods, save money, and meet new people.
                        </h2>
                    </div>
                    <div className={styles.buttonGroup}>
                        <Link to="/signup">
                            <button className={`${styles.button} ${styles.primaryButton}`}>
                                Start Trading
                            </button>
                        </Link>
                        <Link to="/explore">
                            <button className={`${styles.button} ${styles.outlineButton}`}>
                                Explore Offers
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                        role="img"
                        aria-label="Diverse students collaborating"
                    ></div>
                </div>
            </div>
        </section>
    );
};
export default Hero;