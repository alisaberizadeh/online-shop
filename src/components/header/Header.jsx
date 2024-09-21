import { Box, Container  } from "@mui/material";
import React, {useState } from "react";
import css from "./header.module.css";
import * as ci from "react-icons/ci";
import * as IconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

export default function Header(props) {

    const [categorySubMenu , setCategorySubMenu] = useState(false)
    const [statusMenu , setStatusMenu] = useState(false)
    const [bgMenu , setBgMenu] = useState(false)

    let subopenMenu = ()=> {
        setCategorySubMenu(!categorySubMenu)
    }

    let openMenu = () => {
        setBgMenu(true)
        setTimeout(() => {
            setStatusMenu(true)
        }, 100);
    }

    let closeMenu = (event) => {
        if (!event.target.closest(`.${css.menuBox}`)) {
            setStatusMenu(false)
            setTimeout(() => {
                setBgMenu(false)
            }, 300);
        }
    }


  const handleMenuBoxClick = (event) => {
    event.stopPropagation(); 
  };



  return (
    <>
    <Box width="100%"  height="auto" bgcolor="white">
      <Container>

        <Box width="100%" p={{xs:"0",md:"10px 0"}}  height="100px" display="flex" justifyContent="space-between">

            <Box width={{xs:"40%",sm:"27%",md:"20%"}} height="100%" display="flex" justifyContent="center" alignItems="center">
                <Link>
                    <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{width: "85%"}}
                    />
                </Link>
            </Box>

            <Box width="50%" height="100%"   display={{xs:"none" , md:"flex"}} justifyContent="center" alignItems="center">
                <Box className={css.searchBox} width="80%" height="50px" bgcolor="#f8f9fa" borderRadius="10px" display="flex" alignItems="center" justifyContent="space-between">
                    <input type="text" name="search" placeholder="نام محصول مورد نظر خود را جستجو کنید ..." />
                    <button><ci.CiSearch /></button>
                </Box>
            </Box>

            <Box width={{xs:"60%",sm:"73%",md:"30%"}} height="100%"  display="flex" justifyContent="left" alignItems="center"> 
                <Link>
                    <Box className={css.header__btn} m={{xs:"0 10px 0 0",md:"0 20px 0 0"}} width={{xs:"40px",md:"50px"}} height={{xs:"40px",md:"50px"}} position="relative" color="rgb(108 106 106)" borderRadius="10px" fontSize={{xs:"20px",md:"25px"}} bgcolor="#f8f9fa"  display="flex" justifyContent="center" alignItems="center">
                         <ci.CiShoppingBasket />
                         <Box position="absolute" width="20px" height="20px" top="-10px" right="0" fontSize="15px" display="flex" alignItems="center" justifyContent="center" bgcolor="#00c85d" color="white" borderRadius="100px">3</Box>
                    </Box>
                </Link>
                <Link>
                    <Box className={css.header__btn} m={{xs:"0 10px 0 0",md:"0 20px 0 0"}}  width={{xs:"40px",md:"50px"}} height={{xs:"40px",md:"50px"}}  position="relative" color="rgb(108 106 106)" borderRadius="10px" fontSize={{xs:"20px",md:"25px"}}  bgcolor="#f8f9fa"  display="flex" justifyContent="center" alignItems="center">
                         <ci.CiHeart />
                    </Box>
                </Link>
                <Link>
                    <Box className={css.header__btn} m={{xs:"0 10px 0 0",md:"0 20px 0 0"}}  width={{xs:"40px",md:"50px"}} height={{xs:"40px",md:"50px"}}  position="relative" color="rgb(108 106 106)" borderRadius="10px" fontSize={{xs:"20px",md:"25px"}}  bgcolor="#f8f9fa"  display="flex" justifyContent="center" alignItems="center">
                         <ci.CiUser />
                    </Box>
                </Link>
                <Link>
                    <Box onClick={openMenu} className={css.header__btn} m={{xs:"0 10px 0 0",md:"0 20px 0 0"}}  width={{xs:"40px",md:"50px"}} height={{xs:"40px",md:"50px"}} color="rgb(108 106 106)" borderRadius="10px" fontSize={{xs:"20px",md:"25px"}}  bgcolor="#f8f9fa"  display={{xs:"flex",md:"none"}} justifyContent="center" alignItems="center">
                         <ci.CiMenuFries  />
                    </Box>
                </Link>
            </Box>

        </Box>

        <Box className={css.menu} zIndex="1000" onClick={closeMenu} bgcolor="#00000042" position={{xs:"fixed",md:"initial"}} top="0" right="0" width="100%" height={{xs:"100vh",md:"auto"}} display={{xs:bgMenu ? "block" : "none",md:"flex"}} alignItems="center">
            <Box bgcolor="white"onClick={handleMenuBoxClick} className={css.menuBox} zIndex="10" width={{xs:"70%",md:"100%"}} minHeight={{xs:"100vh",md:"initial"}} position={{xs:"fixed",md:"initial"}} right={statusMenu ? "0" : "-70%"}  display={{xs:"block",md:"flex"}} alignItems="center" p={{xs:"20px 0",md:"0"}}>
                    <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{width: "65%"}}
                        display={{xs:"block",md:"none"}}
                        m="0 auto 30px"
                        p="0"
                    />
                <Link style={{color:props.active=="home" ? "#00c85d" : "rgb(102 102 102)"}}>خانه</Link>
                <Link>فروشگاه</Link>
                <Link onClick={subopenMenu} className={css.categoryLink}>
                    <Box display="flex" alignItems="center">
                      محصولات 
                    <IconMui.ExpandMoreOutlined sx={{display:categorySubMenu ? "none" : "block"}} />
                    <IconMui.ExpandLessOutlined sx={{display:categorySubMenu ? "block" : "none"}} />
                    </Box>
                    <Box width={{xs:"100%",md:"170px"}} m={{xs:"15px 0 0",md:"0"}} borderRadius={{xs:"10px",md:"0  0 10px 10px"}} bgcolor={{xs:"#f5f5f5",md:"white"}} position={{xs:"initial",md:"absolute"}} display={categorySubMenu ? "block" : "none"} top="100%" right="0">
                            <Link>هندزفری</Link>
                            <Link>شارژر</Link>
                            <Link>قاب و محفاط</Link>
                            <Link> فلش </Link>
                    </Box>
                </Link>
                <Link>مقالات </Link>
                <Link>تماس باما </Link>
                <Link>درباره ما  </Link>
            </Box>
        </Box>

        <Box width="100%"  p="0 0 20px" display={{xs:"block",md:"none"}} > 
            <Box className={css.searchBox} width={{xs:"95%",sm:"99%"}} p={{xs:"0 2.5%",sm:"0 .5%"}} height="40px" bgcolor="#f8f9fa" borderRadius="100px" display="flex" alignItems="center" justifyContent="space-between">
                    <input type="text" name="search" placeholder="نام محصول مورد نظر خود را جستجو کنید ..." />
                    <button><ci.CiSearch /></button>
            </Box>
    </Box>


      </Container>
    </Box>

   

   

    </>
  );
}
