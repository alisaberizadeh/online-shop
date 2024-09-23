import React from "react";
import css from "./home.module.css";
import * as IconMui from "@mui/icons-material";
import { Container } from "@mui/material";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import GoldenOffers from "../../components/goldenOffers/GoldenOffers";
import Categories from "../../components/categories/Categories";

export default function Home() {
  return (
    <>
      <Header active="home" />
      <Slider />

      <Container maxWidth="xl">
        <Categories />
        <GoldenOffers />
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
