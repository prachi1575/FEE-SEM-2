import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ title, value, icon }) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            <p className={styles.value}>
                {value}
                {icon && (
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        {icon}
                    </span>
                )}
            </p>
        </div>
    );
};

export default StatCard;