import React, { createContext, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const AuthProviderContext = createContext()

export default function AuthProvider({children}) {
    const mySwal = withReactContent(Swal);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        mySwal.fire({
            title: 'خارج شدید  ',
            icon: 'success',
            timer: 3000,
            confirmButtonText: 'باشه',
          });
      };

  return (
    <AuthProviderContext.Provider value={{user,login,logout}}>
        {children}
    </AuthProviderContext.Provider>
  );
}

 