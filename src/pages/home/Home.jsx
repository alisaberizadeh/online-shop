import React, { useState } from "react";
import css from "./home.module.css";
import * as IconMui from "@mui/icons-material";
import { Container } from "@mui/material";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import GoldenOffers from "../../components/goldenOffers/GoldenOffers";
import Categories from "../../components/categories/Categories";
import Banners from "../../components/banners/Banners";
import NewProducts from "../../components/newProducts/NewProducts";
import Poster from "../../components/posters/Poster";
import BestSellers from "../../components/bestSellers/BestSellers";
import BlogHome from "../../components/blogHome/BlogHome";
 import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
 
export default function Home() {

  return (
    <>
      <Header active="home" />
      
      <Slider />

      <Container maxWidth="xl">
         <Categories />
      </Container>

      <GoldenOffers />

      <Container maxWidth="xl">
          <Banners />
          <NewProducts />
          <Poster />
          <BestSellers />
          <BlogHome />
      </Container>

       <Footer />

    </>
  );
}
