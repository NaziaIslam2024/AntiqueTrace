import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import logo from '../../assets/AT.png'

const Navbar2 = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire("User signed out successfully.");
            })
            .catch(error => {
                Swal.fire('Error occured:', error.message);
            })
        navigate('/');
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtifacts'>All Artifacts</NavLink></li>
        <li><NavLink to='/newsletter'>Newsletter</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addArtifacts'>Add Artifacts</NavLink></li>
                {/* <li><NavLink to='/profile'>Profile</NavLink></li> */}
            </>
        }
    </>

    return (
        <div className='bg-black bg-opacity-90 sticky top-0 z-50 text-[#ffd700]'>
            <div className="navbar lg:max-w-7xl mx-auto">
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
                            className="bg-black menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="flex items-center text-lg md:text-3xl font-bold">
                    <img className='w-16' src={logo} alt="" />Antique Trace</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <div data-tooltip-id="my-tooltip" tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        {/* <Tooltip id="my-tooltip" place="left" type="light" effect="float">
                                            <span>{user.displayName}</span>
                                        </Tooltip> */}
                                        <div className="w-10 rounded-full">
                                            <img alt="userPhotoo" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-black border border-[#ffd700] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <a className="justify-between">{user.displayName} </a>
                                        </li>
                                        <li><Link to={`/myArtifacts/${user.email}`}>My Artifacts</Link></li>
                                        <li><Link to='/likedArtifacts'>Liked Artifacts</Link></li>
                                        <li><a onClick={handleSignOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <Link className='btn bg-black text-[#ffd700] border-[#ffd700]' to='/login'>Sign in</Link>
                                <Link className='btn bg-black text-[#ffd700] border-[#ffd700]' to='/register'>Sign up</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar2;