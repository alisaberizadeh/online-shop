import React from "react";
import css from "./newProducts.module.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Product from "../product/Product";
import productImage1 from "../../assets/images/products/1.jpg";
import { Autoplay } from 'swiper/modules';

export default function NewProducts(props) {
  return(
    <Box width="100%" display="flex" justifyContent="space-between"> 
        <Box width="100%"  >
            <Typography component="p" display="flex" alignItems="center" className={css.title} variant="p" fontSize="25px" m="0 0 25px">محصولات جدید</Typography>
            <Swiper
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
            >
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="20px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>

        </Swiper>
        </Box>
    </Box>
  )
}
