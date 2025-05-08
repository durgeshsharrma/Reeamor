import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import { useAuth } from "./Context/AuthProvider"
import Login from './Pages/Login';
import Signup from './Pages/Signup';






function App() {
  const [authUser, setAuthUser] = useAuth();



  return (
    <Routes>

      <Route path="/" element={<Home></Home>} />
      <Route path='/login' element={authUser ? <Navigate to={'/'}></Navigate> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to={'/'}></Navigate> : <Signup />} />
       
    </Routes>
  )
}

export default App

