import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm mt-5 shadow-2xl bg-base-100">
                    <div className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>

                        <div>
                            <p><small>Don't have an account please
                                <Link className='ml-3 font-bold text-pink-500' to="/signUp">SingUp</Link>
                            </small></p>
                        </div>
                    </div>
                    <div className='mb-10 p-2 mx-10'>
                        <div >
                        <Link className='flex justify-evenly border-2 p-2 rounded-lg btn btn-secondary'>
                        <h1 className='text-2xl'> <FaFacebook/> </h1>
                        <h1 className=''>Connect With Facebook</h1>
                        </Link>
                        <Link className='flex mt-5 justify-evenly border-2 p-2 rounded-lg btn btn-secondary'>
                        <h1 className='text-2xl'> <FaGoogle/> </h1>
                        <h1 className=''>Connect With Google</h1>
                        </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;