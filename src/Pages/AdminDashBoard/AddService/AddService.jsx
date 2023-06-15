import React from 'react';

const AddService = () => {
    return (
        <div>
            <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                <h1>Add Service</h1>
                <h1>Pro Purlor</h1>
            </div>

            <form className='bg-blue-100 h-screen p-5'>
                <div className='flex flex-col border-2 p-5 bg-white rounded-xl space-y-3 '>
                    <input type="file" className="file-input w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input type="text" name='title' required placeholder="title name" className="input input-bordered md:w-1/4 font-bold" />

                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea font-bold p-10  md:w-1/4 textarea-bordered" placeholder="Description"></textarea>
                </div>
                <div className='text-end mt-2'>
                <button className='btn btn-secondary'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default AddService;