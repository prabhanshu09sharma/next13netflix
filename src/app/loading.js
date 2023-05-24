import React from 'react'
import styles from './styles/Common.module.css'

const loading = () => {
    return (
        <section className={styles.loading_section}>
            <div className={styles.loading}></div>
        </section>
    )
}

export default loading
