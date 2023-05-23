import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'


const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">

                    <Image
                        src='/netflix.png'
                        width={210}
                        height={60}
                        alt='my logo image' />

                </Link>

            </div>
            <Nav />


        </header>
    )
}

export default Header
