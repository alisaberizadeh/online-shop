import React from "react";
import css from "./banners.module.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import banner1 from "../../assets/images/banners/1.jpg"
import banner2 from "../../assets/images/banners/2.jpg"
import banner3 from "../../assets/images/banners/3.jpg"
import banner4 from "../../assets/images/banners/4.jpg"

export default function Banners(props) {
  return(
    <Box width="100%" m="40px 0 20px" display={{xs:"block",sm:"flex",md:"flex",lg:"flex"}} flexWrap="wrap" justifyContent="space-between">

         <Box width={{xs:"100%",sm:"48%",md:"24%"}}  m={{xs:"10px 0",md:"0"}}  borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={banner1} width="100%" borderRadius="20px" />
            </Link>
         </Box>
         <Box width={{xs:"100%",sm:"48%",md:"24%"}}  m={{xs:"10px 0",md:"0"}} borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={banner2} width="100%" borderRadius="20px" />
            </Link>
         </Box>
         <Box width={{xs:"100%",sm:"48%",md:"24%"}}  m={{xs:"10px 0",md:"0"}} borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={banner3} width="100%" borderRadius="20px" />
            </Link>
         </Box>
         <Box width={{xs:"100%",sm:"48%",md:"24%"}} m={{xs:"10px 0",md:"0"}}  borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={banner4} width="100%" borderRadius="20px" />
            </Link>
         </Box>

    </Box>
  )
}

