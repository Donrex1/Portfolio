import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Expenrience = () => {
  return (
    <section id='experience'>
      <h5 color> What skills I have </h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
              <small className='text_light'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>MySql</h4>
              <small className='text_light'>Basic</small>
             </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>React</h4>
              <small className='text_light'>Basic</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3 color="--color-bg-variant">Other Skills</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>Node JS</h4>
              <small className='text_light'>Intermediate</small>
           </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Python</h4>
              <small className='text_light'>Basic</small>
             </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>MySQL</h4>
              <small className='text_light'>Intermediate</small>
             </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icon'/>
              <div>
              <h4>C/C++</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details-icon'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text_light'>Basic</small>
              </div>
            </article>
          </div>

        </div>
      </div>
       </section>
  )
}

export default Expenrience
