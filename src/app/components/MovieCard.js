import React from 'react'
import styles from '../styles/Common.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (curElem) => {

    const { id, type, title, synopsis } = curElem.jawSummary;

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image
                        src={curElem.jawSummary.backgroundImage.url}
                        width={260}
                        height={200}
                        alt='title image'
                    />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>{synopsis.substring(0, 66)}<span>...</span></p>

                    <Link href={`/movie/${id}`}>
                        <button> Read more</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default MovieCard
