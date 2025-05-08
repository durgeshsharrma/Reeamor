import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const initialState = localStorage.getItem('chatApp') ? JSON.parse(localStorage.getItem('chatApp')) : null
    const [AuthUser, setAuthUser] = useState(initialState)

    return (


        <AuthContext.Provider value={[AuthUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>

    )





}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider

