import React, {useState} from 'react'

import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.navtitle}>Portfolio</a>
        <div>
            <img src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
            alt="Menu Icon" className={styles.menubutton} 
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.navlist} ${menuOpen && styles.menuopen}`} onClick={() => {setMenuOpen(false)}}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar