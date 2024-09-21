import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import css from "./register.module.css";
import * as IconMui from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [inputError, setInputError] = useState({
    name: false,
    phone: false,
    password: false,
  });

  // ------- دریافت مقادیر فیلد ها
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "phone") {
      const isValid = isValidPhoneNumber(value); 
      setInputError((prevError) => ({
        ...prevError,
        phone: !isValid,
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ------- بررسی پیش شماره
  const isValidPhoneNumber = (phone) => {
    const validPrefixes = ["091", "092", "093"];
    return (
      phone.length === 11 &&
      validPrefixes.some((prefix) => phone.startsWith(prefix))
    );
  };

  // ------- ارسال درخواست به API
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("کلمه عبور و تکرار کلمه عبور مطابقت ندارند!");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      alert(
        "شماره همراه وارد شده با پیش‌شماره‌های مجاز شروع نمی‌شود (091, 092, 093)."
      );
      return;
    }
  };

  return (
    <Box
      className={css.register}
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className={css.box}
        width={{xs:"70%",md:"40%",lg:"25%"}}
        height="auto"
        p="10px 30px"
        bgcolor="white"
        m="auto"
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

        {/* فرم ثبت‌نام */}
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
            sx={{
              border: inputError.name ? "1px solid red" : "1px solid #80808026",
            }}
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
              value={formData.name}
              onChange={handleChange}
              placeholder="نام کافی نت"
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
            alignItems="center"
            justifyContent="space-between"
            sx={{
              border: inputError.phone
                ? "1px solid red"
                : "1px solid #80808026",
            }}
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
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength="11"
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
            alignItems="center"
            justifyContent="space-between"
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
              value={formData.password}
              onChange={handleChange}
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
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              border: inputError.password
                ? "1px solid red"
                : "1px solid #80808026",
            }}
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
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="تکرار کلمه عبور"
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
            <button type="submit">بزن بریم!</button>
          </Box>
          <Typography
          variant="p"
          component="p"
          color="rgb(88 88 88) "
          fontSize="13px"
        >
          قبلا عضو شده اید ؟
          <Link to="/login"> وارد شوید </Link>
        </Typography>
      </Box>
    </Box> 
  );
}
