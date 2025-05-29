import React, { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

function useAuth() {
    const { user, setUser, isLoggedIn, setIsLoggedIn, loading, setLoading } =
        useContext(AuthContext);
    return {
        user, setUser, isLoggedIn, setIsLoggedIn, loading, setLoading
    }
}

export { useAuth };
