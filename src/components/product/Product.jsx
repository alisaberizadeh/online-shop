import React, { useState } from "react";
import css from "./product.module.css"
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";

export default function Product(props) {

    const [btnStatus , setBtnStatus] = useState(false)

  return(
        <Box className={css.product} onMouseEnter={()=>setBtnStatus(true)} onMouseLeave={()=> setBtnStatus(false)} width="100%" overflow="hidden" bgcolor="white" m="0 auto" borderRadius={props.radius} height="auto" textAlign="center" p="10px 0" position="relative">
            <Link to="SINGLE">
                <Box component="img" alt="test" src={props.image} width="90%" borderRadius="30px" />
                <Typography component="p" color="#565656" p="0 10px" variant="p" fontSize="13px" textAlign="right" lineHeight="30px">
                    {props.title}
                </Typography>
                <Typography component="p" minHeight="25 px"  sx={{textDecoration:"line-through"}} variant="p"  p="0 20px"  fontSize="14px" fontWeight="bold" textAlign="left" color="#b9b9b9" m="10px 0">
                    300,000 تومان
                </Typography>
                <Typography component="p" variant="p" fontSize="17px"  p="0 20px"  textAlign="left" color="#ff4747" fontWeight="bold" m="10px 0">
                    1,300,000 تومان
                </Typography>

                <Box position="absolute" p="0 10px" className={css.btns} left={{xs:"0",md:btnStatus ? "0" : "-40%"}} top="0">
                    <Link><ci.CiHeart /></Link>
                    <Link><ci.CiShoppingCart /></Link>
                </Box>
                <Box bgcolor="#f57878" color="white" borderRadius="50px" position="absolute" top="5%" right="5%" p="5px 10px" fontWeight="bold" fontSize="13px">
                    5%
                </Box>
            </Link>
        </Box>
  )
}
