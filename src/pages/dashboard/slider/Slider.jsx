import { Box, Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import css from "./slider.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import TitleSection from "../components/titleSection/TitleSection";
import "../../../dashboard.css";
import * as ci from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slider() {
  const [loader, setLoader] = useState(true);
  const mySwal = withReactContent(Swal);
  const [sliders, setSliders] = useState([]);

  let getData = async () => {
    setTimeout(async () => {
      const response = await axios.get("http://localhost:5000/slider");
      setSliders(response.data);
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteSlider = async (event, id) => {
    event.preventDefault();
    Swal.fire({
      title: "آیا اطمینان دارید که باید حذف شود؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#c3c3c3",
      confirmButtonText: "بله ، حذف کن",
      cancelButtonText: "لغو",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/slider/${id}`);
          mySwal.fire({
            title: "با موفقیت حذف شد",
            icon: "success",
            timer: 3000,
            confirmButtonText: "باشه",
          });
          setSliders(sliders.filter((slider) => slider.id !== id));
        } catch (error) {
          console.error("Error deleting the slider:", error);
        }
      }
    });
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
            title="لیست اسلاید ها"
            link="/dashboard/slider/new/"
            btn="اسلاید جدید"
            icon="Add"
          />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ردیف</TableCell>
                  <TableCell>تصویر</TableCell>
                  <TableCell>لینک</TableCell>
                  <TableCell>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loader
                  ? [1, 2, 3, 4, 5].map((index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton width={50} height={30}  />
                        </TableCell>
                        <TableCell>
                          <Skeleton width={200} height={30} />
                        </TableCell>
                        <TableCell>
                          <Skeleton width={100} height={30} />
                        </TableCell>
                        <TableCell>
                          <Skeleton width={150} height={30}  />
                        </TableCell>
                      </TableRow>
                    ))
                  : sliders.map((slider, index) => (
                      <TableRow key={slider.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Box
                            component="img"
                            src={slider.image}
                            width="200px"
                            borderRadius="10px"
                            alt={slider.link}
                          />
                        </TableCell>
                        <TableCell>
                          <a href={slider.link}>{slider.link}</a>
                        </TableCell>
                        <TableCell>
                          <Link className="editBtn">
                            <ci.CiEdit />
                          </Link>
                          <Link
                            className="deleteBtn"
                            onClick={(event) => deleteSlider(event, slider.id)}
                          >
                            <ci.CiTrash />
                          </Link>
                          <a href={slider.image} className="seeBtn">
                            <ci.CiLink />
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}
