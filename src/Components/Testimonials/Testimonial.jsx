import React from 'react';
import './Testimonial.css';
import Avt1 from '../../Assets/assets/avatar1.jpg';
import Avt2 from '../../Assets/assets/avatar2.jpg';
import Avt3 from '../../Assets/assets/avatar3.jpg';
import Avt4 from '../../Assets/assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avater: Avt1,
    name: 'Tina Snow',
    review: `Ut suscipit excepturi eos vero minima ut laudantium voluptas qui aliquid reiciendis
    et voluptatum consectetur aut incidunt aperiam ut suscipit amet. Qui necessitatibus
    laboriosam aut magni nulla ab rerum sint et dolores reprehenderit qui quod rerum est
    quos accusantium!`,
  },
  {
    avater: Avt2,
    name: 'Tina Snow',
    review: `Ut suscipit excepturi eos vero minima ut laudantium voluptas qui aliquid reiciendis
    et voluptatum consectetur aut incidunt aperiam ut suscipit amet. Qui necessitatibus
    laboriosam aut magni nulla ab rerum sint et dolores reprehenderit qui quod rerum est
    quos accusantium!`,
  },
  {
    avater: Avt3,
    name: 'Tina Snow',
    review: `Ut suscipit excepturi eos vero minima ut laudantium voluptas qui aliquid reiciendis
    et voluptatum consectetur aut incidunt aperiam ut suscipit amet. Qui necessitatibus
    laboriosam aut magni nulla ab rerum sint et dolores reprehenderit qui quod rerum est
    quos accusantium!`,
  },
  {
    avater: Avt4,
    name: 'Tina Snow',
    review: `Ut suscipit excepturi eos vero minima ut laudantium voluptas qui aliquid reiciendis
    et voluptatum consectetur aut incidunt aperiam ut suscipit amet. Qui necessitatibus
    laboriosam aut magni nulla ab rerum sint et dolores reprehenderit qui quod rerum est
    quos accusantium!`,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avater">
                <img src={avater} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
