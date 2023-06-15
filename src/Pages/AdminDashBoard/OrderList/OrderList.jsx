import React from 'react';

const OrderList = () => {
    return (
        <div>
            <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                <h1>Order List</h1>
                <h1>Pro Purlor</h1>
            </div>


            <div className="overflow-x-auto bg-blue-100 h-screen p-5">
                <table className="table table-xs bg-white p-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>     
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default OrderList;