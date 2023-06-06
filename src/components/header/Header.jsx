import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import profilpic from '../../assets/img/Photo 1.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Folefack Gil</h1>

        <h5 className="text-light">Aspiring Software Engineer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={profilpic} alt="photo" />
        </div>


        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
