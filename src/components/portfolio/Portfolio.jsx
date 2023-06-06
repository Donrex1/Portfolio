import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img/avatar1.jpg'
import img2 from '../../assets/img/avatar2.jpg'
import img3 from '../../assets/img/avatar3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}

      </div>
    </section>
  )
}

export default Portfolio
