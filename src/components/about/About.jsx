import React from 'react'
import './about.css'
import ME from '../../assets/img/Photo 1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { FaCertificate } from 'react-icons/fa'
import { VscFold, VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get Know </h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>


            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Certificates attained</h5>
              <small>1</small>
            </article>


            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Projects</h5>
              <small>3+ years</small>
            </article>
          </div>

          <p>I am a young and aspiring software engineering student in the the Faculty of Enginering and Technology at the University of Buea. Being a holder of the GCE Advance Ordinary and Advance Level, looking forward to what the future has for me. </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About
