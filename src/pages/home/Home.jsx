import React from "react";
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

export default function Home() {
  return (
    <>
      <Header active="home" />
      <Slider />
      <Container maxWidth="lg">
         <Categories />
      </Container>
      <GoldenOffers />
      <Container maxWidth="lg">
          <Banners />
          <NewProducts />
          <Poster />
          <BestSellers />
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
