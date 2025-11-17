import React from 'react';
import styles from './About.module.css';

// --- MOCK DATA ---
const teamMembers = [
    { id: 1, name: 'Sarah Jenkins', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'David Chen', role: 'Head of Product', image: 'https://i.pravatar.cc/150?img=11' },
    { id: 3, name: 'Maria Rodriguez', role: 'Community Manager', image: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'James Wilson', role: 'Lead Developer', image: 'https://i.pravatar.cc/150?img=12' },
];

const About = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Bridging the Gap on Campus</h1>
                    <p className={styles.heroSubtitle}>
                        TradeBridge is a student-first platform dedicated to building a sustainable, circular economy within universities. We believe in the power of sharing skills and resources.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statCard}>
                    <span className="material-symbols-outlined">group</span>
                    <h3 className={styles.statNumber}>5,000+</h3>
                    <p className={styles.statLabel}>Active Students</p>
                </div>
                <div className={styles.statCard}>
                    <span className="material-symbols-outlined">swap_horiz</span>
                    <h3 className={styles.statNumber}>12,500+</h3>
                    <p className={styles.statLabel}>Successful Trades</p>
                </div>
                <div className={styles.statCard}>
                    <span className="material-symbols-outlined">savings</span>
                    <h3 className={styles.statNumber}>$150k+</h3>
                    <p className={styles.statLabel}>Estimated Savings</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.missionContent}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.text}>
                        University life is expensive. Textbooks, electronics, and furniture add up quickly. Meanwhile, many students have skills—like tutoring, coding, or design—that go underutilized.
                    </p>
                    <p className={styles.text}>
                        TradeBridge was created to solve this disconnect. By allowing students to swap what they have (skills or items) for what they need, we foster a community of trust, sustainability, and financial freedom.
                    </p>
                </div>
                <div
                    className={styles.missionImage}
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80')" }}
                    aria-label="Students collaborating"
                ></div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>Meet the Team</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className={styles.teamCard}>
                            <div
                                className={styles.memberImage}
                                style={{ backgroundImage: `url(${member.image})` }}
                            ></div>
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;