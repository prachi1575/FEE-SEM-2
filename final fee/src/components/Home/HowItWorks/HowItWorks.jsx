import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>How TradeBridge Works</h2>
                <p className={styles.subtitle}>
                    A simple 3-step guide to get you started on your trading journey.
                </p>
            </div>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">add_circle</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Post an Offer/Request</h3>
                        <p className={styles.cardDescription}>
                            Let the community know what you're offering or looking for.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Find a Match</h3>
                        <p className={styles.cardDescription}>
                            Browse listings to find the perfect trading partner.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <span className="material-symbols-outlined">swap_horiz</span>
                    </div>
                    <div className={styles.cardText}>
                        <h3 className={styles.cardTitle}>Connect & Swap</h3>
                        <p className={styles.cardDescription}>
                            Chat securely, agree on terms, and make the exchange.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;