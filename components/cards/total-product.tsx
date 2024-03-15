import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { LiaShoppingBagSolid } from "react-icons/lia";

const TotalProduct = () => {
    return (
        <div className='bg-white p-4 rounded-md  shadow-md'>
            <p className='text-blue-500 text-xl font-bold bg-blue-50 p-3 rounded-full w-11'><LiaShoppingBagSolid /></p>
            <h3 className='text-2xl font-bold pt-3'>2.450</h3>
            <div className='flex justify-between text-sm pt-1 font-semibold text-[#939090]'>
                <p>Total Product</p>
                <p className='flex items-center gap-1 text-green-500'>2.59% <IoMdArrowUp /></p>
            </div>
        </div>
    );
};

export default TotalProduct;