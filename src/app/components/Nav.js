import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href='/about'>About</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href='/movie'>Movie</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav
