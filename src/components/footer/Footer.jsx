import React, { useState } from "react";
import css from "./footer.module.css";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";
import * as IconMui from "@mui/icons-material";

export default function Footer(props) {
  return (
    <>
    <Box width="100%" bgcolor="white" m="60px 0 0" p="30px 0">
      <Container sx={{ display: {xs:"block",md:"flex"},justifyContent:"space-between"}}>
        <Box width={{xs:"100%",md:"55%"}} display={{xs:"blocdk",md:"flex"}}  textAlign="center" justifyContent="space-between">
          <List sx={{width:{xs:"100%",md:"auto"}}}>
            <ListItem className={css.title} sx={{fontWeight:"bold",color:"#00c85d"}}>دسترسی سریع</ListItem>
            <ListItem >
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>خانه </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>فروشگاه </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>مقالات </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>تماس باما </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>درباره ما </Link>
            </ListItem>
          </List>
          <List sx={{width:{xs:"100%",md:"auto"}}}>
            <ListItem className={css.title} sx={{fontWeight:"bold",color:"#00c85d"}}>خدمات مشتریان</ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>پاسخ به پرسش‌های متداول </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>رویه‌های بازگرداندن کالا </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>شرایط استفاده </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>حریم خصوصی  </Link>
            </ListItem>
 
          </List>
          <List sx={{width:{xs:"100%",md:"auto"}}}>
            <ListItem className={css.title} sx={{fontWeight:"bold",color:"#00c85d"}}>راهنمای خرید  </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>نحوه ثبت سفارش </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>رویه های ارسال سفارش </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>شیوه های پرداخت </Link>
            </ListItem>
            <ListItem>
              <Link style={{fontSize:"14px",color:"rgb(99 102 102)"}}>مجوزها   </Link>
            </ListItem>
      
          </List>
        </Box>
        <Box width={{xs:"100%",md:"35%"}}>
            <Typography component="p" variant="p" fontSize="15px" m="20px 0 20px" color="rgb(99 102 102)">از تخفیف‌ها و جدیدترین‌ محصولات ما باخبر شوید</Typography>
            <Box  m="0 0 20px" className={css.searchBox} width="100%" height="40px" bgcolor="#f3f3f3"  borderRadius="10px" display="flex" alignItems="center" justifyContent="space-between">
                    <input type="text" name="search" placeholder="آدرس ایمیل خود را وارد کنید" />
                    <button>ارسال</button>
                </Box>
            <Typography component="p" variant="p" m="0 0 20px" color="rgb(99 102 102)" fontSize="15px">ما را در شبکه‌های اجتماعی دنبال کنید </Typography>
            <Box display="flex" alignItems="center">
                <Link style={{width:"40px",height:"40px",background:"rgb(0 200 93 / 17%)",color:"rgb(0 200 93)",borderRadius:"10px",margin:"0 0 0 10px",display:"flex",alignItems:"center",justifyContent:"center"}}><IconMui.Telegram /></Link>
                <Link style={{width:"40px",height:"40px",background:"rgb(0 200 93 / 17%)",color:"rgb(0 200 93)",borderRadius:"10px",margin:"0 0 0 10px",display:"flex",alignItems:"center",justifyContent:"center"}}><IconMui.YouTube /></Link>
                <Link style={{width:"40px",height:"40px",background:"rgb(0 200 93 / 17%)",color:"rgb(0 200 93)",borderRadius:"10px",margin:"0 0 0 10px",display:"flex",alignItems:"center",justifyContent:"center"}}><IconMui.Instagram /></Link>
                <Link style={{width:"40px",height:"40px",background:"rgb(0 200 93 / 17%)",color:"rgb(0 200 93)",borderRadius:"10px",margin:"0 0 0 10px",display:"flex",alignItems:"center",justifyContent:"center"}}><IconMui.Twitter /></Link>
            </Box>

        </Box>
        
        </Container>
    </Box>
    <Box width="100%" bgcolor="white" borderTop="1px solid #efefef" p="10px 0" textAlign="center">
    <Typography component="p" variant="p" fontSize="15px" p="0 20px" color="rgb(99 102 102)">تمامی محتوای این سایت برای شرکتی آزمایشی محفوظ می باشد . 2024</Typography>
    </Box>
    </>
  );
}
