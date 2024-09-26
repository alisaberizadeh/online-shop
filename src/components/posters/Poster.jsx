import React from "react";
import css from "./poster.module.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import poster1 from "../../assets/images/poster/1.jpg";
import poster2 from "../../assets/images/poster/2.jpg";


export default function Poster(props) {
  return(
    <Box width="100%" m={{xs:"40px 0 20px"}} display={{xs:"block",sm:"flex",md:"flex",lg:"flex"}} flexWrap="wrap" justifyContent="space-between">

         <Box width={{xs:"100%",sm:"48%",md:"49%"}}  m={{xs:"10px 0",md:"0"}}  borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={poster1} width="100%" borderRadius="20px" />
            </Link>
         </Box>
         <Box width={{xs:"100%",sm:"48%",md:"49%"}}  m={{xs:"10px 0",md:"0"}} borderRadius="20px">
            <Link>
                <Box component="img" alt="banner" src={poster2} width="100%" borderRadius="20px" />
            </Link>
         </Box>
 

    </Box>
  )
}

