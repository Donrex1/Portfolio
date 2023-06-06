import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2 color='--color-bg'>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Photoshop</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list' />
              <p>Basic designs</p>
            </li>

            <li>
              <BiCheck className='service_list' />
              <p>photo editing</p>
            </li>

            <li>
              <BiCheck className='service_list' />
              <p> </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list' />
              <p>Frontend Web design</p>
            </li>

            <li>
              <BiCheck className='service_list' />
              <p> React</p>
            </li>

            <li>
              <BiCheck className='service_list' />
              <p>frontend web hosting</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
