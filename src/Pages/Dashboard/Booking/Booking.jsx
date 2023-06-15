import React from 'react';
import { Outlet } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                <h1>Book</h1>
                <h1>Pro Purlor</h1>
            </div>

            <form className='bg-blue-100 h-screen md:pl-20 p-5'>
                <div className='flex flex-col space-y-2'>
                    <input type="text" name='name' required placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='email' required placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='service' required placeholder="Service Name" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='mt-5'>
                    <h1>Pay With</h1>
                </div>
                <div className='mt-5'>
                    <div className='items-center flex'>
                        <input type="radio" name="radio-3" className="mr-5 radio radio-secondary" checked />
                        <h2>Bkash</h2>
                        <button className='btn btn-secondary btn-xs ml-2'>Pay</button>

                    </div>

                    <div>
                        <div className='items-center flex mt-5'>
                            <input type="radio" name="radio-3" className="mr-5 radio radio-secondary" />
                            <h2>Nogod</h2>
                            <button className='btn btn-secondary btn-xs ml-2'>Pay</button>
                        </div>
                    </div>

                   

                </div>
            </form>


        </div>
    );
};

export default Booking;