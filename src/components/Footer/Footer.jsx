import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#4A4947] text-white flex flex-col items-center p-10'>
             <h1 className='text-2xl font-bold'>Books Library</h1>
             <div className='border-b-2 w-4/5 my-5'></div>
             <div>
                <p>&#169; Copyright 2024. All Rights Reserved Books Library.</p>
             </div>
        </div>
    );
};

export default Footer;