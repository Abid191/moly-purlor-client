import React from 'react';

const Middle = () => {
    return (
        <div>
             <div className='bg-pink-100 mt-10 p-5'>
           <div className='md:flex justify-evenly md:py-20 py-10'>
           <div >
                    <img src="/src/assets/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png" width={580} alt="" />
                </div>



                <div className=' space-y-5 md:mt-0 mt-10 md:m-0 m-24'>
                    <h1 className='text-4xl font-bold'>Let us handle your <br /> screen <span className='text-pink-500'>Professionally</span>.</h1>
                    <p> <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br />  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</small> </p> 
                    <div className='flex gap-10'>
                        <div className=' mt-10'>

                            <h2 className='text-pink-500 font-bold text-4xl'>500+</h2>
                            <h2 className='mt-3'>HAPPY CUSTOMER</h2>

                        </div>
                        <div className=' mt-10'>
                        <h2 className='text-pink-500 font-bold text-4xl'>16+</h2>
                            <h2 className='mt-3'>Total Service</h2>

                        </div>
                    </div>
                </div>
           </div>
        </div>
        </div>
    );
};

export default Middle;