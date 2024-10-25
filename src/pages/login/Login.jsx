import { Alert, Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import css from "./login.module.css";
import * as IconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { AuthProviderContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

export default function Login() {
  const { login } = useContext(AuthProviderContext);
  const form = useForm({mode:"onSubmit"});
  const {register,handleSubmit , formState:{errors}} = form ;
  const [loginError,setLoginErrors] = useState([])
 
  const onSubmit = async (data) => {
    try {
      let user = await axios.get( `http://localhost:5000/users?mobile=${data.mobile}` );
      user = user.data;
      if (user.length > 0) {
        user = user[0]        
        if (user.password === data.password) {
            login(user)
        }
        else{
          setLoginErrors(["اطلاعات وارد شده صحیح نیست. لطفاً مجدداً تلاش کنید."]);
        }
      } 
      else {
        setLoginErrors(["اطلاعات وارد شده صحیح نیست. لطفاً مجدداً تلاش کنید."]);
      }
    } 
    catch (error) {
        console.log(error);
        
    }
     
  };

 
  return (
    <>
      <Header />
      <Box
        className={css.box}
        width={{ xs: "70%", md: "40%", lg: "30%" }}
        height="auto"
        p="10px 30px"
        m="0 auto"
        borderRadius="20px"
      >
        <Typography
          variant="p"
          component="p"
          textAlign="center"
          color="rgb(88 88 88) "
          fontSize="20px"
          m="10px 0 "
          fontWeight="bold"
        >
          ورود
        </Typography>
 
        {Object.values(errors).map((error, index) => (
          <Alert key={index} severity="error">
            {error.message}
          </Alert>
        ))}

        {loginError.map((error, index) => (
          <Alert key={index} severity="error">
            {error}
          </Alert>
        ))}


        {/* فرم ورود */}

       <form noValidate onSubmit={handleSubmit(onSubmit)}>
       <Box
            className={css.input}
            width="100%"
            height="35px"
            m="20px 0 0"
            borderRadius="50px"
            border="1px solid #80808026"
            display="flex"
            bgcolor="white"
            alignItems="center"
            justifyContent="space-between"
            borderColor={errors.mobile?.message ? "red" : "#80808026"}
          >
            <Box
              width="15%"
              color="#9d9d9dde"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconMui.CallOutlined />
            </Box>
            <input
              type="tel"
              name="mobile"
              maxLength="11"
              {...register("mobile", {
                required: "شماره همراه را وارد کنید",
                pattern: {
                  value: /^(09[1-3])[0-9]{8}$/,
                  message: "شماره همراه معتبر نمی باشد",
                }
              })}
              placeholder="شماره همراه"
            />
          </Box>

       
          <Box
            className={css.input}
            width="100%"
            height="35px"
            m="20px 0 0"
            borderRadius="50px"
            border="1px solid #80808026"
            display="flex"
            bgcolor="white"
            alignItems="center"
            justifyContent="space-between"
            borderColor={errors.password?.message ? "red" : "#80808026"}
          >
            <Box
              width="15%"
              color="#9d9d9dde"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconMui.LockOutlined />
            </Box>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: " کلمه عبور را وارد کنید",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "کلمه عبور باید حداقل 8 کاراکتر، شامل حروف بزرگ، حروف کوچک و عدد باشد",
                },
              })}
              placeholder="کلمه عبور"
            />
          </Box>


        <Box
          className={css.input}
          width="100%"
          height="35px"
          m="20px 0 15px"
          borderRadius="50px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <button type="submit" onClick={handleSubmit}>
            ورود به حساب
          </button>
        </Box>

       </form>
        <Typography
          variant="p"
          component="p"
          color="rgb(88 88 88) "
          fontSize="13px"
        >
          حساب کاربری ندارید ؟
          <Link to="/auth/register" style={{ color: "#00c85d" }}>
            {" "}
            ایجاد کنید{" "}
          </Link>
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
