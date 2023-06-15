import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                <h1>Make Admin</h1>
                <h1>Pro Purlor</h1>
            </div>

            <form className='bg-blue-100 h-screen p-5'>
                <div className='border-2 p-20 bg-white rounded-xl space-y-3 '>
                    
                    <label className="label">
                        <span className="label-text">Email Here</span>
                    </label>
                    <input type="text" name='title' required placeholder="Email" className="input input-bordered md:w-1/4 font-bold" />
                    <button className='btn btn-secondary ml-3'>Submit</button>
                </div>
                
            </form>
            
        </div>
    );
};

export default MakeAdmin;