import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
    // Helper for NavLink active class
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Left Side: Logo */}
                <div className={styles.logoGroup}>
                    <div className={styles.logoSvg}>
                        <Logo />
                    </div>
                    <h2 className={styles.logoTitle}>TradeBridge</h2>
                </div>

                {/* Center: Navigation */}
                <nav className={styles.nav}>
                    <NavLink to="/" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">home</span>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/create-listing" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">local_offer</span>
                        <span>Post Offers</span>
                    </NavLink>
                    {/* <NavLink to="/my-requests" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">swap_horiz</span>
                        <span>My Requests</span>
                    </NavLink> */}
                    <NavLink to="/explore" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">travel_explore</span>
                        <span>Explore</span>
                    </NavLink>
                    <NavLink to="/about" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">help</span>
                        <span>About</span>
                    </NavLink>
                    <NavLink to="/contact" className={getNavLinkClass}>
                        <span className="material-symbols-outlined">phone</span>
                        <span>Contact</span>
                    </NavLink>
                </nav>

                {/* Right Side: User Actions */}
                <div className={styles.userActions}>
                    <button className={styles.iconButton}>
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <NavLink to="/dashboard"
                        className={styles.avatar}
                        style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=7')` }}
                        role="img"
                        aria-label="User avatar"
                    ></NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;