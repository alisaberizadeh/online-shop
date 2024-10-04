import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProviderContext } from "./AuthProvider";

const GuestCheck = ({ children }) => {
  const { user } = useContext(AuthProviderContext);

  if (!user) {
    return children;
  }

  return <Navigate to="/" />;
};

export default GuestCheck;
