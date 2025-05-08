import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2';
import { useAuth } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import Button from 'react-bootstrap/Button';

const Signup = () => {
    const [authUser, setAuthUser] = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        };

        await axios.post('http://localhost:4000/signup', userData, { withCredentials: true })
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successful!',
                    text: res.data.message,
                    background: '#fff',
                    color: '#4caf50',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'Great! 🎉',
                    timer: 5000,
                    timerProgressBar: true
                });
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setAuthUser(res.data.user)
                window.location.href = '/'; // Redirect to login page after signup
            })
            .catch((err) => {
                if (err.response.data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: err.response.data.error,
                        background: '#fff',
                        color: '#f44336',
                        confirmButtonColor: '#f44336',
                        confirmButtonText: 'Got it!',
                        timer: 5000,
                        timerProgressBar: true
                    });
                }
            })
    };




    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Image Section */}
            <div className="hidden md:flex md:w-1/2 bg-green-100 justify-center items-center p-8">
                <img
                    src="https://img.freepik.com/free-vector/group-chat-concept-illustration_114360-1476.jpg"
                    alt="Chat Illustration"
                    className="w-full max-w-md rounded-xl shadow-lg"
                />
            </div>

            {/* Signup Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
                    <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Chat<span className="text-black">App</span></h1>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create your account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* First Name */}
                        <div className="mb-4">
                            <input
                                {...register("firstName", { required: true })}
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required</p>}
                        </div>

                        {/* Last Name */}
                        <div className="mb-4">
                            <input
                                {...register("lastName", { required: true })}
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">Last name is required</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">
                            <input
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === watch("password") || "Passwords do not match"
                                })}
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message || "Confirm Password is required"}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>

                        <p className="text-center mt-4 text-gray-600">
                            Already have an account?{" "}
                            <Link className="text-blue-600 hover:underline" to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
