import React from 'react'

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.projectitem}>
        <img src={getImageUrl(imageSrc)} alt={title} />
        <h3>{title}</h3>
        <p className={styles.projdescription}>{description}</p>
        <ul className={styles.projskills}>
            {skills.map((skill, id) => {
                return (<li className={styles.projskill} key={id} >
                    {skill}
                </li>);
            })}
        </ul>
        <div className={styles.projbuttons}>
            <a href={source}>Source</a>
            {demo && <a href={demo}>Demo</a>}
        </div>
    </div>
  )
}

export default ProjectCard