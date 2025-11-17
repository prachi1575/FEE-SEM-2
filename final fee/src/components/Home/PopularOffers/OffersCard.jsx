import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OffersCard.module.css';

const OfferCard = ({ offer }) => {
    const isSkill = offer.type === 'Skill';
    const tagClassName = isSkill ? styles.tagSkill : styles.tagItem;

    return (
        <Link to={`/item/${offer.id}`} className={styles.card}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${offer.imageUrl})` }}
            ></div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{offer.title}</h3>
                    <span className={`${styles.tag} ${tagClassName}`}>
                        {offer.type}
                    </span>
                </div>
                <div className={styles.user}>
                    <span className="material-symbols-outlined">person</span>
                    <span className={styles.username}>{offer.user.name}</span>
                </div>
            </div>
        </Link>
    );
};
export default OfferCard;