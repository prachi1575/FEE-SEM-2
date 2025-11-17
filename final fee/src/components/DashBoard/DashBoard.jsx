import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import QuickActions from './QuickActions';
import TradeCard from './TradeCard';
import Spinner from '../../Spinner';
import styles from './Dashboard.module.css';

// --- MOCK DATA ---
const mockStats = {
    activeTrades: 5,
    pendingRequests: 3,
    totalExchanges: 28,
    reputation: 4.8,
};

const mockTrades = [
    { id: 1, type: 'OFFER', title: 'Web Design Tutoring', user: { name: 'Sarah P.', avatarUrl: 'https://i.pravatar.cc/150?img=1' }, imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=300&q=80' },
    { id: 2, type: 'REQUEST', title: 'Noise-Cancelling Headphones', user: { name: 'Mike T.', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
    { id: 3, type: 'OFFER', title: 'Graphic Calculator (TI-84)', user: { name: 'Chloe J.', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, imageUrl: 'https://images.unsplash.com/photo-1596496050807-0639e7c3aec4?auto=format&fit=crop&w=300&q=80' },
    { id: 4, type: 'REQUEST', title: 'Help with Public Speaking', user: { name: 'David L.', avatarUrl: 'https://i.pravatar.cc/150?img=4' }, imageUrl: 'https://images.unsplash.com/photo-1505199326284-93f7f20c10b2?auto=format&fit=crop&w=300&q=80' },
    { id: 5, type: 'REQUEST', title: 'Python Coding Help', user: { name: 'Ben R.', avatarUrl: 'https://i.pravatar.cc/150?img=5' }, imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=300&q=80' },
];
// --- END MOCK DATA ---

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [trades, setTrades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // --- Simulate Backend Fetch ---
        // const fetchDashboardData = async () => {
        //   setLoading(true);
        //   const [statsRes, tradesRes] = await Promise.all([
        //     fetch('/api/dashboard/stats'),
        //     fetch('/api/dashboard/recommendations')
        //   ]);
        //   setStats(await statsRes.json());
        //   setTrades(await tradesRes.json());
        //   setLoading(false);
        // };
        // fetchDashboardData();

        // Mock Data Simulation
        setTimeout(() => {
            setStats(mockStats);
            setTrades(mockTrades);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <div className={styles.pageHeader}>
                <p className={styles.title}>Welcome back, Alex!</p>
                <p className={styles.subtitle}>Here's a summary of your trading activity.</p>
            </div>

            <div className={styles.statsGrid}>
                <StatCard title="Active Trades" value={stats.activeTrades} />
                <StatCard title="Pending Requests" value={stats.pendingRequests} />
                <StatCard title="Total Exchanges" value={stats.totalExchanges} />
                <StatCard title="Reputation Score" value={stats.reputation} icon="star" />
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Quick Actions</h2>
                <QuickActions />
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Recommended Trades</h2>
                <div className={styles.carousel}>
                    {trades.map((trade) => (
                        <TradeCard key={trade.id} trade={trade} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default Dashboard;