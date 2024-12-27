import React, { useState } from "react";
import css from "./article.module.css";
import { Box, Typography } from "@mui/material";
  
import img_1 from "../../assets/images/blog/1.jpg";
import { Link } from "react-router-dom";
 

 
export default function Article(props) {
  return (
            <Box width={{xs:"100%",sm:"48%",md:"23%"}} boxShadow="0px 2px 6px 0px rgba(51.00000000000001, 73.00000000000001, 94, 0.1)" m={{xs:"0 0 30px",sm:"0 0 30px",md:"0"}} bgcolor="white" borderRadius="20px" >

                    <Link>
                    <Box width="92%"  height={{xs:"250px",sm:"250px",md:"200px"}}  p="4%">
                    <Box component="img" alt="test" src={props.src} width="100%" height="100%" borderRadius="20px" />
                    </Box>
                    </Link>
                    <Typography component="p"  variant="p" fontSize="13px" p="0 20px" lineHeight="30px">
                    <Link style={{color:"#565656"}}> {props.title}</Link>
                    </Typography>
                    <Typography component="p" color="#bbbbbb" variant="p" fontSize="13px" p="0 20px 20px"  textAlign="left" lineHeight="30px">
                    {props.date}
                    </Typography>

            </Box>
  );
}
