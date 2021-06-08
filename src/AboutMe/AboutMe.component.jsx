/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './about-me.styles.css'
import Photo from '../images/oscarimage.png'

const AboutMe = () => (
  <section className="container" id="about_section">
    <div className="title-about">
      <h2 className="about-me">
        About
        <span className="me"> Me</span>
      </h2>
    </div>
    <div className="my-photo">
      <img src={Photo} alt="Me" className="photo" />
    </div>
    <div className="content-1">
      <h2 className="skills-title">My Skills</h2>
    </div>
    <div className="content-2">
      <ul className="skill-list">
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>SQL</li>
        <li>C#</li>
        <li>NodeJS</li>
        <li>Sass</li>
        <li>Django</li>
        <li>Git</li>
      </ul>
    </div>
    <div className="content-3">
      <p className="description">
        I'm currently a third year Computer Science Student, i'm enthusiastic about learning
        and creating new things in the tech area. I like listening to music, playing video games,
        watch series, hang out with my friends, watching sports and specially programming.
      </p>
    </div>
    <div className="content-4"> </div>
  </section>
)

export default AboutMe
