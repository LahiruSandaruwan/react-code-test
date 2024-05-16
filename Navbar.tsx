import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';
import '../pages/fontawesome';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/" legacyBehavior><a>AEON</a></Link>
            </div>
            <div className={styles.navLinks}>
                <Link href="/" legacyBehavior><a>Showcase</a></Link>
                <Link href="/" legacyBehavior><a>Docs</a></Link>
                <Link href="/" legacyBehavior><a>Blog</a></Link>
                <Link href="/" legacyBehavior><a>Analytics</a></Link>
                <Link href="/" legacyBehavior><a>Commerce</a></Link>
                <Link href="/" legacyBehavior><a>Templates</a></Link>
                <Link href="/" legacyBehavior><a>Enterprise</a></Link>
            </div>
            <div className={styles.search}>
                <input type="text" placeholder="Search documentation..." />
            </div>
            <div className={styles.icons}>
                <div className={styles.searchIcon} onClick={toggleSearch}>
                    <FontAwesomeIcon icon="search" />
                </div>
                <div className={styles.menuIcon} onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={isOpen ? 'times' : 'bars'} />
                </div>
            </div>
            {isOpen && (
                <div className={styles.mobileNavLinks}>
                    <Link href="/" legacyBehavior><a>Showcase</a></Link>
                    <Link href="/" legacyBehavior><a>Docs</a></Link>
                    <Link href="/" legacyBehavior><a>Blog</a></Link>
                    <Link href="/" legacyBehavior><a>Analytics</a></Link>
                    <Link href="/" legacyBehavior><a>Commerce</a></Link>
                    <Link href="/" legacyBehavior><a>Templates</a></Link>
                    <Link href="/" legacyBehavior><a>Enterprise</a></Link>
                </div>
            )}
            {isSearchOpen && (
                <div className={styles.mobileSearch}>
                    <input type="text" placeholder="Search documentation..." />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
