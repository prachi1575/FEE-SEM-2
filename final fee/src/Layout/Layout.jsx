import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <main className={styles.main}>
                <div className={styles.contentContainer}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Layout;