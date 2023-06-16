import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
   
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
       event.preventDefault()

       const form = event.target 
       const first = form.first.value 
       const last = form.last.value 
       const email = form.email.value 
       const password = form.password.value 
       const confirm = form.confirm.value 

       console.log(first,last,email,password,confirm)
       form.reset()
       createUser(email,password) 
       .then((userCredential) => {
        
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
       
    }


    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center md:mt-20 lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">SignUp!</h1>
                </div>
                <div className="card  flex-shrink-0 w-full mt-5 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body w-96">
                        <div className="form-control">

                            <input type="text" name='first' required placeholder="First Name" className="input input-bordered " />
                        </div>
                        <div className="form-control">

                            <input type="text" name='last' required placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='email' required placeholder="UserName Or Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='password' required placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='confirm' required placeholder="Confirm Password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Create an account </button>
                        </div>


                        <div className='mx-auto'>

                            <p ><small>Already have an account please
                                <Link to="/login" className='ml-3 font-bold text-pink-500' >Login</Link>
                            </small></p>
                        </div>
                    </form>


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