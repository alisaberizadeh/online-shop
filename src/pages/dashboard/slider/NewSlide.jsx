import { Alert, Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import TitleSection from "../components/titleSection/TitleSection";
import "../../../dashboard.css";
import * as iconMui from "@mui/icons-material";
import { useState } from "react";

export default function NewSlide() {
  const [formData, setFormData] = useState({
    image: "",
    imageMobile: "",
    link: "",
  });
  const [errors, setErrors] = useState([]);

  let handleChange = (event) => {
    const { name, files } = event.target;
    let value = files ? files[0] : event.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  // let validateFile = (file) => {
  //   const fileType = file.type.toLowerCase();
  //   const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
  //   const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  //   setErrors([]);

  //   if (!file.type) {
  //     setErrors((prev) => [...prev, "نوع فایل معتبر نیست."]);
  //     return false;
  //   }

  //   if (!validTypes.includes(fileType)) {
  //     setErrors((prev) => [...prev, "فقط فرمت‌های JPG, PNG و GIF مجاز هستند."]);
  //     return false;
  //   }

  //   if (file.size > maxSizeInBytes) {
  //     setErrors((prev) => [
  //       ...prev,
  //       "اندازه فایل نباید بیشتر از 5 مگابایت باشد.",
  //     ]);
  //     return false;
  //   }

  //   return true;
  // };

  let handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = [];
     
  };

  return (
    <>
      <Navbar active="slider" />
      <Container>
        <Box
          width="100%"
          m="40px 0"
          bgcolor="white"
          p="20px 0"
          borderRadius="10px"
          boxShadow="0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)"
        >
          <TitleSection
            title="اسلاید جدید   "
            link="/dashboard/slider/"
            btn="مدیریت اسلایدر  "
            icon="FormatListBulleted"
          />

          {errors.length > 0 &&
            errors.map((name, index) => (
              <Alert key={index} severity="error">
                {name}
              </Alert>
            ))}

          <Box className="form">
            <Box width="32%" className="input">
              <label>تصویر اصلی</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </Box>
            <Box width="32%" className="input">
              <label>تصویر موبایل</label>
              <input
                type="file"
                name="imageMobile"
                onChange={handleChange}
                accept="image/*"
              />
            </Box>
            <Box width="32%" className="input">
              <label>لینک</label>
              <input
                type="text"
                name="link"
                onChange={handleChange}
                value={formData.link}
              />
            </Box>
            <Box width="32%" className="input">
              <button onClick={handleSubmit}>
                ذخیره <iconMui.SaveAltOutlined sx={{ margin: "0 5px 0 0" }} />
              </button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
