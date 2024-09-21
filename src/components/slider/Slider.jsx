import React from "react";
import css from "./slider.module.css";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/images/slider/1.jpeg";
import slide2 from "../../assets/images/slider/2.jpeg";
import slide3 from "../../assets/images/slider/3.jpeg";
import slide4 from "../../assets/images/slider/4.jpeg";
import slide5 from "../../assets/images/slider/5.jpeg";
import { Link } from "react-router-dom";

export default function Slider(props) {
  return (
    <Box width="100%" height={{xs:"110px",sm:"170px",md:"250px",lg:"370px"}} className={css.slider}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={css.mySwiper}
      >
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={slide1} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={slide2} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={slide3} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={slide4} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={slide5} alt="slider" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
