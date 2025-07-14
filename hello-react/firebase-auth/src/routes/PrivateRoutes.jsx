import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router';

export default function PrivateRoutes( { children }) {

    const user = useContext(AuthContext);
    console.log("Private Route ",user);
    console.log("Private Route ",user?.email);
    if (user?.email) {
        return  children;
    }

  return <Navigate to="/" />
}
