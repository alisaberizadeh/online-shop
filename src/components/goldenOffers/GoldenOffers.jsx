import React, { useState } from "react";
import css from "./goldenOffers.module.css"
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Product from "../product/Product";
import productImage1 from "../../assets/images/products/1.jpg";

export default function GoldenOffers(props) {


  return(
    <Box className={css.goldenOffers} width="100%" p={{xs:"20px 0",lg:"40px 0"}} borderRadius="20px">
    <Typography variant="p" fontSize="30px" fontWeight="bold" textAlign="center" color="white" component="p"> پیشنهاد طلایی </Typography>
    <Box width="97%" m="30px auto 0">
        <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
            >
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>
                      <SwiperSlide><Product image={productImage1} title="گوشی موبایل هوآوی مدل Nova 3i INE-LX1M" /></SwiperSlide>

        </Swiper>
    </Box>
</Box>
  )
}
