import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">SignUp!</h1>
                </div>
                <div className="card  flex-shrink-0 w-full mt-5 shadow-2xl bg-base-100">
                    <div className="card-body w-96">
                        <div className="form-control">

                            <input type="text" name='first' required placeholder="First Name" className="input input-bordered " />
                        </div>
                        <div className="form-control">

                            <input type="text" name='Last' required placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='email' required placeholder="UserName Or Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='Password' required placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='Confirm' required placeholder="Confirm Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Create an account </button>
                        </div>


                        <div className='mx-auto'>

                            <p ><small>Already have an account please
                                <Link to="/login" className='ml-3 font-bold text-pink-500' >Login</Link>
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <h1 className='divider'> or</h1>
                    </div>

                    <div className='mb-10 p-2 mx-20'>
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

export default SignUp;