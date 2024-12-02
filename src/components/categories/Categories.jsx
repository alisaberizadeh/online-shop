import React, { useState } from "react";
import css from "./categories.module.css";
import { Box } from "@mui/material";
import Category from "../category/Category";

import category1 from "../../assets/images/category/1.png";
import category2 from "../../assets/images/category/2.png";
import category3 from "../../assets/images/category/3.png";
import category4 from "../../assets/images/category/4.png";
import category5 from "../../assets/images/category/5.png";
import category6 from "../../assets/images/category/6.png";

export default function Categories(props) {
  return (
    <Box
      width="100%"
      display="flex"
      p="30px 0"
      flexWrap="wrap"
      bgcolor="white"
      justifyContent="space-around"
      borderRadius="20px"
      m={{ xs: "20px 0 ", md: "30px 0" }}
      boxShadow="0px 5px 12px 0px #0000000d"
    >
      <Category src={category1} text="ساعت هوشمند" link="" />
      <Category src={category2} text="محافظ صفحه‌ نمایش " link="" />
      <Category src={category3} text="اسپیکر و بلندگو " link="" />
      <Category src={category4} text="شارژر و پاوربانک " link="" />
      <Category src={category5} text="هدفون و هندزفری " link="" />
      <Category src={category6} text="گوشی موبایل " link="" />
    </Box>
  );
}
