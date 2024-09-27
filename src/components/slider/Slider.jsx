import React from "react";
import css from "./slider.module.css";
import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/images/slider/1.webp";
import slide2 from "../../assets/images/slider/2.webp";
import slide3 from "../../assets/images/slider/3.webp";
import slide4 from "../../assets/images/slider/4.gif";
import slide5 from "../../assets/images/slider/5.webp";

import slideMobile1 from "../../assets/images/slider/1mobile.png";
import slideMobile2 from "../../assets/images/slider/2mobile.png";
import slideMobile3 from "../../assets/images/slider/3mobile.png";
import slideMobile4 from "../../assets/images/slider/4mobile.gif";
import slideMobile5 from "../../assets/images/slider/5mobile.png";

import { Link } from "react-router-dom";

export default function Slider(props) {

  const isMobile = useMediaQuery("(max-width:900px)");

  const getImage = (desktopImage, mobileImage) => {
    return isMobile ? mobileImage : desktopImage;
  };

  return (
    <Box width="100%" height={{xs:"300px",sm:"430px",md:"270px",lg:"350px"}} className={css.slider}>
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
            <Box component="img" src={getImage(slide1,slideMobile1)} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={getImage(slide2,slideMobile2)} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={getImage(slide3,slideMobile3)} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={getImage(slide4,slideMobile4)} alt="slider" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <Link>
            <Box component="img" src={getImage(slide5,slideMobile5)} alt="slider" />
          </Link>
        </SwiperSlide>
        
       </Swiper>
    </Box>
  );
}
