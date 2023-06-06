import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u5mbw0c', 'template_bcoa05x', form.current, 'f3bC6WjQpnSF_Y5he')
    e.target.reset()
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.txt);
      })
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5 href="mailto:nkemzifolefac1@gmail.com">Send a message</h5>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5> Leave a Mesage</h5>
            <h5 href="https://api.whatsapp.com/send?phone+237650980770">Send a message</h5>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name="message" rows="7" placeholder='write your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
