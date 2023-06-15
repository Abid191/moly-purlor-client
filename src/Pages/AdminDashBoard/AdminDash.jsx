import React from 'react';
import { FaAddressBook, FaBackward, FaBookOpen, FaFacebookMessenger, FaFirstOrder, FaPhoneSquare, FaPlus, FaServer, FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const AdminDash = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  items-center ">
                   
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <img className='w-2/4' src="/src/assets/assets/logo.png" alt="" />
                        <div className='mt-5'>
                            <li><Link to="order"> <span><FaPhoneSquare /> </span> Order</Link></li>
                            <li><Link to="service"> <span><FaPlus /></span>Add Service</Link></li>
                            <li><Link to="makeadmin"><span> <FaUserPlus /></span>Make Admin</Link></li>
                            <li><Link to="manage"><span> <FaServer /></span>Manage Service</Link></li>
                            <li><Link to="/"><span> <FaBackward /></span>Back to home</Link></li>
                        </div>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default AdminDash;