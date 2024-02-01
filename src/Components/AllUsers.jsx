import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const AllUsers = () => {
    const data = useContext(AppContext);

    return (
        <div className='bg-[#15202b] min-h-screen text-white'>
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>
            <div className="w-full max-w-md border border-gray-300 rounded p-4">
                {data.AllUsers.map(user => (
                    <div key={user._id} className="mb-4 border p-5 hover:bg-white hover:text-black">
                        <p className="font-bold text-center">User Name: {user.name}</p>
                        <p className="text-center">User Email: {user.email}</p>
                        <p className=" text-center">User Phone: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default AllUsers;

