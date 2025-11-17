import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OfferCard.module.css';

const OfferCard = ({ offer }) => {
    const isSkill = offer.type === 'Skill';
    const tagClassName = isSkill ? styles.tagSkill : styles.tagItem;

    return (
        <div className={styles.card}>
            <Link to={`/offers/${offer.id}`} className={styles.imageLink}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${offer.imageUrl})` }}
                    role="img"
                    aria-label={offer.title}
                ></div>
            </Link>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link to={`/offers/${offer.id}`}>
                        <h3 className={styles.title}>{offer.title}</h3>
                    </Link>
                    <span className={`${styles.tag} ${tagClassName}`}>
                        {offer.type}
                    </span>
                </div>
                <div className={styles.user}>
                    <img alt={`${offer.user.name}'s avatar`} className={styles.avatar} src={offer.user.avatarUrl} />
                    <span className={styles.username}>{offer.user.name}</span>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;