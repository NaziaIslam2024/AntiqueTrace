import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoBig.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtifacts'>All Artifacts</NavLink></li>
        {/* {
            user && <>
                <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        } */}
    </>
    return (
        <div className="navbar text-[#ffd700] py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-10' src={logo} alt="" />
                <a className="btn btn-ghost text-xl">Antique Trace</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link className='btn bg-black text-[#ffd700] border-[#ffd700]' to='/login'>Sign in</Link>
                <Link className='btn bg-black text-[#ffd700] border-[#ffd700]' to='/login'>Sign in</Link>
            </div>
        </div>
    );
};

export default Navbar;