import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 p-5 mx-auto'>
            <h1 className="text-3xl mb-10 text-center">Blogs</h1>
            <div>
                <div className='flex gap-1'>
                    <div className='flex-1'>
                        <div className="card">
                            <figure>
                                <img className='w-full h-[400px]' src="https://cdn.sanity.io/images/cctd4ker/production/d978184e2999813f5f163bc37611f8aa4b3c85cb-5120x2880.jpg" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">A First Look at the Designs for The Met’s New Modern and Contemporary Art Wing</h2>
                                <p>Director and CEO Max Hollein shares architect Frida Escobedo’s dynamic vision for the new Tang Wing.</p>
                                <p>Max Hollein December 10, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="card">
                            <figure>
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/XGH8i6Bu8qw" title="Exhibition Tour—Flight Into Egypt: Black Artists and Ancient Egypt, 1876–Now | Met Exhibitions" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Exhibition Tour—Flight Into Egypt: Black Artists and Ancient Egypt, 1876–Now</h2>
                                <p>Join Akili Tommasino, Curator in the Department of Modern and Contemporary Art, artist Julie Mehretu, and artist Fred Wilson, for a virtual tour of Flight into Egypt: Black Artists and Ancient Egypt, 1876–Now</p>
                                <p>December 5,2000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <div className='flex-1'>
                        <div className="card">
                            <figure>
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/rvbH2OCxWIM" title="Todd Oldham: The Muchness of André Leon Talley" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Todd Oldham: The Muchness of André Leon Talley</h2>
                                <p>Join Akili Tommasino, Curator in the Department of Modern and Contemporary Art, artist Julie Mehretu, and artist Fred Wilson, for a virtual tour of Flight into Egypt: Black Artists and Ancient Egypt, 1876–Now</p>
                                <p>July 5,2000</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="card">
                            <figure>
                                <img className='w-full h-[300px]' src="https://cdn.sanity.io/images/cctd4ker/production/6feca0d41be8e9cd9c059e49d5e38ea353ac5a82-5120x5120.png" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Iman Issa on Ancient Egypt</h2>
                                <p>How do we define a historical concept so distant yet pertinent today?</p>
                                <p>Iman Issa
                                November 22, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="card">
                            <figure>
                                <img className='w-full h-[300px]' src="https://cdn.sanity.io/images/cctd4ker/production/208e2efe6f75609e9236d5cdfe4382f4e3091079-1920x1080.jpg" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Aoi Shobo’s Print Portfolio</h2>
                                <p>Merging art and poetry in 1940s Japan.</p>
                                <p>Hector Yuyang Chen
                                November 20, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;