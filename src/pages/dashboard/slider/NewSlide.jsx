import { Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import TitleSection from "../components/titleSection/TitleSection";
import "../../../dashboard.css";
import * as iconMui from "@mui/icons-material";

export default function NewSlide() {
    
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

          <Box className="form">
              <Box width="32%" className="input" >
                  <label>تصویر اصلی</label>
                  <input type="file" />
              </Box>
              <Box width="32%" className="input" >
                  <label>تصویر موبایل</label>
                  <input type="file" />
              </Box>
              <Box width="32%" className="input" >
                  <label>لینک</label>
                  <input type="text" />
              </Box>
              <Box width="32%" className="input" >
                  <button>ذخیره   <iconMui.SaveAltOutlined sx={{margin:"0 5px 0 0"}}/></button>
              </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
