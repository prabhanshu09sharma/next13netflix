import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '../styles/contact.module.css'
import ContactForm from '../components/ContactForm'

const page = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />
                {/* contact form start  */}
                <section className={styles.contact_section}>
                    <h2>We are love to hear <span> from you</span></h2>
                    <ContactForm />

                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14108.988434773193!2d78.0548402414936!3d27.863678587542736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a3827fe2f02f%3A0x3f21e57d2c3e1008!2sSasni%20Gate%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!5e0!3m2!1sen!2sin!4v1684767803931!5m2!1sen!2sin"
                    width={600} height={350}
                    style={{ border: 0 }} allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className={styles.mapping}></iframe>
            </div>
        </div>
    )
}

export default page
