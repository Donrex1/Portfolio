import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/img/avatar1.jpg'
import avt2 from '../../assets/img/avatar2.jpg'
import avt3 from '../../assets/img/avatar3.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avt1,
    name: 'Tina Snow',
    review: "You were always responsive to my questions and concerns, and you made sure to keep me updated on the progress of my project!"
  },
  {
    avatar: avt2,
    name: 'Shatta Wale',
    review: "I recently had the pleasure of working with Gil on a frontend design project for my company. Gil was incredibly professional and easy to work with. He took the time to understand my needs and deliver a design that was both visually appealing and functional. I would highly recommend Gil to anyone looking for frontend design services."
  },
  {
    avatar: avt3,
    name: 'Kwame Despite',
    review: " I recently had the pleasure of working with Gil on a frontend design project for my company. Gil was incredibly professional and easy to work with. He took the time to understand my needs and deliver a design that was both visually appealing and functional. I would highly recommend Gil to anyone looking for frontend design services."
  },


];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      />

      {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Avator One" />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      <section />
    </section>

  )
}

export default Testimonials


