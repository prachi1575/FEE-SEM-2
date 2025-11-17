import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OfferCard.module.css';

const OfferCard = ({ listing }) => {
    const { id, title, user, type, imageUrl } = listing;

    return (
        <Link to={`/item/${id}`} className={styles.card}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
                role="img"
                aria-label={title}
            ></div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.user}>{user.name}</p>
                <span className={`${styles.tag} ${type === 'Skill' ? styles.tagSkill : styles.tagItem}`}>
                    {type}
                </span>
            </div>
        </Link>
    );
};

export default OfferCard;