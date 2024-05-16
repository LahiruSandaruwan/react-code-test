import Link from 'next/link';
import type { NextPage } from 'next';
import styles from './Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Welcome to the Coding Challenges</h1>
            <ul className={styles.challengeList}>
                <li><Link href="/Calculator" legacyBehavior><a>Challenge One - Calculator</a></Link></li>
                <li><Link href="/Navbar" legacyBehavior><a>Challenge Two - Navbar</a></Link></li>
            </ul>
        </div>
    );
}

export default Home;
