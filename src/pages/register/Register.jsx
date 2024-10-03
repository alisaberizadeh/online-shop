import { Alert, Box, Typography } from "@mui/material";
import React, {  useContext, useEffect, useState } from "react";
import css from "./register.module.css";
import * as IconMui from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { AuthProviderContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });
  const [errors , setErrors] = useState([])
  const [uniqueErrors , setUniqueErrors] = useState([])
  const {login} = useContext(AuthProviderContext)
  const navigate = useNavigate();
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
    if (name === "email") {
      const isValid = isValidEmail(value); 
      setInputError((prevError) => ({
        ...prevError,
        email: !isValid,
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
  // ------- Check Email
  const isValidEmail = () => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(formData.email).toLowerCase());
  };  
  
  // ------ Add User Function
const addUser = async () => {

  const usersResponse = await axios.get("http://localhost:5000/users");
  const users = usersResponse.data;
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  

  const newUser = {
    id: newId,
    name: formData.name,
    email: formData.email,
    mobile: formData.phone,
    password: formData.password,
    date: new Date().toISOString().split("T")[0], 
    type: 2 
  };

  setUniqueErrors([])

  const emailExists = users.some(user => user.email === formData.email);
  if (emailExists) {
    setUniqueErrors((prevError) => ([ ...prevError, "ایمیل  مطعلق به کاربر دیگری است"]))
  }
  const mobileExists = users.some(user => user.mobile === formData.phone);
  if (mobileExists) {
    setUniqueErrors((prevError) => ([ ...prevError, "شماره همراه مطعلق به کاربر دیگری است"]))
  }

  if (!emailExists && !mobileExists) {
      try {
      const response = await axios.post("http://localhost:5000/users", newUser);
      if (response.status === 201) {
        login(response.data)
        navigate("/")
        mySwal.fire({
          title: response.data.name +'خوش آمدید ',
          text: "وارد حساب کاربری شدید",
          icon: 'success',
          timer: 3000,
          confirmButtonText: 'باشه',
        });
      }
      } catch (error) {
        console.error("Error adding user:", error);
      }
  }
  
};

  // ------- Checked and Add User
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = []; 
  
    if (formData.name <= 0) {
      currentErrors.push("فیلد نام و نام خانوادگی نمی تواند خالی باشد!!!");
      setInputError((prevError) => ({ ...prevError, name: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, name: false }));
    }
    if (!isValidPhoneNumber(formData.phone)) {
      currentErrors.push("شماره همراه وارد شده معتبر نمی باشد !!!");
      setInputError((prevError) => ({ ...prevError, phone: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, phone: false }));
    }
  
    if (!isValidEmail(formData.email)) {
      currentErrors.push("ایمیل وارد شده معتبر نمی باشد !!!");
      setInputError((prevError) => ({ ...prevError, email: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, email: false }));
    }
  
    if ((formData.password !== formData.confirmPassword) || (formData.password <= 0 || formData.confirmPassword <= 0) ) {
      currentErrors.push("کلمه عبور مطابقت ندارد !!!");
      setInputError((prevError) => ({ ...prevError, password: true }));
    } else {
      setInputError((prevError) => ({ ...prevError, password: false }));
    }
  
    setErrors(currentErrors);
  
    if (currentErrors.length === 0) {
        addUser();
    }

  };
  
  return (
    <>
      <Header />
      <Box
        className={css.box}
        width={{xs:"70%",md:"40%",lg:"30%"}}
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

      
        

        {errors.length > 0 && (
                errors.map((name, index) => (
                  <Alert severity="error">
                      {name}
                 </Alert>
                ))
        )}
 
        {uniqueErrors.length > 0 && (
                uniqueErrors.map((name, index) => (
                  <Alert severity="error">
                      {name}
                 </Alert>
                ))
         )}

     

           
        

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
            bgcolor="white"
            sx={{
              border: inputError.name
                ? "1px solid red"
                : "1px solid #80808026",
            }}

          >
              <Box width="15%" color="#9d9d9dde" height="100%" display="flex" alignItems="center" justifyContent="center">
                <IconMui.AccountCircleOutlined />
              </Box>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="نام و نام خانوادگی "  />
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
              border: inputError.phone
                ? "1px solid red"
                : "1px solid #80808026",
            }}
          >
              <Box width="15%" color="#9d9d9dde" height="100%" display="flex" alignItems="center" justifyContent="center">
                <IconMui.CallOutlined />
              </Box>
              <input type="text"  name="phone" value={formData.phone} onChange={handleChange} maxLength="11" placeholder="شماره همراه" />
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
              border: inputError.email
                ? "1px solid red"
                : "1px solid #80808026",
            }}
          >
              <Box width="15%" color="#9d9d9dde" height="100%" display="flex" alignItems="center" justifyContent="center">
                <IconMui.EmailOutlined />
              </Box>
              <input type="email" name="email" value={formData.email}  onChange={handleChange} placeholder=" ایمیل" />
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
              <Box width="15%" color="#9d9d9dde" height="100%" display="flex" alignItems="center" justifyContent="center">
                  <IconMui.LockOutlined />
              </Box>
                <input type="password" name="password" value={formData.password}  onChange={handleChange}  placeholder="کلمه عبور" />
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
            sx={{
              border: inputError.password
                ? "1px solid red"
                : "1px solid #80808026",
            }}
          >
                <Box width="15%" color="#9d9d9dde" height="100%" display="flex" alignItems="center" justifyContent="center">
                  <IconMui.LockOutlined />
                </Box>
                <input type="password" name="confirmPassword" value={formData.confirmPassword}  onChange={handleChange}  placeholder="تکرار کلمه عبور" />
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
            <button type="submit" onClick={handleSubmit}>بزن بریم!</button>
          </Box>

          <Typography variant="p" component="p" color="rgb(88 88 88) " fontSize="13px">
          قبلا عضو شده اید ؟
          <Link to="/auth/login" style={{color:"#00c85d"}}> وارد شوید </Link>
        </Typography>
      </Box>
      
      <Footer />

    </>
  );
}
