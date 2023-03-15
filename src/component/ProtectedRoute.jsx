import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
export const ProtectedRoute = ({ children }) => {
    const { email } = useAuth();
    if (!email) {
        return <Navigate to="/" />
    }
    return children;
};