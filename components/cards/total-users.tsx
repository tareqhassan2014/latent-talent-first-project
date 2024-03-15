import React from 'react';
import { IoMdArrowDown } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";

const TotalUsers = () => {
    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-blue-500 text-xl font-bold bg-blue-50 p-3 rounded-full w-11'><HiOutlineUsers /></p>
            <h3 className='text-2xl font-bold pt-3'>3.456</h3>
            <div className='flex justify-between text-sm pt-1 font-semibold text-[#939090]'>
                <p>Total Users</p>
                <p className='flex items-center gap-1 text-green-500'>0.95% <IoMdArrowDown /></p>
            </div>
        </div>
    );
};

export default TotalUsers;