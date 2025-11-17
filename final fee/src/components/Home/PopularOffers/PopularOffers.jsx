import React, { useState, useEffect } from 'react';
import OfferCard from './OffersCard';
import Spinner from '../../../Spinner';
import styles from './PopularOffers.module.css';

// --- MOCK DATA ---
const mockPopularOffers = [
    { id: 1, title: 'Guitar Lessons', type: 'Skill', imageUrl: 'https://images.unsplash.com/photo-1510915228340-0c088ca43b95', user: { name: 'Alex J.' } },
    { id: 2, title: 'Textbook Exchange', type: 'Item', imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646', user: { name: 'Maria S.' } },
    { id: 3, title: 'Graphic Design Help', type: 'Skill', imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e', user: { name: 'Chris P.' } },
    { id: 4, title: 'Used Bicycle', type: 'Item', imageUrl: 'https://images.unsplash.com/photo-1559348243-d8c831535a0f', user: { name: 'Jenna W.' } },
    { id: 5, title: 'Calculus Tutoring', type: 'Skill', imageUrl: 'https://images.unsplash.com/photo-1542330952-bffc55e812b3', user: { name: 'Sam K.' } },
    { id: 6, title: 'Mini Fridge', type: 'Item', imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5', user: { name: 'Leo F.' } },
];
// --- END MOCK DATA ---

const PopularOffers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // --- Simulate Backend Fetch ---
        // fetch('/api/offers/popular')
        //   .then(res => res.json())
        //   .then(data => { setOffers(data); setLoading(false); })

        // Mock Data Simulation
        const timer = setTimeout(() => {
            setOffers(mockPopularOffers);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Popular Offers & Requests</h2>
            </div>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <Spinner />
                </div>
            ) : (
                <div className={styles.grid}>
                    {offers.map((offer) => (
                        <OfferCard key={offer.id} offer={offer} />
                    ))}
                </div>
            )}
        </section>
    );
};
export default PopularOffers;