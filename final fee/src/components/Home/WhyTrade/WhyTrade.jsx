import React from 'react';
import styles from '../HowItWorks/HowItWorks.module.css'; // Re-using HowItWorks styles

const WhyTrade = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Why Trade Instead of Buy?</h2>
                <p className={styles.subtitle}>
                    Discover the benefits of joining a circular economy on campus.
                </p>
            </div>
            <div className={styles.grid}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">savings</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Save Money</h3>
                        <p className={styles.cardDescription}>
                            Your skills and unused items are your new currency.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Learn New Skills</h3>
                        <p className={styles.cardDescription}>
                            Exchange what you're good at for a new talent.
                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Eco-Friendly</h3>
                        <p className={styles.cardDescription}>
                            Promote sustainability and reduce waste on campus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyTrade;