import React, { useEffect, useState } from "react";
import css from "./categories.module.css";
import { Box } from "@mui/material";
import Category from "../category/Category";
import axios from "axios";

export default function Categories(props) {
  const [categories,setCategories] = useState([]);
  useEffect(()=> {
    const AxiosData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/categories");
        setCategories(response.data)
      } 
      catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      }
    };
  
    AxiosData();
  }, [])
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

      {categories.map((item,index)=>(
      <Category key={index} src={item.src} text={item.title} link={item.link} />

      ))}

    </Box>
  );
}
