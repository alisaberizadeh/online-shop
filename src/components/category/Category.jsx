import React from "react";
import css from "./category.module.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Category(props) {
  return(
    <Box width={{xs:"40%",sm:"30%",md:"22%",lg:"14%"}} m={{xs:"0 0 20px",md:"0"}} textAlign="center" className={css.category}> 
        <Link>
        <Box width="80%" component="img" src={props.src} alt="category" />
        <Typography m="10px 0 0" variant="p" fontSize="13px" color="#222121" component="p"> {props.text} </Typography>
        </Link>
    </Box>
  )
}
