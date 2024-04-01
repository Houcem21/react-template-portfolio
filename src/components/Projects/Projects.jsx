import React from 'react'

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
        <h2>PROJECTS</h2>
        <div className={styles.projectscontainer}>
            {
                projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects