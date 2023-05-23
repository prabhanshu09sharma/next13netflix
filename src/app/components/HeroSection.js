import React from 'react'
import heroStyles from '../styles/HeroSection.module.css'
import styles from '../styles/Common.module.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

const HeroSection = ({ title, imgUrl }) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p> From award winning dramas to blockbuster action movie ,web-series got you covered,Browse our
                            selection of the latest and greatest movies,and find your new favorite today...  </p>
                        <Link href='/movie'>
                            <button className={poppins.className}>
                                Explore movie
                            </button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image
                            src={imgUrl}
                            width={500}
                            height={500}
                            alt='Hero section image'
                        />
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1684659354']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class={heroStyles['shape-fill']}></path>
                </svg>
            </div>
        </main>
    )
}

export default HeroSection
