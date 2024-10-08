import React from "react";
import css from "./navbar.module.css";
import { Box, Container, Typography } from "@mui/material";
import * as iconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";
import userPic from "../../../assets/images/user.jpg"

export default function Navbar({active}) {
  return (

    <>
        <Box width="100%" bgcolor="white" p="5px 0" borderBottom="1px solid rgb(227 227 227 / 43%)">
            <Container sx={{display:"flex",alignItems:"center"}}>
                <Box width="20%" display="flex" alignItems="center">
                    <img width="20%" src="https://filenter.ir/Syn/demo/horizontal/assets/images/logo-icon.png" alt="" />
                    <Typography component="p" variant="p" fontSize="22px" color="#8833ff" m="0 10px 0 0" fontWeight="bold">داشبورد مدیریت</Typography>
                </Box>
                <Box width="80%" display="flex" alignItems="center"  justifyContent="left">
                <Box  display="flex" justifyContent="left" alignItems="center">
                    <Link className={css.navBtn}><ci.CiChat1 />
                        <Box position="absolute" width="18px" height="18px" top="-0" right="0" fontSize="13px" display="flex" alignItems="center" justifyContent="center" bgcolor="red" color="white" borderRadius="100px">3</Box>
                    </Link>
                    <Link className={css.navBtn}><ci.CiBellOn />
                    <Box position="absolute" width="18px" height="18px" top="-0" right="0" fontSize="13px" display="flex" alignItems="center" justifyContent="center" bgcolor="red" color="white" borderRadius="100px">3</Box>
                    </Link>
                    <Link className={css.navBtn}><ci.CiPower /></Link>
                    <Link to="/" className={css.navBtn}><ci.CiHome /></Link>
                </Box>
                <Box width="20%"  textAlign="left" borderRight="1px solid rgb(227 227 227 / 43%)">
                    <Link style={{display:"flex",alignItems:"center" , justifyContent:"left"}}>
                            <Typography component="p" variant="p" fontSize="17px" color="rgb(102 102 102);" m="0 0 0 10px" fontWeight="bold">علی صابری  </Typography>
                            <img  className={css.userPic} src={userPic} alt="" />
                    </Link>
                </Box>
                </Box>
            </Container>
        </Box>

        <Box width="100%" bgcolor="white">
            <Container sx={{display:"flex",alignItems:"center"}}>
                <Link to="/dashboard" className={css.menuItem} style={{background:active==="home" ? "#8833ff" : "initial",color:active==="home" ? "white" : "initial"}}>
                    خانه
                </Link>
                <Link to="/dashboard/slider" className={css.menuItem} style={{background:active==="slider" ? "#8833ff" : "initial",color:active==="slider" ? "white" : "initial"}}>
                    اسلایدر
                </Link>
            </Container>
        </Box>
    </>

    
  );
}
