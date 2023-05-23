"use client";
import React, { useState } from 'react'
import styles from '../styles/contact.module.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const ContactForm = () => {


    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""

    });
    const [status, setStatus] = useState(null);

    function handelChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => (
            { ...prevUser, [name]: value }
        ));

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e)
        }

    }


    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>Enter your name:
                    <input type="text" name='username' id='username'
                        placeholder='Enter your name' className={mulish.className} required
                        onChange={handelChange} value={user.username}
                        autoComplete='off'
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>Email:
                    <input type="email" name='email' id='email'
                        placeholder='Enter your email' className={mulish.className} required
                        onChange={handelChange} value={user.email}
                        autoComplete='off'
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>Phone-no :
                    <input type="number" name='phone' id='phone'
                        placeholder='Enter your phone-no.' className={mulish.className} required
                        onChange={handelChange} value={user.phone}
                        autoComplete='off'
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>Message:
                    <textarea name='message' id='message' rows={3} placeholder='Enter your message'
                        className={mulish.className} required
                        onChange={handelChange} value={user.message}
                        autoComplete='off'
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type='submit' className={mulish.className} >
                    Send Message
                </button>
            </div>

        </form>
    )
}

export default ContactForm
