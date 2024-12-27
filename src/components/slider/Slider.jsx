import React, { useEffect, useState } from "react";
import css from "./slider.module.css";
import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Slider(props) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [sliders , setSliders] = useState([]);

  const getImage = (desktopImage, mobileImage) => {
    return isMobile ? mobileImage : desktopImage;
  };

  useEffect(() => {

    const AxiosData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/sliders");
        setSliders(response.data)
      } 
      catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      }
    };
  
    AxiosData();
  }, []);
  
  return (
    <Box
      width="100%"
      height={{ xs: "300px", sm: "430px", md: "270px", lg: "350px" }}
      className={css.slider}
    >
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={css.mySwiper}
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index} className={css.slide}>
            <Link to={item.link}>
              <Box
                component="img"
                src={getImage(item.src, item.srcMobile)}
                alt={item.alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
