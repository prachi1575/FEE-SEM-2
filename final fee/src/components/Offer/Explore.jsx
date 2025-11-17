import React, { useState, useEffect } from 'react';
import TradeCard from '../DashBoard/TradeCard';
import Spinner from '../../Spinner';
import styles from './Explore.module.css';

// --- MOCK DATA ---
const mockListings = [
    // 1. Direct Swaps (Has something, Wants specific something)
    {
        id: 101,
        type: 'SWAP',
        title: 'Gaming PC for MacBook Pro',
        description: 'Trading my custom built PC (RTX 3060) for an M1/M2 MacBook.',
        user: { name: 'Alex Chen', avatarUrl: 'https://i.pravatar.cc/150?img=11' },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 102,
        type: 'SWAP',
        title: 'Guitar Lessons for Coding Help',
        description: 'I can teach you acoustic guitar if you help me with Python assignments.',
        user: { name: 'Maria G.', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
        imageUrl: 'https://images.unsplash.com/photo-1510915228340-0c088ca43b95?auto=format&fit=crop&w=400&q=80'
    },

    // 2. Offers (Has something, open to offers)
    {
        id: 201,
        type: 'OFFER',
        title: 'Vintage Denim Jacket',
        description: 'Size M. Good condition. Open to any trade or best offer.',
        user: { name: 'Sarah J.', avatarUrl: 'https://i.pravatar.cc/150?img=9' },
        imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 202,
        type: 'OFFER',
        title: 'Psychology 101 Textbook',
        description: 'No longer need this. Free or trade for a coffee!',
        user: { name: 'David K.', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 203,
        type: 'OFFER',
        title: 'Unused Graphing Calculator',
        description: 'TI-84 Plus CE. Brand new in box.',
        user: { name: 'Emily R.', avatarUrl: 'https://i.pravatar.cc/150?img=24' },
        imageUrl: 'https://images.unsplash.com/photo-1596496050807-0639e7c3aec4?auto=format&fit=crop&w=400&q=80'
    },

    // 3. Requests (Needs something)
    {
        id: 301,
        type: 'REQUEST',
        title: 'Need a Ladder for Saturday',
        description: 'Moving apartments, just need a ladder for 2 hours.',
        user: { name: 'Tom H.', avatarUrl: 'https://i.pravatar.cc/150?img=12' },
        imageUrl: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 302,
        type: 'REQUEST',
        title: 'French Tutor Needed',
        description: 'Looking for a native French speaker for conversation practice.',
        user: { name: 'Lisa M.', avatarUrl: 'https://i.pravatar.cc/150?img=44' },
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80'
    },
];
// --- END MOCK DATA ---

const Explore = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Simulate API fetch
        const timer = setTimeout(() => {
            setListings(mockListings);
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Filtering logic
    const filteredListings = listings.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Section Data
    const swaps = filteredListings.filter(item => item.type === 'SWAP');
    const offers = filteredListings.filter(item => item.type === 'OFFER');
    const requests = filteredListings.filter(item => item.type === 'REQUEST');

    if (loading) {
        return <div className={styles.loadingContainer}><Spinner /></div>;
    }

    return (
        <div className={styles.pageContainer}>
            {/* Header & Search */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Explore the Marketplace</h1>
                    <p className={styles.subtitle}>Discover skills, items, and trade opportunities around campus.</p>
                </div>
                <div className={styles.searchWrapper}>
                    <span className="material-symbols-outlined">search</span>
                    <input
                        type="text"
                        placeholder="Search listings..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* 1. Direct Swaps Section */}
            {swaps.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconBoxSwap}>
                            <span className="material-symbols-outlined">sync_alt</span>
                        </div>
                        <h2 className={styles.sectionTitle}>Proposed Swaps</h2>
                    </div>
                    <p className={styles.sectionDesc}>Users offering specific items for specific returns.</p>
                    <div className={styles.grid}>
                        {swaps.map(item => (
                            <TradeCard key={item.id} trade={item} />
                        ))}
                    </div>
                </section>
            )}

            {/* 2. General Offers Section */}
            {offers.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconBoxOffer}>
                            <span className="material-symbols-outlined">inventory_2</span>
                        </div>
                        <h2 className={styles.sectionTitle}>Fresh Offers</h2>
                    </div>
                    <p className={styles.sectionDesc}>Items and skills available for trade.</p>
                    <div className={styles.grid}>
                        {offers.map(item => (
                            <TradeCard key={item.id} trade={item} />
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Requests Section */}
            {requests.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconBoxRequest}>
                            <span className="material-symbols-outlined">help</span>
                        </div>
                        <h2 className={styles.sectionTitle}>Community Requests</h2>
                    </div>
                    <p className={styles.sectionDesc}>See what others are looking for. Can you help?</p>
                    <div className={styles.grid}>
                        {requests.map(item => (
                            <TradeCard key={item.id} trade={item} />
                        ))}
                    </div>
                </section>
            )}

            {/* Empty State */}
            {filteredListings.length === 0 && (
                <div className={styles.emptyState}>
                    <span className="material-symbols-outlined">search_off</span>
                    <p>No listings found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
};

export default Explore;