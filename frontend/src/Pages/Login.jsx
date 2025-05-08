import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        };

        axios.post('http://localhost:4000/login', userData)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: res.data.data,
                    background: '#fff',
                    color: '#4caf50',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'Great! 🎉',
                    timer: 5000,
                    timerProgressBar: true
                });
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setAuthUser(res.data.data);
                navigate('/');
            })
            .catch((err) => {
                if (err.response?.data?.error) {
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
            });
    };

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            {/* Left Image */}
            <div className='md:w-1/2 flex items-center justify-center bg-gray-100'>
                <img
                    src="https://img.freepik.com/free-vector/group-chat-concept-illustration_114360-1476.jpg?t=st=1742289120~exp=1742292720~hmac=3df608ab1f20c2a7f48c4a351786f646124eeccad997dbc58b5d079a171009a2&w=740"
                    alt="Group Chat"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Right Form */}
            <div className='md:w-1/2 w-full flex items-center justify-center px-6 py-10 bg-white'>
                <div className='w-full max-w-md shadow-lg rounded-lg p-8'>
                    <h1 className='text-4xl font-bold text-center mb-8 text-purple-700'>
                        Ree<span className='text-black'>Amor</span>
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="mail@site.com"
                                className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            {errors.email && <span className='text-sm text-red-500'>*This field is required</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
                                })}
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            {errors.password && <span className='text-sm text-red-500'>*Password must be strong</span>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                        >
                            Login
                        </button>

                        {/* Redirect */}
                        <p className='text-center text-sm mt-4'>
                            Don't have an account? <Link className='text-blue-600 font-semibold' to="/signup">Signup</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
