import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProviderContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthProviderContext)

  if (user) {
    return <Navigate to="/" />; 
  }

  return children; 
};

export default ProtectedRoute;
