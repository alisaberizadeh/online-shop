import React, { useState } from "react";
import css from "./featuresFooter.module.css";
import { Box, Typography } from "@mui/material";
import * as fc from "react-icons/fc";
import svg1 from "../../assets/images/features/1.svg"
import svg2 from "../../assets/images/features/2.svg"
import svg3 from "../../assets/images/features/3.svg"
import svg4 from "../../assets/images/features/4.svg"
import svg5 from "../../assets/images/features/5.svg"

export default function FeaturesFooter(props) {
  return (
    <Box width="100%" display="flex" bgcolor="white" p="20px 0" m="40px 0 0" justifyContent="space-around" >
        <Box width="15%" textAlign="center">
            <Box component="img" src={svg1} width="30%" />
            <Typography  variant="p" fontSize="13px" color="#222121" component="p"> دارای تمامی مجوزها</Typography>
        </Box>
        <Box width="15%"  textAlign="center" >
            <Box component="img" src={svg2} width="30%" />
            <Typography  variant="p" fontSize="13px" color="#222121" component="p"> پشتیبانی شبانه‌روزی</Typography>
        </Box>
        <Box width="15%"  textAlign="center">
            <Box component="img" src={svg3} width="30%" />
            <Typography  variant="p" fontSize="13px" color="#222121" component="p">تحویل سریع</Typography>
        </Box>

        <Box width="15%"  textAlign="center">
            <Box component="img" src={svg4} width="30%" />
            <Typography  variant="p" fontSize="13px" color="#222121" component="p">پرداخت امن  </Typography>
        </Box>

        <Box width="15%"  textAlign="center">
            <Box component="img" src={svg5} width="30%" />
            <Typography  variant="p" fontSize="13px" color="#222121" component="p">تضمین بازگشت کالا    </Typography>
        </Box>

     </Box>
       
  );
}
