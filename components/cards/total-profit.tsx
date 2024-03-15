import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { LuShoppingCart } from "react-icons/lu";

const TotalProfit = () => {
    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-blue-500 text-xl font-bold bg-blue-50 p-3 rounded-full w-11'><LuShoppingCart /></p>
            <h3 className='text-2xl font-bold pt-3'>$45,2k</h3>
            <div className='flex justify-between text-sm pt-1 font-semibold text-[#939090]'>
                <p>Total Profit</p>
                <p className='flex items-center gap-1 text-green-500'>4.35% <IoMdArrowUp /></p>
            </div>
        </div>
    );
};

export default TotalProfit;