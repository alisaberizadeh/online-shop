import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import css from "./titleSection.module.css"
import * as iconMui from "@mui/icons-material";

export default function TitleSection (props) {
    return(
        
        <Box width="95%" m="0 auto 20px" display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="p" variant="p" fontSize="20px" fontWeight="bold" color="#656565">{props.title}</Typography>
        <Link to={props.link} className={css.newBtn}>
          {props.btn} <iconMui.Add />
        </Link>
        </Box>
    )
}