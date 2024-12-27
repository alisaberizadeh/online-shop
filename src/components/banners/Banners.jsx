import React, { useEffect, useState } from "react";
import css from "./banners.module.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Banners(props) {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const axiosData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/banners")
        setBanners(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    axiosData()
  }, [])

  return (
    <Box width="100%" m="40px 0 20px" display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }} flexWrap="wrap" justifyContent="space-between">

      {banners.map((item, index) => (
        <Box key={index} width={{ xs: "100%", sm: "48%", md: "24%" }} m={{ xs: "10px 0", md: "0" }} borderRadius="20px">
          <Link>
            <Box component="img" alt="banner" src={item.src} width="100%" borderRadius="20px" />
          </Link>
        </Box>
      ))}




    </Box>
  )
}

