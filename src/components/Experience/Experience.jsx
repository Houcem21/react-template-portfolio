import React from 'react'

import skills from "../../data/skills.json";
import positions from "../../data/history.json";

import styles from './Experience.module.css'
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section id="experience">
        <h2>EXPERIENCE</h2>
        <div className={styles.experiencescontainer}>
            <div className={styles.skillscontainer}>
                {skills.map((skill, id) => {
                    return <div key={id} className={styles.skillsitem}>
                        <div className={styles.skilllogo}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.imageSrc} />
                        </div>
                        <div className={styles.skilltitle}>{skill.title}</div>
                    </div>
                })}
            </div>
            <div className={styles.positionscontainer}>
                {positions.map((position, id) => {
                    return <div className={styles.positionitem}>
                        <img src={getImageUrl(position.imageSrc)} alt={position.imageSrc} className={styles.positionimage} />
                        <div className={styles.positiontext}>
                            <h3>{position.role}, {position.organisation}</h3>
                            <span><p>{position.startDate} - {position.endDate}</p></span>
                            <ul>
                                {position.experiences.map((exp, id) => {
                                    return <div className={styles.expcontainer}>
                                        <li>{exp}</li>
                                    </div>
                                })}
                            </ul>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Experience   