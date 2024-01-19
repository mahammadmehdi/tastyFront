import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.scss"

function Slider() {
  return (
    <div className='slider'>

<Swiper
     
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className='tableSlide'><h3 className='header'>Book a table for yourself at a time convenient for you</h3> <button className='btn'>Book a table</button></div></SwiperSlide>
      <SwiperSlide><div className='tastySlide'><h3 className='header'>Tasty &amp; Delicious Food</h3> <button className='btn'>Book a table</button></div></SwiperSlide>
      <SwiperSlide><div className='strawSlide'><h3 className='header'>Book a table for yourself at a time convenient for you</h3> <button className='btn'>Book a table</button></div></SwiperSlide>
      
      ...
    </Swiper>
    </div>
  )
}

export default Slider