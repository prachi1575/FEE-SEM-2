import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemDetails.module.css';
import TradeCard from '../../DashBoard/TradeCard'; // Using the better TradeCard
import Spinner from '../../..//Spinner';

// --- MOCK DATA ---
const mockItem = {
    id: 1,
    title: 'Hardly Used Bicycle',
    type: 'Item',
    description: "Selling my city bike, which has been used for about a year. It's in great condition with only minor scratches. Perfect for getting around campus or for leisurely rides.",
    lookingFor: "Open to trading for graphic design tutoring sessions, a good quality acoustic guitar, or a recent model tablet. Cash offers also considered.",
    images: [
        'https://images.unsplash.com/photo-1507035899-6520111409a3?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1599054790240-9b6b776c448d?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1576632642907-89c066e4e5e4?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1621251347639-6a3f01f05779?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1571068233711-6f02604e6c27?auto=format&fit=crop&w=200&q=80',
    ],
    user: {
        id: 101,
        name: 'Alex Doe',
        university: 'State University',
        rating: 4.8,
        avatarUrl: 'https://i.pravatar.cc/150?img=12',
    },
};

// Using the same mock data from Dashboard
const mockRelatedItems = [
    { id: 2, type: 'OFFER', title: 'Web Design Tutoring', user: { name: 'Sarah P.', avatarUrl: 'https://i.pravatar.cc/150?img=1' }, imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=300&q=80' },
    { id: 3, type: 'REQUEST', title: 'Noise-Cancelling Headphones', user: { name: 'Mike T.', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
    { id: 4, type: 'OFFER', title: 'Graphic Calculator (TI-84)', user: { name: 'Chloe J.', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, imageUrl: 'https://images.unsplash.com/photo-1596496050807-0639e7c3aec4?auto=format&fit=crop&w=300&q=80' },
    { id: 5, type: 'REQUEST', title: 'Help with Public Speaking', user: { name: 'David L.', avatarUrl: 'https://i.pravatar.cc/150?img=4' }, imageUrl: 'https://images.unsplash.com/photo-1505199326284-93f7f20c10b2?auto=format&fit=crop&w=300&q=80' },
];
// --- END MOCK DATA ---

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [relatedItems, setRelatedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        // --- Simulate Backend Fetch ---
        // fetch(`/api/items/${itemId}`).then(res => res.json())...
        setTimeout(() => {
            setItem(mockItem);
            setRelatedItems(mockRelatedItems);
            setLoading(false);
        }, 500);
    }, [itemId]);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <Spinner />
            </div>
        );
    }

    if (!item) {
        return <div className={styles.loadingContainer}>Item not found.</div>;
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.breadcrumbs}>
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/explore">Explore</Link>
                <span>/</span>
                <span className={styles.breadCurrent}>{item.title}</span>
            </div>

            <div className={styles.grid}>
                {/* Left Column (Images) */}
                <div className={styles.imageColumn}>
                    <div
                        className={styles.mainImage}
                        style={{ backgroundImage: `url(${item.images[activeImageIndex]})` }}
                    ></div>
                    <div className={styles.thumbnailGrid}>
                        {item.images.map((img, index) => (
                            <div
                                key={index}
                                className={`${styles.thumbnail} ${index === activeImageIndex ? styles.thumbnailActive : ''}`}
                                style={{ backgroundImage: `url(${img})` }}
                                onClick={() => setActiveImageIndex(index)}
                                onMouseOver={() => setActiveImageIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Details) */}
                <div className={styles.detailsColumn}>
                    <div className={styles.userCard}>
                        <div className={styles.userCardContent}>
                            <div className={styles.userInfo}>
                                <div
                                    className={styles.userAvatar}
                                    style={{ backgroundImage: `url(${item.user.avatarUrl})` }}
                                ></div>
                                <div className={styles.userDetails}>
                                    <p className={styles.userName}>{item.user.name}</p>
                                    <p className={styles.userHandle}>{item.user.university}</p>
                                    <div className={styles.userRating}>
                                        <span className="material-symbols-outlined">star</span>
                                        <span>{item.user.rating}/5 stars</span>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/profile/${item.user.id}`} className={styles.profileButton}>
                                View Profile
                            </Link>
                        </div>
                    </div>

                    <div className={styles.itemInfo}>
                        <div className={styles.itemHeader}>
                            <h1 className={styles.itemTitle}>{item.title}</h1>
                            <span className={styles.itemTag}>{item.type}</span>
                        </div>
                        <div>
                            <h3 className={styles.sectionTitle}>Description</h3>
                            <p className={styles.sectionContent}>{item.description}</p>
                        </div>
                        <div>
                            <h3 className={styles.sectionTitle}>Looking for in return</h3>
                            <p className={styles.sectionContent}>{item.lookingFor}</p>
                        </div>
                    </div>

                    <div className={styles.actionButtons}>
                        <button className={`${styles.button} ${styles.buttonPrimary}`}>
                            Propose Trade
                        </button>
                        <button className={`${styles.button} ${styles.buttonOutline}`}>
                            Chat with {item.user.name.split(' ')[0]}
                        </button>
                    </div>
                    <div className={styles.reportLink}>
                        <a href="#">Report Listing</a>
                    </div>
                </div>
            </div>

            {/* Related Items */}
            <div className={styles.relatedSection}>
                <h2 className={styles.relatedTitle}>You might also like</h2>
                <div className={styles.relatedGrid}>
                    {relatedItems.map((related) => (
                        <TradeCard key={related.id} trade={related} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ItemDetails;