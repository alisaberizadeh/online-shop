import React, { useState } from "react";
import css from "./blogHome.module.css";
import { Box, Typography } from "@mui/material";
import Article from "../article/Article";

export default function BlogHome(props) {
  return (
    <Box width="100%"  m="30px 0" >
            <Typography component="p" display="flex" alignItems="center" className={css.title} variant="p" fontSize="25px" m="0 0 25px">  مقالات</Typography>
            <Box width="100%" display={{xs:"block",sm:"flex",lg:"flex "}} flexWrap="wrap" justifyContent="space-between" >
                    <Article />
                    <Article />
                    <Article />
                    <Article />
            </Box>
 
    </Box>
  );
}
