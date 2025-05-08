import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useAuth } from '../Context/AuthProvider';
import { Link, Navigate } from 'react-router-dom';


const Signup = () => {
    const [authUser, setAuthUser] = useAuth()


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }


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

                //   console.log(res.data.user)

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
        <>

            <div className='md:flex h-screen items-center w-full'>

                <div className='md:w-[50%] w-full  flex items-center justify-center bg-cover bg-center'>


                    <img
                        src="https://img.freepik.com/free-vector/group-chat-concept-illustration_114360-1476.jpg?t=st=1742289120~exp=1742292720~hmac=3df608ab1f20c2a7f48c4a351786f646124eeccad997dbc58b5d079a171009a2&w=740"
                        alt="Group Chat"
                        className="max-w-full max-h-screen object-cover"
                    />

                </div>


                <div className='flex-1 flex  items-center justify-center center p-8'>

                    <div className='shadow-emerald-600 shadow-lg w-full'>
                        <h1 className='text-3xl text-center text-green-500 mt-3 font-bold'>Chat<span className='text-black text-4xl'>App</span></h1>
                        <form onSubmit={handleSubmit(onSubmit)} action="" className='p-8 w-full'>
                            <h1 className='text-3xl text-start font-bold mb-5'>Signup</h1>

                            <div className='mb-5'>
                                <label className="input w-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                    <input {...register("firstName", { required: true })} type="input" placeholder="First Name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                                </label>
                                {errors.firstName && <span className='text-red-500 font-semibold'>*This field is required</span>}

                            </div>

                            <div className='mb-5'>
                                <label className="input w-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                    <input {...register("lastName", { required: true })} type="input" placeholder="Last Name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                                </label>
                                {errors.lastName && <span className='text-start font-semibold text-red-500'>*This field is required</span>}
                            </div>









                            <div className='mb-5'>
                                <label className="input w-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                    <input {...register("email", { required: true })} type="email" placeholder="mail@site.com" />
                                </label>
                                {errors.email && <span className='text-start font-semibold text-red-500'>*This field is required</span>}
                            </div>



                            <div className='mb-5'>
                                <label className="input w-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                                    <input {...register("password", { required: true, validate: (value) => value === watch("password") || "Passwords don't match" })} type="password" placeholder="*********" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                                </label>
                                {errors.password && <span className='text-start font-semibold text-red-500'>This field is required</span>}
                            </div>



                            <div className='mb-5'>
                                <label className="input w-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                                    <input {...register("confirmPassword", { required: true, validate: (value) => value === watch("password") || "Passwords don't match" })} type="password" placeholder="*********" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                                </label>
                                {errors.confirmPassword && <span className='text-start font-semibold text-red-500'>This field is required</span>}
                            </div>



                            <button type="submit" className='btn btn-warning w-full mb-3'>Signup</button>
                            <p>Do you have an Account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
