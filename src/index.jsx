/* eslint-disable linebreak-style */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar/NavBar'
import './index.styles.css'
import MainCard from './MainCard/MainCard.component'
import AboutMe from './AboutMe/AboutMe.component'
import ProjectSection from './Projects/ProjectSection.component'
import ContactMeSection from './ContactMe/ContactMeSection.component'

const App = () => (
  <div className="app">
    <NavBar />
    <MainCard />
    <AboutMe />
    <ProjectSection />
    <ContactMeSection />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
