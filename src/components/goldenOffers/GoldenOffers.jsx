import React, { useState } from "react";
import css from "./goldenOffers.module.css"
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Product from "../product/Product";
import productImage1 from "../../assets/images/products/1.jpg";
import { Autoplay } from 'swiper/modules';

export default function GoldenOffers(props) {


  return(
    <Box className={css.goldenOffers} width="100%" p={{xs:"30px 0",lg:"40px 0"}}>
    <Typography variant="p" fontSize="30px" fontWeight="bold" textAlign="center" color="white" component="p"> پیشنهاد طلایی </Typography>
    <Container maxWidth="lg">
    <Box width="100%" m="30px auto 0">
        <Swiper
         autoplay={{
          delay: 1500,
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
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product radius="30px" image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>

        </Swiper>
    </Box>
    </Container>
</Box>
  )
}
