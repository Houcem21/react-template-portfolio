import React from 'react'

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer id="contact" className={styles.contactfooter}>
        <div className={styles.footertitles}>
            <h1>Contact</h1>
            <h4>Feel free to reach out!</h4>
        </div>
        <ul className={styles.footerlinks}>
            <a href="mailto:damakhoucem90@gmail.com" target='blank'>
                <li className={styles.footerlink}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                    <p>Yourmail@mail.com</p>
                </li>
            </a>
            <a href="https://www.linkedin.com/in/houcem-dammak21" target='blank'>
                <li className={styles.footerlink}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin Icon" />
                    <p>linkedin.com/in/loremipsum</p>
                </li>
            </a>
            <a href="https://github.com/Houcem21" target='blank'>
                <li className={styles.footerlink}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                    <p>github.com/loremipsum</p>
                </li>
            </a>
        </ul>
    </footer>
  )
}

export default Contact 