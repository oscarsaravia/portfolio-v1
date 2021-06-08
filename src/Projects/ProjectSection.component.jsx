/* eslint-disable linebreak-style */

import React from 'react'
import './project-section.styles.css'
import ProjectCard from './ProjectCard/ProjectCard.component'
import leafapi from '../images/leafapi.png'
import leafmusic from '../images/leafmusic.png'
import calculator from '../images/calculator.png'

const ProjectSection = () => (
  <section className="project-section" id="projects_section">
    <h2 className="title">
      Some of my
      <span> projects</span>
    </h2>
    <div className="projects">
      <ProjectCard
        className="card"
        name="Api built with django"
        desc="Used Django and Django rest-framework to build an Api."
        image={leafapi}
        gitlink="https://github.com/donaldosebas/LeafApi"
        weblink="https://leaf-musicapp.herokuapp.com/"
      />
      <ProjectCard
        className="card"
        name="Leaf Music App"
        desc="Online music player, where you can listen music, upload songs, create albums and playlists. Used PostgreSQL and React"
        image={leafmusic}
        gitlink="https://github.com/donaldosebas/LeafApp"
        weblink="https://leaf-musicapp.web.app/"
      />
      <ProjectCard
        className="card"
        name="Calculator"
        desc="Build with React, allows you to make math basic operations"
        image={calculator}
        gitlink="https://github.com/oscarsaravia/ReactCalculator"
        weblink="http://ubeje.xyz/19322Oscar/ReactCalculator/dist/index.html"
      />
    </div>

  </section>
)

export default ProjectSection
