import React from 'react';
import Navbar from '../Navbar/Navbar';
import Middle from '../Middle/Middle';

const Header = () => {
    return (
        <div>
            <div className='md:flex md:justify-center md:gap-60 py-40 bg-pink-100 rounded-lg p-5'>
                <section className='mt-20 space-y-6 md:ml-5 ml-10'>
                    <h1 className=' md:text-6xl font-bold'>BEAUTY SALON <br />
                        FOR EVERY WOMEN
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
                    </p>
                    <div>
                        <button className="btn btn-secondary">Get an Appointmen</button>
                    </div>
                </section>



                <section className='md:mt-0 mt-10 md:ml-0 ml-10'>
                    <img className='mr-20' width={480} height={500} src="/src/assets/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png" alt="" />
                </section>
            </div>

            <div className='text-center md:text-4xl text-2xl md:mt-20 mt-10 font-bold'>
                <h1 >Our Awesome <span className='text-pink-500'>Services</span></h1>
            </div>


            <div>
                <div className='grid md:grid-cols-3 md:mt-20 mt-10'>
                    <div className=' text-center border-2 w-2/3 p-5 space-y-3 shadow-cyan-700 mx-auto shadow-lg hover:scale-110 translate-x-4 duration-300'>
                        <img className='mx-auto' src="/src/assets/assets/icons/Group 1372.png" width={72} alt="" />
                        <h3 className='font-bold'>Anti Age Face Treatment</h3>
                        <p className='text-pink-500 font-bold'>$199</p>
                        <p>We craft stunning and <br /> amazing web UI, using a well drrafted <br />   UX to fit your product.</p>
                    </div>
                    <div className=' text-center border-2 w-2/3 p-5 space-y-3 shadow-cyan-700 mx-auto shadow-lg md:mt-0 mt-10 hover:scale-110 translate-x-4 duration-300'>
                        <img className='mx-auto' src="/src/assets/assets/icons/Group 1372.png" width={72} alt="" />
                        <h3 className='font-bold'>Anti Age Face Treatment</h3>
                        <p className='text-pink-500 font-bold'>$199</p>
                        <p>We craft stunning and <br /> amazing web UI, using a well drrafted <br />   UX to fit your product.</p>
                    </div>
                    <div className=' text-center border-2 w-2/3 p-5 space-y-3 shadow-cyan-700 mx-auto shadow-lg md:mt-0 mt-10 hover:scale-110 translate-x-4 duration-300'>
                        <img className='mx-auto' src="/src/assets/assets/icons/Group 1372.png" width={72} alt="" />
                        <h3 className='font-bold'>Anti Age Face Treatment</h3>
                        <p className='text-pink-500 font-bold'>$199</p>
                        <p>We craft stunning and <br /> amazing web UI, using a well drrafted <br />   UX to fit your product.</p>
                    </div>

                   
                </div>

                <div className='text-center mt-10'>
                    <button className="btn btn-secondary">Explore More</button>
                    </div>
            </div>

        </div>
    );
};

export default Header;