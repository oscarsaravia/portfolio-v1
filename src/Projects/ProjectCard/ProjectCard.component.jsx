/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react'
import './project-card.styles.css'
import PropTypes from 'prop-types'
import GitH from '../../images/gith.png'
import web from '../../images/web.png'

const ProjectCard = ({ name, desc, image, gitlink, weblink }) => (
  <div className="card">
    <div className="p-info">
      <h2 className="projectName">{name}</h2>
      <h3 className="projDescription">{desc}</h3>
      <div className="buttons">
        <a href={gitlink} target="_blank" rel="noreferrer"><img src={GitH} alt="github" className="git" /></a>
        <a href={weblink} target="_blank" rel="noreferrer"><img src={web} alt="web" className="web" /></a>
      </div>
    </div>
    <div className="img">
      <img src={image} alt="projectimage" className="project-image" />
    </div>
  </div>

)

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  gitlink: PropTypes.string.isRequired,
  weblink: PropTypes.string.isRequired,
}

export default ProjectCard
