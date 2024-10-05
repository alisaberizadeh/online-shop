import { Box } from "@mui/material";
import React from "react";
import * as iconMui from "@mui/icons-material";
import { Link } from "react-router-dom";
import * as ci from "react-icons/ci";

export default function Navbar() {
  return (


    <Box className="w-full bg-white py-2">
        <Box className="container flex m-auto">
            <Box className="w-1/6 flex items-center">
                 <img className="w-1/5" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Box>
            <Box className="w-4/6 flex items-center justify-end">
                <Link className="text-2xl mr-5"><ci.CiChat1 /></Link>
                <Link className="text-2xl mr-5"><ci.CiPower /></Link>
                <Link className="text-2xl mr-5"><ci.CiBellOn /></Link>
                <Link className="text-2xl mr-5"><ci.CiHome /></Link>
            </Box>
            <Box className="w-1/6">3</Box>
        </Box>
    </Box>
  );
}
