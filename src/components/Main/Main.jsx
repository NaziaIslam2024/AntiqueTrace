import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar2/Navbar2';

const Main = () => {
    return (
        <div className=''>
            {/* <Navbar></Navbar> */}
            <Navbar2></Navbar2>
            <div className='lg:max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;