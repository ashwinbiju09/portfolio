import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import data from "../Home/data.json";
import { Fade } from "react-awesome-reveal";

const Achievements = () => {
  return (
    <div className="bg-black px-8 md:px-28 py-5">
      <Fade duration={3000}>
        <h1 className="text-lg md:text-3xl lg:text-4xl py-12 font-extrabold text-center bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
          Accomplishments of Note
        </h1>
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </div>
  );
};

export default Achievements;
