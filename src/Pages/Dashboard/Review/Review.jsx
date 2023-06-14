import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                <h1>Book</h1>
                <h1>Pro Rasel</h1>
            </div>

            <div className='bg-blue-100 h-screen md:pl-20 p-5'>
                <div className='flex flex-col space-y-2 max-w-xl'>
                    <input type="text" name='name' required placeholder="Name" className="input input-bordered w-full " />
                    <input type="text" name='email' required placeholder="Email" className="input input-bordered w-full " />
                    <textarea className="textarea" placeholder="Bio"></textarea>
                    <button className='btn btn-secondary w-1/4'>Submit</button>
                </div>

                
            </div>
        </div>
    );
};

export default Review;