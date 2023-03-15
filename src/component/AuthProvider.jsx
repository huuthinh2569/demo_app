import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setemail] = useLocalStorage("email", null);
    const navigate = useNavigate();
    const login = async (data) => {
        setemail(data);
        navigate("/dashboard");
    };
    const logout = () => {
        setemail(null);
        navigate("/", { replace: true });
    };
    const value = useMemo(
        () => ({
            email,
            login,
            logout
        }),
        [email]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
    return useContext(AuthContext);
};