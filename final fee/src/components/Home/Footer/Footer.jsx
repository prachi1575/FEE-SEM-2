import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../../SocialIcons';
import Logo from '../../../Logo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <Link to="/" className={styles.logoGroup}>
                        <div className={styles.logoSvg}>
                            <Logo />
                        </div>
                        <span className={styles.logoTitle}>TradeBridge</span>
                    </Link>
                    <ul className={styles.nav}>
                        <li><Link to="/about" className={styles.navLink}>About</Link></li>
                        <li><Link to="/faqs" className={styles.navLink}>FAQs</Link></li>
                        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
                        <li><Link to="/terms" className={styles.navLink}>Terms</Link></li>
                        <li><Link to="/privacy" className={styles.navLink}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <hr className={styles.hr} />
                <div className={styles.bottomSection}>
                    <span className={styles.copyright}>
                        © 2024 <a href="#" className={styles.copyrightLink}>TradeBridge™</a>. All Rights Reserved.
                    </span>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialLink}><FacebookIcon /></a>
                        <a href="#" className={styles.socialLink}><InstagramIcon /></a>
                        <a href="#" className={styles.socialLink}><TwitterIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;