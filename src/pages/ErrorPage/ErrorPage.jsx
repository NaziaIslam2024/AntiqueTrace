import React from 'react';
import notFound from '../../assets/5203299.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-white flex flex-col items-center justify-center'>
            <img className='w-1/3 h-[70%]' src={notFound} alt="notFound" />
            <Link to='/' className='btn bg-[#ffd700] text-lg'>Back to Home</Link>
        </div>
        // bg-[#ffd700]
    );
};

export default ErrorPage;