import Testimonial, { TestimonialData } from './Testimonial'
import './Testimonials.scss'
import Section from '../Section/Section'
import { useState } from 'react'
import useVisualized from '../../hooks/useVisualized/useVisualized'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

export default function Testimonials() {
  const [testimonials] = useState<TestimonialData[]>([
    {
      comment:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      description: 'Chef',
      img: '../img/team-1.png',
      name: '1',
    },
    {
      comment:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      description: 'Chef',
      img: '../img/team-1.png',
      name: '2',
    },
    {
      comment:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      description: 'Chef',
      img: '../img/team-1.png',
      name: '3',
    },
    {
      comment:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      description: 'Chef',
      img: '../img/team-1.png',
      name: '4',
    },
  ])

  const [activeIndex, setActiveIndex] = useState(0)

  const { ref, visualized } = useVisualized()

  return (
    <Section
      className={`testimonials ${visualized ? 'fadeInUp' : ''}`}
      ref={ref}
    >
      <div className="testimonials__header">
        <h5 className="section-title before after">Testimonial</h5>
        <h1 className="mb-5">Our Clients Say!!!</h1>
      </div>
      <Swiper
        className="testimonials__content"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        spaceBetween={24}
        speed={800}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex)
        }}
      >
        {testimonials.map(({ name, ...props }, i) => (
          <SwiperSlide key={`testimonial_${name}_${i}`}>
            <Testimonial
              name={name}
              {...props}
              className={activeIndex === i ? 'active' : ''}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}
