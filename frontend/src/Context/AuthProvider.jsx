import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    const [AuthUser, setAuthUser] = useState(initialState)

    return (


        <AuthContext.Provider value={[AuthUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>

    )





}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider

