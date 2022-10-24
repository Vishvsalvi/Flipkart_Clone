import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import 'swiper/css/autoplay'

SwiperCore.use([ Autoplay, Navigation]);

const Banner = () => {
  return (
    <div className='overflow-hidden w-[100%] md:h-[18em] h-[6em] sm:h-[10em] relative top-16 flex justify-center'>
         <Swiper navigation autoplay={true} id="main" >
          <SwiperSlide>
            <img
              className="h-fit mr-5 w-[100%]"
              src="https://m.media-amazon.com/images/I/71V2pR1FJTL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <img
              className="h-fit mr-5 w-[100%]"
              src="https://m.media-amazon.com/images/I/71o8NZ0iPXL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="h-fit mr-5 w-[100%]"
              src="https://m.media-amazon.com/images/I/71NCXxTGJCL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="h-fit mr-5 w-[100%]"
              src="https://m.media-amazon.com/images/I/711kL1qHC-L._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="h-fit mr-5 w-[100%]"
              src="https://m.media-amazon.com/images/I/71ZxgrBonFL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Banner