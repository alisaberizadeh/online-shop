import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProviderContext } from "./AuthProvider";

const AdminCheck = ({ children }) => {
  const { user } = useContext(AuthProviderContext);

  if (user && user.type === 1) {
    return children;
  }

  return <Navigate to="/" />;
};

export default AdminCheck;
