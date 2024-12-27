import React, { useEffect, useState } from "react";
import css from "./blogHome.module.css";
import { Box, Typography } from "@mui/material";
import Article from "../article/Article";
import axios from "axios";

export default function BlogHome(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const axiosData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/articles")
        setArticles(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    axiosData()
  }, [])

  return (
    <Box width="100%" m="30px 0" >
      <Typography component="p" display="flex" alignItems="center" className={css.title} variant="p" fontSize="25px" m="0 0 25px">  مقالات</Typography>
      <Box width="100%" display={{ xs: "block", sm: "flex", lg: "flex " }} flexWrap="wrap" justifyContent="space-between" >

        {articles.map((item, index) => (
          <Article key={index} title={item.title} src={item.src} date={item.date} />
        ))}
      </Box>

    </Box>
  );
}
