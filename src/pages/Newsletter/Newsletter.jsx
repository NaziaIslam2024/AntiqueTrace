import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const handleSubcription = (e) => {
        e.preventDefault();
        document.getElementById("subcription").reset();
        Swal.fire("Subscription completed");
    }
    return (
        <div className='md:flex md:gap-2 space-y-4 m-4 justify-center items-center mt-4 lg:mt-10'>
            <div className='lg:flex-1 text-[#ffd700]'>
                <h1 className='text-xl mb-6'>To get latest news about our conferences, exibitions and newsletter <br />            </h1>
                <span className='text-3xl font-bold'>Subscribe now!!!</span>
            </div>
            <form id="subcription" className='lg:flex-1 bg-[#ffd700] card-body'>
                {/* <form className="card-body"> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleSubcription} className="btn bg-black text-[#ffd700] border border-black hover:text-black">Subscribe</button>
                    </div>
                {/* </form> */}
            </form>
        </div>
    );
};

export default Newsletter;