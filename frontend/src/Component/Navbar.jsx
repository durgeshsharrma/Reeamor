import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Cookies from 'js-cookie'
import { useAuth } from '../Context/AuthProvider';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Login from '../Pages/Login.jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [authUser, setAuthUser] = useAuth();




    const handleLogout = async () => {

        // setIsOpen(!isOpen); // Close the menu if it's open 

        await axios({
            method: 'get',
            url: `http://localhost:4000/logout`,
            withCredentials: true,
        }).then((res) => {

            console.log('yaha me then me hu')
            localStorage.removeItem('user'); // Clear user data from local storage
            setAuthUser(null); // Clear user data from context or state
            const cookieName = 'jwt'; // Replace with your actual cookie name

            Cookies.remove(cookieName) // Clear user data from context or state
            Swal.fire({
                icon: 'success',
                title: 'Logout Successful!',
                text: `Logged out Successfully`,
                background: '#fff',
                color: '#4caf50',
                confirmButtonColor: '#28a745',
                confirmButtonText: 'Great! 🎉',
                timer: 5000,
                timerProgressBar: true
            });
            setTimeout(() => {
                window.location.href = '/login'; // Redirect to login page after logout
            }, 2000); // Adjust the delay as needed

        }).catch((error) => {
            console.error('Logout error:', error.message);
            toast.error(error.response?.data?.message || 'Logout failed. Please try again later.');
        }
            // Perform any additional logout logic here, such as clearing tokens or user data   

        )
    }

    return (
        <nav className="bg-white  ">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    Reeamor
                </div>

                {/* Right side: Nav links + Button */}
                <div className="ml-auto flex items-center">
                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <li><a style={{ textDecoration: 'none' }} href="#home" className="hover:text-blue-600 text-xl">Home</a></li>
                        <li><a style={{ textDecoration: 'none' }}  href="#about" className="hover:text-blue-600 text-xl">About</a></li>
                        <li><a style={{ textDecoration: 'none' }}  href="#investment" className="hover:text-blue-600 text-xl">Investment</a></li>
                        <li><a style={{ textDecoration: 'none' }} href="#contact" className="hover:text-blue-600 text-xl">Contact</a></li>
                    </ul>

                    {/* Button */}
                    <div className="hidden md:block ml-6">
                        <button className="bg-[#856fbb] fs-6 font-bold text-white text-xl px-6 py-2 rounded transition">
                           Download
                        </button>
                    </div>


                    <div className="hidden md:block ml-6">


                        {authUser ? (
                            <button onClick={handleLogout} className="transition-transform duration-200 hover:-translate-y-1">Logout</button>
                        ) : (
                            // <Link to="/login">Login</Link>
                                <Link style={{ textDecoration: 'none' }} to='/login' className="bg-[#856fbb] fs-6 font-bold text-white text-xl px-6 py-2 rounded transition">
                                    Login
                                </Link>
                        )}
                          



                        
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden ml-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:bg-gray-100 p-2 rounded transition duration-200"
                        >
                            <svg
                                className="h-8 w-8 text-gray-800 hover:text-blue-600 hover:scale-110 transition duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    </div>
                </div>
            

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-2 text-gray-700">
                    <a style={{textDecoration :'none'}} href="#home" className="block text-xl font-semibold hover:text-blue-600">Home</a>
                    <a style={{ textDecoration: 'none' }} href="#about" className="block text-xl mt-6 font-semibold hover:text-blue-600">About</a>
                    <a style={{ textDecoration: 'none' }} href="#investment" className="block text-xl mt-6 font-semibold hover:text-blue-600">Investment</a>
                    <a style={{ textDecoration: 'none' }} href="#contact" className="block text-xl mt-6 font-semibold hover:text-blue-600">Contact</a>
                   

                    {/* Button */}
                    <div className="mt-2 text-white py-2 mt-6 rounded transition">
                        <button className="bg-[#856fbb] transition duration-200 fs-6 font-bold text-white text-xl px-6 py-2 rounded transition">
                            Download
                        </button>
                    </div>
                    {authUser ? (
                        <button onClick={handleLogout} className="transition-transform duration-200 hover:-translate-y-1">Logout</button>
                    ) : (
                        // <Link to="/login">Login</Link>
                            <Link to='/login' style={{ textDecoration: 'none' }} className="bg-[#856fbb] fs-6 font-bold text-white text-xl px-6 py-2 rounded transition">
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
