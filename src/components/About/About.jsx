import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.aboutsection} id="about">
        <h2>ABOUT</h2>
        <div className={styles.aboutcontainer}>
            <img src={getImageUrl("hero/character-on-the-phone.svg")} alt="Me using a computer" className={styles.aboutimage} />
            <ul className={styles.aboutlist}>
                <li className={styles.aboutposition}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Image of a cursor" />
                    <div className={styles.positiondesc}>
                        <h4 className="positiontitle">Lorem ipsum</h4>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className={styles.aboutposition}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Image of an interface" />
                    <div className={styles.positiondesc}>
                        <h4 className="positiontitle">Lorem ipsum</h4>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className={styles.aboutposition}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Image of a server" />
                    <div className={styles.positiondesc}>
                        <h4 className="positiontitle">Lorem ipsum</h4>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About