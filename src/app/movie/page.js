import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '../styles/Common.module.css'

const movie = async () => {

    // await new Promise(executor: resolve => setTimeout(resolve,timeout:2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ed3925a2e2mshe4085014c972c28p117919jsn14c6dbd34020',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();

    const main_data = data.titles;

    // console.log('data', data);

    return (
        <div>

            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {main_data.map((curElem) => (
                            <MovieCard key={curElem.id} {...curElem} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default movie
