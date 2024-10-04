import { Alert, Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import css from "./login.module.css";
import * as IconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { AuthProviderContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    phone: false,
    password: false,
  });
  const [errors, setErrors] = useState([]);
  const { login } = useContext(AuthProviderContext);
  const mySwal = withReactContent(Swal);

  // ------- Input Form Data
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

  // ------- Check Mobile
  const isValidPhoneNumber = (phone) => {
    const validPrefixes = ["091", "092", "093"];
    const isNumeric = /^\d+$/.test(phone);
    return (
      phone.length === 11 &&
      validPrefixes.some((prefix) => phone.startsWith(prefix)) &&
      isNumeric
    );
  };

  const LoginUser = async () => {
    try {
      let user = await axios.get( `http://localhost:5000/users?mobile=${formData.phone}` );
      user = user.data;
      if (user.length > 0) {
        user = user[0]        
        if (user.password === formData.password) {
            login(user)
        }
        else{
            setErrors(["اطلاعات وارد شده صحیح نیست. لطفاً مجدداً تلاش کنید."]);
        }
      } 
      else {
        setErrors(["اطلاعات وارد شده صحیح نیست. لطفاً مجدداً تلاش کنید."]);
      }
    } 
    catch (error) {
        console.log(error);
        
    }
  };

  // ------- Checked Data
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = [];

    if (!isValidPhoneNumber(formData.phone)) {
      currentErrors.push("شماره همراه وارد شده معتبر نمی باشد !!!");
      setInputError((prevError) => ({ ...prevError, phone: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, phone: false }));
    }

    if (formData.password <= 0) {
      currentErrors.push("کلمه عبور را وارد کنید  !!!");
      setInputError((prevError) => ({ ...prevError, password: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, password: false }));
    }

    setErrors(currentErrors);

    if (currentErrors.length === 0) {
      LoginUser();
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

        {errors.length > 0 &&
          errors.map((name, index) => <Alert key={index} severity="error">{name}</Alert>)}

        {/* فرم ورود */}

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
          sx={{
            border: inputError.phone ? "1px solid red" : "1px solid #80808026",
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
          bgcolor="white"
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
