import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickActions.module.css';

const QuickActions = () => {
    return (
        <div className={styles.container}>
            <Link to="/create-listing?type=offer" className={`${styles.button} ${styles.primaryButton}`}>
                Create New Offer
            </Link>
            <Link to="/create-listing?type=request" className={`${styles.button} ${styles.secondaryButton}`}>
                Create New Request
            </Link>
            <Link to="/explore" className={`${styles.button} ${styles.secondaryButton}`}>
                Explore Matches
            </Link>
        </div>
    );
};

export default QuickActions;