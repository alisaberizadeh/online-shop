import { Alert, Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import TitleSection from "../components/titleSection/TitleSection";
import "../../../dashboard.css";
import * as iconMui from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

export default function NewSlide() {
  const form = useForm({ mode: "onSubmit" })
  const { register, control, handleSubmit, formState: { errors } } = form;

  const createSlide = (date) => {
    console.log(date.link);

  }


  return (
    <>
      <Navbar active="slider" />
      <Container maxWidth="xl">
        <Box
          width="100%"
          m="40px 0"
          bgcolor="white"
          p="20px 0"
          borderRadius="10px"
          boxShadow="0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)"
        >
          <TitleSection title="اسلاید جدید   " link="/dashboard/slider/" btn="مدیریت اسلایدر  " icon="FormatListBulleted" />

          <Container sx={{ margin: "50px auto" }}>
            {Object.values(errors).map((error, index) => (
              <Alert key={index} severity="error">
                {error.message}
              </Alert>
            ))}
          </Container>

          <form className="form" noValidate onSubmit={handleSubmit(createSlide)}>
            <Box width="32%" className="input">
              <label>تصویر اصلی</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                {...register("image", {
                  required: "آپلود تصویر ضروری است",
                  validate: {
                    fileSize: (files) => {
                      return files[0]?.size < 3 * 1024 * 1024 || "حجم تصویر اصلی باید کمتر از 3 مگابایت باشد"
                    },
                    fileType: (files) =>{
                      return ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(files[0]?.type) || "فرمت های مجاز برای تصویر اصلی : jpg , jpeg , png , gif"
                    }
                      
                  }
                })}
              />
            </Box>
            <Box width="32%" className="input">
              <label>تصویر موبایل</label>
              <input
                type="file"
                name="imageMobile"
                accept="image/*"
                {...register("imageMobile", {
                  required: "آپلود تصویر موبایل ضروری است",
                  validate: {
                    fileSize: (files) => {
                      return files[0]?.size < 3 * 1024 * 1024 || "حجم تصویر موبایل باید کمتر از 3 مگابایت باشد"
                    },
                    fileType: (files) =>{
                      return ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(files[0]?.type) || "فرمت های مجاز برای تصویر موبایل : jpg , jpeg , png , gif"
                    }
                      
                  }
                })}
              />
            </Box>
            <Box width="32%" className="input">
              <label>لینک</label>
              <input
                type="text"
                name="link"
                {...register("link", {
                  required: "لینک را وارد کنید",

                })}

              />
            </Box>
            <Box width="32%" className="input">
              <button>
                ذخیره <iconMui.SaveAltOutlined sx={{ margin: "0 5px 0 0" }} />
              </button>
            </Box>
          </form>
        </Box>
      </Container>
      <DevTool control={control} />

    </>
  );
}
