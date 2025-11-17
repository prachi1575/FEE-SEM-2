import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TradeCard.module.css';

const TradeCard = ({ trade }) => {
    // Logic to determine style class based on type
    let tagClass;
    if (trade.type === 'OFFER') tagClass = styles.tagOffer;
    else if (trade.type === 'REQUEST') tagClass = styles.tagRequest;
    else tagClass = styles.tagSwap; // Fallback for SWAP

    return (
        <div className={styles.card}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${trade.imageUrl})` }}
                aria-label={trade.title}
            ></div>
            <div className={styles.content}>
                <p className={tagClass}>
                    {trade.type}
                </p>
                <h3 className={styles.title}>{trade.title}</h3>
                <div className={styles.user}>
                    <img
                        className={styles.avatar}
                        src={trade.user.avatarUrl}
                        alt={`Avatar of ${trade.user.name}`}
                    />
                    <p className={styles.username}>{trade.user.name}</p>
                </div>
                <Link to={`/item/${trade.id}`} className={styles.button}>
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default TradeCard;