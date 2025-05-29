'use client'

import { createContext,useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [loading,setLoading] = useState(false);
    return (
        <AuthContext.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
