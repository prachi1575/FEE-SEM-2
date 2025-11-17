import React from 'react';
import styles from './Preview.module.css';

const LivePreview = ({ data }) => {
    const {
        title,
        description,
        category,
        exchangeFor,
        isOpenToAll,
        user
    } = data;

    const getExchangeText = () => {
        if (isOpenToAll) return "Open to any exchange";
        return exchangeFor || "[What you want in return]";
    };

    return (
        <div className={styles.card}>
            <div className={styles.imagePreview}>
                <span className={styles.imagePlaceholder}>[Image Preview]</span>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.tag}>
                        {category || 'CATEGORY'}
                    </div>
                    <div className={styles.location}>
                        <span className="material-symbols-outlined">location_on</span>
                        <span>Cambridge, MA</span>
                    </div>
                </div>

                <h3 className={styles.title}>
                    {title || '[Your Title Here]'}
                </h3>
                <p className={styles.description}>
                    {description || '[Your description will appear here...]'}
                </p>

                <div className={styles.exchangeSection}>
                    <p className={styles.exchangeTitle}>LOOKING FOR:</p>
                    <p className={styles.exchangeText}>
                        {getExchangeText()}
                    </p>
                </div>

                <div className={styles.userSection}>
                    <div
                        className={styles.avatar}
                        style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=5')` }}
                    ></div>
                    <span className={styles.username}>{user.name || 'Your Name'}</span>
                </div>
            </div>
        </div>
    );
};
export default LivePreview;