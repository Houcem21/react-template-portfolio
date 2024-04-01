import React from 'react'

import styles from './Hero.module.css'
import {getImageUrl} from '../../utils'

const Hero = () => {
  return (
    <section className={styles.herosection}>
        <div className={`${styles.topblur} ${styles.blur}`}></div>
        <div className={`${styles.bottomblur} ${styles.blur}`}></div>
        <div className={styles.herocontainer}>
            <h1>Hey I'm John Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <a href="mailto:damakhoucem90@gmail.com">Contact me</a>
        </div>
        <img src={getImageUrl("hero/character.svg")} alt="hero image" className={styles.heroimage} />
    </section>
  )
}

export default Hero