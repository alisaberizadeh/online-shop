import { Alert, Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import css from "./register.module.css";
import * as IconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { AuthProviderContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Register() {
  const { login } = useContext(AuthProviderContext);
  const form = useForm({mode:"onSubmit"});
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  const password = watch("password");

  const onSubmit =async (data) => {
    const usersResponse = await axios.get("http://localhost:5000/users");
    const users = usersResponse.data;
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = {
      id: newId,
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      date: new Date().toISOString().split("T")[0], 
      type: 2 
    };
    try {
      const response = await axios.post("http://localhost:5000/users", newUser);
      if (response.status === 201) {
        login(response.data)
      }
      } catch (error) {
        console.error("Error adding user:", error);
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
          عضویت
        </Typography>

        {Object.values(errors).map((error, index) => (
          <Alert key={index} severity="error">
            {error.message}
          </Alert>
        ))}

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Box
            className={css.input}
            width="100%"
            height="35px"
            m="20px 0 0"
            borderRadius="50px"
            border="1px solid #80808026"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="white"
            borderColor={errors.name?.message ? "red" : "#80808026"}
          >
            <Box
              width="15%"
              color="#9d9d9dde"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconMui.AccountCircleOutlined />
            </Box>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "نام و نام خانوادگی را وارد کنید",
                pattern: {
                  value: /^[\u0600-\u06FFa-zA-Z\s]+$/,
                  message:
                    "نام فقط می‌تواند شامل حروف فارسی، انگلیسی و فاصله باشد",
                },
              })}
              placeholder="نام و نام خانوادگی "
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
                },
                validate: {
                  mobileUnique: async (value) => {
                    try {
                      const response = await axios.get(`http://localhost:5000/users?mobile=${value}`);
                      return (response.data.length === 0 || "شماره قبلا ثبت شده است");
                    } catch (error) {
                      console.error("Error fetching user:", error);
                      return "خطا در بررسی شماره همراه"; 
                    }
                  },
                },
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
            borderColor={errors.email?.message ? "red" : "#80808026"}
          >
            <Box
              width="15%"
              color="#9d9d9dde"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconMui.EmailOutlined />
            </Box>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: " ایمیل را وارد کنید",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "ایمیل معتبر نمی باشد",
                },
                validate: {
                  emailUnique: async (value) => {
                    try {
                      const response = await axios.get(`http://localhost:5000/users?email=${value}`);
                      return (response.data.length === 0 || "ایمیل قبلا ثبت شده است");
                    } catch (error) {
                      console.error("Error fetching user:", error);
                      return "خطا در بررسی   ایمیل"; 
                    }
                  },
                },
              })}
              placeholder=" ایمیل"
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
            m="20px 0 0"
            borderRadius="50px"
            border="1px solid #80808026"
            bgcolor="white"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderColor={errors.confirmPassword?.message ? "red" : "#80808026"}
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
              name="confirmPassword"
              {...register("confirmPassword", {
                required: " تکرار کلمه عبور را وارد کنید",
                validate: (value) =>
                  value === password ||
                  "تکرار کلمه عبور  با کلمه عبور   برابر نمی باشد",
              })}
              placeholder="تکرار کلمه عبور"
            />
          </Box>

          <Typography
            variant="p"
            component="p"
            color="rgb(187 187 187)"
            fontSize="12px"
            m="10px 0 0"
          >
            حداقل 8 کاراکتر، شامل حروف بزرگ، حروف کوچک و عدد باشد
          </Typography>

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
            <button  type="submit">
              بزن بریم!
            </button>
          </Box>
        </form>

        <Typography
          variant="p"
          component="p"
          color="rgb(88 88 88) "
          fontSize="13px"
        >
          قبلا عضو شده اید ؟
          <Link to="/auth/login" style={{ color: "#00c85d" }}>
            {" "}
            وارد شوید{" "}
          </Link>
        </Typography>
      </Box>
      <DevTool control={control} />

      <Footer />
    </>
  );
}
