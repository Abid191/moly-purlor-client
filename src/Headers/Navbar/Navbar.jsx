import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/Shared/AuthProvider/AuthProvider';

const Navbar = () => {
    

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
         logOut()
         .then(() => {

         }).catch((error) => {
             console.log(error)
         });
    }


    const Navbar = <>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="portfolio"> Our Portfolio </Link></li>
        <li><Link to="team"> Our Team </Link></li>
        <li><Link to="contact"> Contact Us </Link></li>
        { user && <li><Link to="dashboard"> Dashboard </Link></li>}
        { user && <li><Link to="admindash"> Admin </Link></li>}

    </>
    return (
       
            <div className="navbar md:w-11/12  mt-5 fixed">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-2/4' src="/src/assets/assets/logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-center navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-slate-400  px-1 mr-10 font-semibold ">
                    {Navbar}
                </ul>
            </div>
            {
                user ? 
                <>
                <button onClick={handleLogOut} className='btn btn-secondary'>Log Out</button>
                </> :
                <>
                <Link to="/login" className="btn text-white bg-pink-400">Login</Link>
                </>
            }
        </div>
        
    );
};

export default Navbar;