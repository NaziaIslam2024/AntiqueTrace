import React, { useEffect, useState } from 'react';

const Galary = () => {
    // const now = new Date();
    // const formattedDate = now.toLocaleDateString(); // e.g., "12/25/2024"
    // const formattedTime = now.toLocaleTimeString(); // e.g., "10:30:45 AM"
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [])
    return (
        <div className='my-22'>
            <h1 className='text-3xl text-center mb-10'>Ongoing Events</h1>
            <div className="dark:bg-gray-100 dark:text-gray-100 mx-4">
                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1661108180390-409a2b1c1a42)",
                    }}>
                        <div className="text-white flex flex-col items-center p-8 py-12 text-center">
                            {/* <span>{formattedDate} - {formattedTime}</span> */}
                            <span>{dateTime.toLocaleDateString()}-{dateTime.toLocaleTimeString()}</span>
                            <h1 className="py-4 text-5xl font-bold">Artifacts from encient time is calling you.</h1>
                            <p className="pb-6">Museum . Conference . Exibition . Gallary . Fair</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2">
                            <span>30 December, 2024</span>
                            <h1 className="text-2xl font-bold">Group exibition: Contract of Fiction</h1>
                            <p>Dates, tickets, info • Group exibition: Contract of Fiction • P61 Gallery• Order tickets online or by telephone over the event calendar on Berlin.de.</p>
                            <a rel="noopener noreferrer" href="" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span>12 January, 2025</span>
                            <h1 className="text-2xl font-bold">Artists Stef Galea, Rebecca Bonaci, and Jade Zammit at ‘For The Love of Art’ exibition</h1>
                            <p>The exhibition features a carefully curated selection of works by talented Maltese artists Stef Galea, Rebecca Bonaci, and Jade Zammit, each of...!</p>
                            <a rel="noopener noreferrer" href="" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span>24 June, 2025</span>
                            <h1 className="text-2xl font-bold">Textile Innovations Take Centerstage In The KatHABI Exibition Opening In New York</h1>
                            <p>The exhibit showcases DOST-PTRI's groundbreaking textile innovations, featuring the Philippine silk, natural dyes, and natural fibers of the...</p>
                            <a rel="noopener noreferrer" href="" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Galary;