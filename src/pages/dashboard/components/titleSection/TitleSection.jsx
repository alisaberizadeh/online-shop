import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import css from "./titleSection.module.css"
import * as iconMui from "@mui/icons-material";

export default function TitleSection (props) {
  const IconComponent = iconMui[props.icon]; 
    return(
        
        <Box width="95%" m="0 auto 20px" display="flex" p="0 0 20px" alignItems="center" justifyContent="space-between" borderBottom="1px solid rgb(228 228 228 / 48%)">
        <Typography component="p" variant="p" fontSize="20px" fontWeight="bold" color="#656565">{props.title}</Typography>
        <Link to={props.link} className={css.newBtn}>
          {props.btn} {IconComponent && <IconComponent sx={{ m: "0 5px 0 0" }} />}
        </Link>
        </Box>
    )
}