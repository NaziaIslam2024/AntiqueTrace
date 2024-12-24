import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext/AuthContext';

const Register = () => {
    const {signInWithGoogle, createUser} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(null);
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const name = e.target.name.value;
        // console.log("Sihn up hoooooo:", email, password);
        //password validation 
        if (password.length < 6) {
            // setErrorMessage("Password Length must be at least 6 character.");
            Swal.fire("Password Length must be at least 6 character.");
            return;
        }
        const passwordRegeX = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegeX.test(password)) {
            // setErrorMessage("Please add at least one Uppercase letter & one Lowercase letter in your password.");
            Swal.fire("Please add at least one Uppercase letter & one Lowercase letter in your password.")
            return;
        }
        createUser(email, password)
            .then(result => {
                Swal.fire("User created successful.");
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
            e.target.reset();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire("User created successful.");
                navigate('/');
            })
            .catch(error => Swal.fire("Error: ", error.message))
    }
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/s3qp8HP/reg.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Register yourself</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='url' type="text" placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <p onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 bottom-3'><FaEye /></p>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-[#ffd700] text-black">Sign Up</button>
                        </div>
                        <div className="text-white divider text-sm">Or</div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-[#f9ae3f]"><FcGoogle className='text-xl'></FcGoogle>Sign Up with Google</button>
                        </div>
                    </form>
                    <p className='text-white font-extralight text-sm text-center'>Already have account? <Link className='text-[#f9ae3f]' to='/login'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;