import React, { useEffect, useState } from "react";
import css from "./goldenOffers.module.css"
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Product from "../product/Product";
import { Autoplay } from 'swiper/modules';
import axios from "axios";

export default function GoldenOffers(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const axiosData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/products")
        setProducts(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    axiosData()
  }, [])


  return (
    <Box className={css.goldenOffers} width="100%" p={{ xs: "30px 0", lg: "40px 0" }}>
      <Typography variant="p" fontSize="30px" fontWeight="bold" textAlign="center" color="white" component="p"> پیشنهاد طلایی </Typography>
      <Container maxWidth="xl">
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
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            {products.map((item,index)=>(
                 <SwiperSlide key={index}><Product radius="30px" price={item.price} finalPrice={item.finalPrice} discount={item.discount} link={item.link} image={item.src} title={item.title} /></SwiperSlide>
            ))}
          

          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}
